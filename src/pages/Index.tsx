import { useState } from "react";
import Header from "@/components/Header";
import Hero, { SearchFilters } from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import { Property } from "@/components/PropertyCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import BookingWidget from "@/components/BookingWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const allProperties: Property[] = [
  {
    id: "1",
    title: "Luxurious Marina Penthouse",
    price: "4,500,000 AED",
    location: "Dubai Marina",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    type: "Penthouse",
  },
  {
    id: "2",
    title: "Modern Downtown Apartment",
    price: "1,800,000 AED",
    location: "Downtown Dubai",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop",
    type: "Apartment",
  },
  {
    id: "3",
    title: "Palm Jumeirah Villa",
    price: "8,200,000 AED",
    location: "Palm Jumeirah",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 5000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    type: "Villa",
  },
  {
    id: "4",
    title: "Business Bay Townhouse",
    price: "3,100,000 AED",
    location: "Business Bay",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop",
    type: "Townhouse",
  },
  {
    id: "5",
    title: "Elegant JBR Apartment",
    price: "2,400,000 AED",
    location: "Jumeirah Beach Residence",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1900,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    type: "Apartment",
  },
  {
    id: "6",
    title: "Arabian Ranches Villa",
    price: "5,600,000 AED",
    location: "Arabian Ranches",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    type: "Villa",
  },
];

const Index = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(allProperties);

  const handleSearch = (filters: SearchFilters) => {
    let filtered = allProperties;

    if (filters.location) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.propertyType) {
      filtered = filtered.filter((p) =>
        p.type.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }

    if (filters.bedrooms) {
      const bedroomCount = parseInt(filters.bedrooms);
      filtered = filtered.filter((p) =>
        filters.bedrooms === "4+" ? p.bedrooms >= 4 : p.bedrooms === bedroomCount
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <FeaturedProperties properties={filteredProperties} />
        <WhyChooseUs />
        <BookingWidget />
        <Agents />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
