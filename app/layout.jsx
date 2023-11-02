import { Nunito } from "next/font/google";
import "./globals.css";
import SessionProvider from "../providers/SessionProvider";
import ToastProvider from "@/providers/ToastProvider";

const inter = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "900", "1000"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ToastProvider />
          <div className="h-screen w-screen flex items-center justify-center">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
