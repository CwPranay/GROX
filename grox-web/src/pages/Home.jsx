import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import StructuredData, { 
  organizationSchema, 
  serviceSchema, 
  faqSchema, 
  websiteSchema 
} from "../components/StructuredData";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyGrox from "../sections/WhyGrox";
import Process from "../sections/Process"
import Footer from "../components/Footer";
import SelectedWork from "../sections/SelectedWork";

export default function Home() {
  // Combine all schemas for home page
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      serviceSchema,
      faqSchema
    ]
  };

  return (
    <>
      <SEO 
        title="Web Development, Video Editing & Design Services | GROX"
       description="Hire experts for web development, video editing, and design services. Fast delivery, conversion-focused websites, and high-quality creative work."
      />
      <StructuredData data={homeSchema} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyGrox />
        <Process/>
        <SelectedWork/>
      </main>
      <Footer />
    </>
  );
}