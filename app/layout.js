
import "./globals.css";


export const metadata = {
  title: "SkyScope",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        {children}
      </body>
    </html>
  );
}
