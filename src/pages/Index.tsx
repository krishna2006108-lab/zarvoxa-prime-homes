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
import Chatbot from "@/components/Chatbot";

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
  {
    id: "7",
    title: "Burj Khalifa View Apartment",
    price: "3,800,000 AED",
    location: "Downtown Dubai",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    type: "Apartment",
  },
  {
    id: "8",
    title: "Emirates Hills Mansion",
    price: "15,000,000 AED",
    location: "Emirates Hills",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    type: "Villa",
  },
  {
    id: "9",
    title: "Dubai Creek Harbour Penthouse",
    price: "6,900,000 AED",
    location: "Dubai Creek Harbour",
    bedrooms: 4,
    bathrooms: 5,
    sqft: 4800,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop",
    type: "Penthouse",
  },
  {
    id: "10",
    title: "Jumeirah Golf Estates Villa",
    price: "7,500,000 AED",
    location: "Jumeirah Golf Estates",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    type: "Villa",
  },
  {
    id: "11",
    title: "City Walk Townhouse",
    price: "4,200,000 AED",
    location: "City Walk",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
    type: "Townhouse",
  },
  {
    id: "12",
    title: "Marina Promenade Apartment",
    price: "2,200,000 AED",
    location: "Dubai Marina",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    type: "Apartment",
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
      <Chatbot />
    </div>
  );
};

export default Index;
