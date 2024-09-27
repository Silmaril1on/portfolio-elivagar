import "./globals.css";

export const metadata = {
  title: "Elivagar | React Developer",
  description: "REACT web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
