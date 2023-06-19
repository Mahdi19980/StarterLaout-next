import Providers from "./components/mode/ThemeProvider";
import Themechanger from "./components/mode/ThemeChanger";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/sideBar/drawer";

// import { Metadata } from "next";
import "./globals.css";
import "./components/sideBar/sideBar.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
            <LayoutProvider>{children}</LayoutProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
