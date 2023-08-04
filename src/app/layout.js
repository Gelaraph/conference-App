import DefaultFooter from "./components/footer/DefaultFooter";
import DefaultNavbar from "./components/navbar";
// import navRoutes from "./components/navbar/navRoutes";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Conference App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={` ${inter.className}`}
      >
        <div className="body-wrap">
          <DefaultNavbar />
          {children}
          <DefaultFooter />
        </div>
      </body>
    </html>
  );
}
