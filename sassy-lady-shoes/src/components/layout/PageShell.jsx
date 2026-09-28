import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}