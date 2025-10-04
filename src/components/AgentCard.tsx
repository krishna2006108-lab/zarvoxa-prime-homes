import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail } from "lucide-react";

export interface Agent {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  email: string;
}

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917668548433", "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${agent.email}`;
  };

  return (
    <Card className="overflow-hidden shadow-elegant hover:shadow-gold transition-smooth group">
      <div className="relative h-80 overflow-hidden">
        <img
          src={agent.photo}
          alt={agent.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
      </div>
      
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-primary mb-1">{agent.name}</h3>
        <p className="text-sm text-gold mb-4">{agent.specialization}</p>
        
        <div className="flex gap-2">
          <Button
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button
            onClick={handleEmail}
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
