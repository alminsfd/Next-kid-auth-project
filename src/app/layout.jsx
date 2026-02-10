import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from 'next/font/local'
import SessionProviderpage from "@/provider/SessionProviderpage";
const poopin = Poppins({
  weight: ['100', '200', '400', '500', '600', '800']

})

export const myFont = localFont({
  src: '../fonts/mayaboti-normal.ttf',
}

)

export const metadata = {
  title: {
    default: "Hero Kids – Smart Toys for Smart Kids",
    template: "%s | Hero Kids",
  },

  description:
    "Hero Kids offers premium educational toys and learning boards for kids. Safe, fun, and designed to boost creativity and intelligence.",

  keywords: [
    "kids toys",
    "educational toys",
    "learning toys",
    "kids learning board",
    "hero kids",
    "smart toys for kids",
    "baby toys online",
  ],

  applicationName: "Hero Kids",

  authors: [{ name: "Hero Kids Team" }],

  creator: "Hero Kids",

  metadataBase: new URL("https://hero-kid-beta.vercel.app"),

  openGraph: {
    title: "Hero Kids – Educational Toys for Kids",
    description:
      "Discover fun and educational toys for kids. Learning boards, smart toys, and more at Hero Kids.",
    url: "https://hero-kid-beta.vercel.app",
    siteName: "Hero Kids",
    images: [
      {
        url: "https://i.ibb.co.com/fchxQzN/herokidshome.png",
        width: 1200,
        height: 630,
        alt: "Hero Kids Home Page",
      },
      {
        url: "https://i.ibb.co.com/nM8x59SL/Allproducts.png",
        width: 1200,
        height: 630,
        alt: "Hero Kids All Products",
      },
      {
        url: "https://i.ibb.co.com/XZft68Lt/Productsdetailspage.png",
        width: 1200,
        height: 630,
        alt: "Hero Kids Product Details Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kids – Smart Toys for Kids",
    description:
      "Shop educational and smart toys for kids. Safe, fun, and creativity boosting toys at Hero Kids.",
    images: [
      "https://i.ibb.co.com/fchxQzN/herokidshome.png",
    ],
    creator: "@herokids", // optional
  },

  icons: {
    icon: "https://i.ibb.co.com/nqrZ4TBv/logo.png",
    shortcut: "https://i.ibb.co.com/nqrZ4TBv/logo.png",
    apple: "https://i.ibb.co.com/nqrZ4TBv/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Kids & Toys",
};


export default function RootLayout({ children }) {
  return (
    <SessionProviderpage>
      <html lang="en">
        <body
          className={`${poopin.className}  antialiased  `}
        >
          <header className="py-2 md:w-11/12 mx-auto" >
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-301px)]" >
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </SessionProviderpage>
  );
}
