import { CONTACT, SITE_URL, SOCIAL } from "@/constants/contact";

const BUSINESS_NAME = "Arden 360";
const BUSINESS_DESCRIPTION =
  "Professional IT managed services, VoIP, network cabling, audio visual, and security solutions for your business.";

const OFFERED_SERVICES = [
  "Managed IT Services",
  "VoIP Solutions",
  "Network & Cabling",
  "Audio Visual Systems",
  "Cybersecurity Services",
  "Camera Access & Security",
];

function toJsonLd(schema: Record<string, unknown>) {
  return {
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  };
}

export default function SchemaMarkup() {
  const sameAs = Object.values(SOCIAL).filter(Boolean);
  const telephone = CONTACT.phone.startsWith("+")
    ? CONTACT.phone
    : `+1${CONTACT.phone}`;

  const addressFields = {
    streetAddress: process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS,
    addressLocality: process.env.NEXT_PUBLIC_BUSINESS_CITY,
    addressRegion: process.env.NEXT_PUBLIC_BUSINESS_STATE,
    postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE,
  };

  const hasAddressFields = Object.values(addressFields).some(Boolean);
  const latitude = process.env.NEXT_PUBLIC_BUSINESS_LATITUDE;
  const longitude = process.env.NEXT_PUBLIC_BUSINESS_LONGITUDE;

  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: BUSINESS_NAME,
    description: BUSINESS_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/arden-logo.png`,
    telephone,
    email: CONTACT.email,
    areaServed: "United States",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    ...(hasAddressFields
      ? {
          address: {
            "@type": "PostalAddress",
            ...addressFields,
            addressCountry: "US",
          },
        }
      : {}),
    ...(latitude && longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude,
            longitude,
          },
        }
      : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const serviceSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Managed IT Services",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Services",
      itemListElement: OFFERED_SERVICES.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={toJsonLd(localBusinessSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={toJsonLd(serviceSchema)}
      />
    </>
  );
}
