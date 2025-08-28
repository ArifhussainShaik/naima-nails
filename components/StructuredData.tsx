export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Naomi Nails NYC",
    "description": "Expert Russian manicures and artistic nail designs in New York City. Specializing in precision techniques for long-lasting, healthy nails.",
    "url": "https://naominailsnyc.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "XXX Street", // Replace with actual address
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "XXXXX", // Replace with actual postal code
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128", // Replace with actual coordinates
      "longitude": "-74.0060"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "image": "https://naominailsnyc.com/images/IMG_0736.webp",
    "sameAs": [
      "https://www.instagram.com/naominailsnyc", // Replace with actual social media
      "https://www.facebook.com/naominailsnyc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nail Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Russian Manicure",
            "description": "Precision Russian manicure technique for long-lasting results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gel Manicure",
            "description": "Professional gel manicure with premium products"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nail Art",
            "description": "Custom artistic nail designs and decorations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pedicure",
            "description": "Complete pedicure service with relaxing treatment"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The best Russian manicure in NYC! Naomi is incredibly skilled and my nails have never looked better. The attention to detail is unmatched."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jessica L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Amazing attention to detail and the most relaxing experience. I won't go anywhere else! My gel manicure lasted over 3 weeks."
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Naomi Nails NYC",
    "url": "https://naominailsnyc.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://naominailsnyc.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Naomi Nails NYC",
    "url": "https://naominailsnyc.com",
    "logo": "https://naominailsnyc.com/images/logo.png", // Add actual logo
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
