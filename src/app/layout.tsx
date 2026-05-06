import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuComponent from "@/components/MenuComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuComponent />
        {children}
      </body>
    </html>
  );
}