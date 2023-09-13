import { orbitron, exo2 } from "./fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: { default: "Indie Gamer", template: "%s | Indie Gamer" },
  description: "Website about game reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="flex min-h-screen flex-col bg-orange-50 px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{" "}
          <a
            className="text-orange-800 hover:underline"
            href="https://rawg.io/"
          >
            {" "}
            rawg.io
          </a>
        </footer>
      </body>
    </html>
  );
}
