import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "iPhones", href: "#" },
        { name: "MacBooks", href: "#" },
        { name: "Apple Watch", href: "#" },
        { name: "Accessories", href: "#" },
      ]
    },
    // {
    //   title: "Support",
    //   links: [
    //     { name: "Customer Care", href: "#" },
    //     { name: "Warranty Info", href: "#" },
    //     { name: "Return Policy", href: "#" },
    //     { name: "EMI Options", href: "#" },
    //     { name: "Track Order", href: "#" }
    //   ]
    // },
    // {
    //   title: "Company",
    //   links: [
    //     { name: "About Us", href: "#" },
    //     { name: "Our Story", href: "#" },
    //     { name: "Careers", href: "#" },
    //     { name: "Press", href: "#" },
    //     { name: "Contact", href: "#" }
    //   ]
    // }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/i.gads", color: "hover:text-pink-400" },
    { icon: Facebook, href: "https://www.facebook.com/i.gadsllp/", color: "hover:text-blue-400" },
    // { icon: Instagram, href: "https://www.instagram.com/i.gads/", color: "hover:text-pink-400" },
    // { icon: Youtube, href: "#", color: "hover:text-red-400" }
  ];

  return (
    <footer id="footer" className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Neon Lines Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-primary to-secondary opacity-30 animate-pulse" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold font-display mb-4">
                <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h3>
              <p className="text-muted-foreground font-body text-lg">
                Get the latest deals, product launches, and exclusive offers delivered to your inbox.
              </p>
            </div>

            <div className="flex gap-3">
              <Input
                placeholder="Enter your email address"
                className="glass-card border-card-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="hero" className="group">
                <Mail className="w-4 h-4" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-display text-foreground">Get in Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-glow" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Customer Support</div>
                  <div className="text-muted-foreground">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary-glow" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email Support</div>
                  <div className="text-muted-foreground">support@luxresale.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-success-glow" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Headquarters</div>
                  <div className="text-muted-foreground">MG Road, Kochi, Kerala</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className="space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="text-lg font-semibold font-display text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary-glow transition-colors duration-300 font-body"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-black from-primary to-secondary flex items-center justify-center font-bold text-foreground">
                <img
                  src="igads.png"
                  alt="iGads Logo"
                  className="h-14 w-auto sm:h-24 md:h-24 object-contain"
                />
              </div>
              <div>
                <div className="font-bold font-display text-foreground">iGads</div>
                <div className="text-sm text-muted-foreground">Premium Apple Reseller</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="glass"
                    size="icon"
                    className={`transition-colors duration-300 ${social.color} relative z-10`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>



            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center lg:text-right">
              <p>&copy; 2025 iGads. All rights reserved.</p>
              <p className="mt-1">Design and Developed by Atheek Rahman</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-secondary/5 blur-3xl" />
    </footer>
  );
};