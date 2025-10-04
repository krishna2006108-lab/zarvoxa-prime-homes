import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-dubai.jpg";

interface HeroProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Dubai Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Find Your Dream Property in UAE
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Verified listings, trusted agents, and AI-powered buyer leads.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-5xl mx-auto animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Input
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="border-border"
            />
            
            <Select
              value={filters.propertyType}
              onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filters.priceRange}
              onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1m">Under 1M AED</SelectItem>
                <SelectItem value="1m-3m">1M - 3M AED</SelectItem>
                <SelectItem value="3m-5m">3M - 5M AED</SelectItem>
                <SelectItem value="5m+">5M+ AED</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filters.bedrooms}
              onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4+">4+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button
            onClick={handleSearch}
            className="w-full md:w-auto bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
