import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import MenuComponent from "@/components/MenuComponent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuComponent />
        {children}
      </body>
    </html>
  );
}