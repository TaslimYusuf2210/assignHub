import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-br from-blue-50 to-indigo-100`}
      >
        {children}
      </body>
    </html>
  );
}
