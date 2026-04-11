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
        title="GROX — Execution Company | Design, Development & Content"
        description="GROX is an execution company delivering design, development, and content systems. No chaos. No delays. Just structured execution that ships."
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