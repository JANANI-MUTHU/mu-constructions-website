import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackLink from "../components/BackLink";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-6">
        <BackLink fallback="/" />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
