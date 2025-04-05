import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview, trackInitiate } from "../tracking"; // Importing tracking functions
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Good Gut Project - Home",
  description: "Welcome to Good Gut Project, your guide to a healthier gut.",
  keywords: ["Good Gut Project", "Nutrition", "Gut Health", "GGP"],
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Track the initiation event when the app is loaded
    trackInitiate();
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    pageview();
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Facebook Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '641035925350213'); 
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Facebook Pixel NoScript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=641035925350213&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Razorpay Script */}
        <Script
          id="razorpay-script"
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />

        {/* Main Content */}
        <div className="mx-auto max-w-xl text-2xl gap-2">{children}</div>
      </body>
    </html>
  );
}
