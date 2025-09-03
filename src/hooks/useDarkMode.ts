'use client';
import { useCallback, useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        setIsDark(true);
      } else if (stored === 'light') {
        setIsDark(false);
      } else {
        const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefers);
      }
    } catch (e) {

    }
  }, []);

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((v) => !v), []);
  const setDark = useCallback((v: boolean) => setIsDark(v), []);

  return { isDark, toggle, setDark };
}
