import "./globals.css";
import Providers from "./components/Themeprovider";
import Themechanger from "./components/Themechanger";
import Navbar from "./components/navbar";
import SideBar from "./components/drawer";
import { Metadata } from "next";

export const metadata = {
  title: "Create Night Mode",
  description: "Manually Created",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <div className="overflow-x-hidden ">
            <Themechanger />
            <Navbar />
            <div class="grid  grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-10 ">{children}</div>
              <div className="hidden bg-zinc-300 md:col-span-2 md:flex ">
                <SideBar />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
