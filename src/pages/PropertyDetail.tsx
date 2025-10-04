import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bed, Bath, Maximize, MapPin, MessageCircle, Mail, Phone, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Mock property data - in real app, fetch from backend
  const property = {
    id: "1",
    title: "Luxurious Marina Penthouse",
    price: "4,500,000 AED",
    location: "Dubai Marina",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    description: "Experience luxury living at its finest in this stunning penthouse. This magnificent property features floor-to-ceiling windows offering breathtaking views of Dubai Marina. The spacious layout includes a modern kitchen, elegant living areas, and a private terrace perfect for entertaining.",
    features: ["Private Pool", "Gym Access", "24/7 Security", "Covered Parking", "Smart Home System", "Sea View"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    agent: {
      name: "Sarah Al-Maktoum",
      phone: "+971 50 123 4567",
      email: "sarah@primeproperties.ae",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    },
  };

  const [currentImage, setCurrentImage] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "The agent will contact you shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917668548433", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-gold mb-6 transition-smooth">
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-[500px] rounded-xl overflow-hidden">
                  <img
                    src={property.images[currentImage]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`relative h-32 rounded-lg overflow-hidden ${
                        currentImage === index ? "ring-2 ring-gold" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h1 className="text-3xl font-bold text-primary mb-2">{property.title}</h1>
                  <p className="text-3xl font-bold text-gold mb-4">{property.price}</p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="h-5 w-5" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex gap-6 mb-6 pb-6 border-b">
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="h-5 w-5 text-primary" />
                      <span className="font-semibold">{property.sqft} sqft</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-primary mb-3">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-primary mb-3">Features</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Info */}
              <Card className="shadow-gold">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Contact Agent</h3>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={property.agent.photo}
                      alt={property.agent.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-primary">{property.agent.name}</h4>
                      <p className="text-sm text-gold">Property Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white mb-3"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Agent
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Send Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="detail-name">Name</Label>
                      <Input
                        id="detail-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="detail-email">Email</Label>
                      <Input
                        id="detail-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="detail-phone">Phone</Label>
                      <Input
                        id="detail-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="detail-message">Message</Label>
                      <Textarea
                        id="detail-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="I'm interested in this property..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
