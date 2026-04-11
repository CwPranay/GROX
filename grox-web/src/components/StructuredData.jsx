import { useEffect } from 'react';

export default function StructuredData({ data }) {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';
    
    // Remove existing structured data if present
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    
    // Append to head
    document.head.appendChild(script);
    
    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);
  
  return null;
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GROX",
  "alternateName": "GROX Execution Company",
  "url": "https://grox.com",
  "logo": "https://grox.com/grox.png",
  "description": "GROX is an execution company delivering design, development, and content systems. No chaos. No delays. Just structured execution that ships.",
  "foundingDate": "2024",
  "slogan": "Built to Execute",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["English"]
  },
  "sameAs": [],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  }
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Execution Services",
  "provider": {
    "@type": "Organization",
    "name": "GROX"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Execution Layers",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Design Execution",
          "description": "Visual systems, thumbnails, and brand assets executed with clarity and consistency. Brand identity, UI design, marketing assets, and visual systems that scale."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Development Execution",
          "description": "Websites and interfaces built as systems — structured, scalable, and engineered to perform beyond launch. Web builds, landing pages, component systems, and interfaces that hold up."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Execution",
          "description": "Short-form edits and videos produced with speed, consistency, and delivery discipline. Reels, edits, thumbnails, and content at volume."
        }
      }
    ]
  }
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does GROX do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GROX is an execution company that delivers design, development, and content systems. We execute projects with structure and speed — no chaos, no delays, no freelancer noise."
      }
    },
    {
      "@type": "Question",
      "name": "What services does GROX offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GROX offers three execution layers: Design Execution (brand identity, UI design, marketing assets), Development Execution (websites, landing pages, component systems), and Content Execution (reels, edits, thumbnails, content at volume)."
      }
    },
    {
      "@type": "Question",
      "name": "How is GROX different from other agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GROX gives you access to output, not people. You submit your project, we own the execution, and deliver results. No project management on your end, no scattered messages, no follow-ups. Just structured execution that ships."
      }
    },
    {
      "@type": "Question",
      "name": "What is the turnaround time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GROX has an average turnaround time of 48 hours with 100% on-time delivery. We respond to project requests within 24-48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "How does the execution process work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The GROX execution process has three steps: 1) Intake - Work enters through a single structured request. 2) Execution - Tasks are handled by the right execution layer internally. 3) Delivery - Output delivered through GROX, consistent in quality, timing, and ownership."
      }
    },
    {
      "@type": "Question",
      "name": "Does GROX take every project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, GROX doesn't take every project. We evaluate each request to ensure it's a fit for our execution model. If it's a fit, we'll respond within 24-48 hours."
      }
    }
  ]
};

// WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GROX",
  "url": "https://grox.com",
  "description": "Execution company delivering design, development, and content systems",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://grox.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
