import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navLinks outside the component to avoid recreation on every render
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#testimonialssection", label: "About" },
    { href: "#TrustSection", label: "Trust" },
    { href: "#footer", label: "Contact" },
  ];

  // Effect to close the mobile menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is larger than the 'md' breakpoint (768px)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="igads.png"
              alt="iGads Logo"
              className="h-16 w-auto sm:h-22 md:h-22 object-contain"
            />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[16px] font-thin hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            {/* Desktop Icons */}
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <ShoppingBag size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User size={20} />
            </Button>

            {/* Mobile Hamburger Button */}
            <Button
  onClick={() => setIsMenuOpen(true)}
  variant="ghost"
  className="w-18 h-18 md:hidden"
>
  <Menu size={36} />
</Button>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-black text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "-translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-4 ">
              {/* Logo within mobile menu */}
              <div></div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-400"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-6 py-4 text-[16px] font-thin">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Overlay to close menu when clicking outside */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};