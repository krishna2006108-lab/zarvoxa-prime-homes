import PropertyCard, { Property } from "./PropertyCard";

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  return (
    <section id="properties" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across UAE
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {properties.length === 0 && (
          <p className="text-center text-muted-foreground">
            No properties found matching your search criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
