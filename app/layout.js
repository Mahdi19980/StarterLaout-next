import Providers from "./components/Themeprovider";
import Themechanger from "./components/Themechanger";
import Navbar from "./components/navbar";
import SideBar from "./components/drawer";

// import { Metadata } from "next";
import "./globals.css";
import "./components/sideBar/sideBar.css";
import LayoutProvider from "./layoutPage";

export const metadata = {
  title: "Create Night Mode",
  description: "Manually Created",
};

export default function RootLayout({ children, ...appProps }) {
  return (
    <html>
      <body>
        <Providers>
          <div className="overflow-x-hidden ">
            <Themechanger />
            <LayoutProvider>{children}</LayoutProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
