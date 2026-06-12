import "../app/globals.css";

export const metadata = {
  title: "Vinit Kumbhani",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}