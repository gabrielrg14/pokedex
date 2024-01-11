import Script from "next/script"

export const Analytics = () => {
    return (
        <>
            <Script
                data-testid="gtag-script"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            />
            <Script id="google-analytics" data-testid="ga-script">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
                `}
            </Script>
        </>
    )
}
