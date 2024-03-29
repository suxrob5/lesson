export const metadata = {
  title: "Safari Wepstore",
  description: "Generated by Next.js",
  // icons: ["favicon.ico?v=4"],
  // apple: ["apple-touch-icon.png?v=4"],
  // shortcut: ["apple-touch-icon.png"],
  // manifest: "site.webmanifest",
};

// import { createContext,  useState } from "react";
import "../global.css";

// const MyContext = createContext();

export default function RootLayout({ children }) {
  // const [idoOpen, setIsOpen] = useState();

  return (
    <html lang="en">
      <body>
        <div className="max-w-[1519px] mx-auto">
          {children}
          {/* <MyContext.Provider value={{ isOpen }}>{children}</MyContext.Provider> */}
        </div>
      </body>
    </html>
  );
}
