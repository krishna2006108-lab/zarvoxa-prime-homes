import { CheckCircle, Users, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle,
    title: "Verified Listings",
    description: "Every property is verified and inspected by our expert team",
  },
  {
    icon: Users,
    title: "Direct Agent Contact",
    description: "Connect directly with certified agents via WhatsApp or phone",
  },
  {
    icon: Zap,
    title: "AI-Powered Buyer Leads",
    description: "Smart matching system connects you with serious buyers instantly",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service for all your inquiries",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Prime Properties?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver exceptional real estate experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center shadow-elegant hover:shadow-gold transition-smooth group"
            >
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-gold/20 transition-smooth">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-gold transition-smooth" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
