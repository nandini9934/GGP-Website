import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Good Gut Project",
  description: "Towards the healthy life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {/* <Navbar /> */}
          <div className="mx-auto max-v-xl text-2xl gap-2">
            {children}
          </div>
          {/* <Footer /> */}
          
      </body>
    </html >
  );
}
