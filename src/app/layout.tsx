import "./globals.css";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Transcom Digital",
  description: "E-commerce side for Transcom Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
