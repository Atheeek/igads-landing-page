import { ArrowRight, Star, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import IPhone3DModel from "./iPhone3DModel";

export const HeroSection = () => {
  return (
    <section className="relative pb-20 pt-0 sm:pb-20 sm:py2 bg-gradient-to-br from-background via-background/90 to-background overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-24">
          {/* Left Text Content */}
          <div className="w-full max-w-2xl space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight">
              Upgrade to{" "}
              <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
                Premium Apple
              </span>{" "}
              Devices
            </h1>

            <p className="text-muted-foreground text-lg font-body max-w-xl mx-auto lg:mx-0">
              Certified pre-owned iPhones, MacBooks, and Watches with warranty,
              GST billing, and nationwide delivery.
            </p>

            {/* CTA & Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                variant="neon"
                className="bg-white text-black group inline-flex items-center"
                as="a"
                href="#products"
              >
                <span>Browse Collection</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-success-glow" />
                Trusted by 10,000+ customers
              </div>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 text-sm text-muted-foreground">
              {[
                { icon: Truck, label: "Pan-India Delivery" },
                { icon: RefreshCw, label: "Easy Returns" },
                { icon: Star, label: "4.9★ Rated" },
                { icon: ShieldCheck, label: "Verified Devices" },
              ].map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center sm:justify-start text-primary-glow"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3D Model */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-[4/5]">
            <IPhone3DModel />
          </div>
        </div>
      </div>
    </section>
  );
};
