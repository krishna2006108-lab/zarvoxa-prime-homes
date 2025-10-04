import AgentCard, { Agent } from "./AgentCard";

const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Al-Maktoum",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
    specialization: "Luxury Villas Specialist",
    email: "sarah@primeproperties.ae",
  },
  {
    id: "2",
    name: "Ahmed Hassan",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop",
    specialization: "Downtown Dubai Expert",
    email: "ahmed@primeproperties.ae",
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=600&fit=crop",
    specialization: "Investment Properties",
    email: "maria@primeproperties.ae",
  },
  {
    id: "4",
    name: "Omar Al-Rashid",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
    specialization: "Commercial Real Estate",
    email: "omar@primeproperties.ae",
  },
];

const Agents = () => {
  return (
    <section id="agents" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certified agents are here to guide you through every step of your real estate journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
