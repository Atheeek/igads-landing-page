import { Shield, Truck, RefreshCw, CreditCard, Star, Award } from "lucide-react";

export const TrustSection = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "Trusted Seller",
      description: "Certified and verified by industry standards",
      color: "text-primary-glow"
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "Free shipping to your doorstep nationwide",
      color: "text-primary-glow"
    },
    {
      icon: RefreshCw,
      title: "Easy Exchanges",
      description: "30-day return policy with no questions asked",
      color: "text-primary-glow"
    },
    {
      icon: CreditCard,
      title: "GST Bills & EMI",
      description: "Complete documentation and flexible payment",
      color: "text-primary-glow"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Every device tested and certified by experts",
      color: "text-primary-glow"
    },
    {
      icon: Award,
      title: "Best Prices",
      description: "Competitive pricing with price match guarantee",
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="TrustSection" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Why{" "}
            <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
              Trust Us?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            We're not just selling devices – we're delivering trust, quality, and peace of mind with every purchase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="group glass-card p-8 hover:shadow-glow-primary transition-all duration-500 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${badge.color.split('-')[1]}/10 to-${badge.color.split('-')[1]}/5`}>
                    <Icon className={`w-8 h-8 ${badge.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary-glow transition-colors">
                    {badge.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-flex items-center gap-4 px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-primary-glow">Trusted by 10,000+ customers</div>
              <div className="text-xs text-muted-foreground">Join our community today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};