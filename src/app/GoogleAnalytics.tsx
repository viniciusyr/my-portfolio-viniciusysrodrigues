import Script from "next/script";

export default function GoogleAnalytics() {

    const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

    if (!measurementId) {
        console.warn("Google Analytics Measurement ID is not set.");
        return null;
    }
    
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
