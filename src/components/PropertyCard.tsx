import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Maximize, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917668548433", "_blank");
  };

  return (
    <Card className="overflow-hidden shadow-elegant hover:shadow-gold transition-smooth group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute top-4 right-4 bg-gold text-primary px-3 py-1 rounded-full text-sm font-semibold">
          {property.type}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{property.title}</h3>
        <p className="text-2xl font-bold text-gold mb-3">{property.price}</p>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link to={`/property/${property.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Details
            </Button>
          </Link>
          <Button
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
