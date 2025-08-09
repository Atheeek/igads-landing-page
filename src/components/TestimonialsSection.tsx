import React, { useCallback, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
// **FIX 2:** Correctly import 'EmblaCarouselType' from the core package
import { type EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Type definition for a single testimonial
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  verified: boolean;
}

// Props for the TestimonialCard component
interface TestimonialCardProps {
  testimonial: Testimonial;
  style?: React.CSSProperties;
}

// Reusable Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, style }) => (
  <div
    className="group glass-card p-8 h-full flex flex-col hover:shadow-glow-primary transition-all duration-500 hover:scale-[1.02] animate-slide-up"
    style={style}
  >
    <div className="mb-6">
      <Quote className="w-8 h-8 text-primary/50 transform rotate-180" />
    </div>
    <div className="flex items-center gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg flex-grow">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-semibold text-foreground">
        {testimonial.avatar}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-foreground font-display">{testimonial.name}</h4>
          {testimonial.verified && (
            <div className="w-5 h-5 rounded-full bg-success-glow flex items-center justify-center">
              <div className="w-2 h-2 bg-background rounded-full" />
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    { id: 1, name: "Arjun Nair", location: "Kochi, Kerala", rating: 5, text: "Absolutely amazing experience! Got my iPhone 14 Pro at an incredible price. The device was in perfect condition.", avatar: "AN", verified: true },
    { id: 2, name: "Priya Sharma", location: "Bangalore, Karnataka", rating: 5, text: "Best place to buy pre-owned Apple devices. The MacBook I purchased works flawlessly and came with all original accessories.", avatar: "PS", verified: true },
    { id: 3, name: "Rohit Menon", location: "Calicut, Kerala", rating: 5, text: "Quick delivery, excellent packaging, and the device exceeded my expectations. The exchange process was seamless.", avatar: "RM", verified: true },
    { id: 4, name: "Sneha ", location: "Chennai, Tamil Nadu", rating: 5, text: "Outstanding service! The Apple Watch I ordered arrived in mint condition. The team was very helpful and responsive.", avatar: "SR", verified: true }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  // **FIX 1:** Corrected the useEffect hook structure
  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = (api: EmblaCarouselType) => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(emblaApi); // Set initial selected index on mount

    // Return the cleanup function directly
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonialssection" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            What Our <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        {/* Carousel for Mobile View */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-grow-0 flex-shrink-0 w-full min-w-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'bg-primary scale-125' : 'bg-muted/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for Desktop View */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};