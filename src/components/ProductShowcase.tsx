import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";
import heroIphone from "@/assets/hero-iphone.jpg";
import macbookHero from "@/assets/macbook-hero.jpg";
import watchHero from "@/assets/watch-hero.jpg";

export const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      image: heroIphone,
      price: "₹89,999",
      originalPrice: "₹1,34,900",
      category: "Smartphones",
      condition: "Like New",
      rating: 4.9,
      features: ["A17 Pro Chip", "48MP Camera", "Titanium Design"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      image: macbookHero,
      price: "₹1,45,999",
      originalPrice: "₹1,99,900",
      category: "Laptops",
      condition: "Excellent",
      rating: 4.8,
      features: ["M3 Chip", "18GB RAM", "512GB SSD"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      name: "Apple Watch Ultra 2",
      image: watchHero,
      price: "₹67,999",
      originalPrice: "₹89,900",
      category: "Wearables",
      condition: "Like New",
      rating: 4.9,
      features: ["49mm Titanium", "Action Button", "GPS + Cellular"],
      color: "from-emerald-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-muted/30 to-background/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
              Premium Collection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Discover our curated selection of certified pre-owned Apple devices, each one thoroughly tested and backed by our quality guarantee.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass-card overflow-hidden hover:shadow-glow-primary transition-all duration-500 hover:scale-[1.02] animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-50`} />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-success-glow">{product.condition}</span>
                </div>
                
                {/* Heart Icon */}
                <Button 
                  variant="glass" 
                  size="icon" 
                  className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-glow font-medium">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary-glow transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {product.features.map((feature, i) => (
                    <div key={i} className="text-sm text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary-glow font-display">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <div className="text-sm text-success-glow font-medium">
                    Save ₹{(parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.price.replace(/[₹,]/g, ''))).toLocaleString()}
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="hero" className="w-full group">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="neon" size="lg" className="group">
            <a href="https://www.instagram.com/i.gads/"><span>View All Products</span></a> 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};