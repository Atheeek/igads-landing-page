import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Location {
  id: number;
  city: string;
  state: string;
  address: string;
  timings: string;
  phone: string;
  altPhone: string;
  email: string;
  isMain: boolean;
  position: { lat: number; lng: number; };
  mapUrl: string;
  embedUrl: string;
}

export const LocationsSection: React.FC = () => {
  const locations: Location[] = [
    {
      id: 1,
      city: "Calicut",
      state: "Kerala",
      address: "62/2628-a, Ivory Tower, YMCA Cross Rd, Opposite Hotel Marina Residency, Kozhikode, Kerala - 673001",
      timings: "10:00 AM - 8:00 PM",
      phone: "+91 807 541 7256",
      altPhone: "+91 953 999 9774",
      email: "igadsclt@gmail.com",
      isMain: false,
      position: { lat: 11.2603606, lng: 75.7779119 },
      mapUrl: "https://maps.app.goo.gl/yHjtubouXjM8PTcU6",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7483170382734!2d75.77532357502515!3d11.260360588919929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65fb08c4e3d53%3A0x224efc973037a476!2siGads%20Calicut!5e0!3m2!1sen!2sin!4v1723100000000"
    },
    {
      id: 2,
      city: "Kochi",
      state: "Kerala",
      address: "Ground Floor Rise Arcade, Kumaranashan Jn Kathrikadavu, Kochi 682017",
      timings: "10:00 AM - 8:00 PM",
      phone: "+91 953 999 9667",
      altPhone: "+91 953 999 9667",
      email: "igadsclt@gmail.com",
      isMain: false,
      position: { lat: 10.00998, lng: 76.265061 },
      mapUrl: "https://maps.app.goo.gl/sZhxVhCPn6yAB4Xb6",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7826.028519560653!2d75.777912!3d11.260361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65fb08c4e3d53%3A0x224efc973037a476!2siGads%20Calicut!5e0!3m2!1sen!2sus!4v1754651363785!5m2!1sen!2sus"
    },
    {
      id: 3,
      city: "Kannur",
      state: "Kerala",
      address: "1st Floor, Dark brown building, Kakkad Rd, South Bazar, Puzhathi Housing Colony, Kannur, Kerala 670002",
      timings: "10:00 AM - 8:00 PM",
      phone: "+91 953 999 9224",
      altPhone: "+91 953 999 9224",
      email: "igadsclt@gmail.com",
      isMain: false,
      position: { lat: 11.865553, lng: 75.3709973 },
      mapUrl: "https://maps.app.goo.gl/vBEH6XVR1nG5Xo8A6",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15617.544834778628!2d75.378646!3d11.878173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d486d979abb%3A0x17c61c580139b81a!2siGads%20Kannur!5e0!3m2!1sen!2sin!4v1754651434716!5m2!1sen!2sin"
    },
    {
      id: 4,
      city: "Bangalore",
      state: "Karnataka",
      address: "Link Road, 5th Cross Main Rd, Opp Kurl On Mattress, Malleshwaram, Bengaluru, Karnataka 560003",
      timings: "10:00 AM - 8:00 PM",
      phone: "+91 953 999 9227",
      altPhone: "+91 953 999 9227",
      email: "igadsblr@gmail.com",
      isMain: false,
      position: { lat: 12.9966111, lng: 77.5732222 },
      mapUrl: "https://maps.app.goo.gl/q9YxB98XxQbJXBeXA",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7775.225262734049!2d77.570652!3d12.99661!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzQ3LjgiTiA3N8KwMzQnMjMuNiJF!5e0!3m2!1sen!2sin!4v1754651469915!5m2!1sen!2sin"
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  const openInGoogleMaps = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openDirections = (lat: number, lng: number) => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Visit Our <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">Stores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Experience our premium collection firsthand at our flagship stores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section with Buttons */}
          <div className="relative glass-card p-4 rounded-2xl animate-fade-in-scale flex flex-col h-[350px] sm:h-[450px] lg:h-[520px]">
            <iframe
              key={selectedLocation.id}
              src={selectedLocation.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, flex: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex gap-4 mt-4">
              {/* <Button
                variant="outline"
                onClick={() => openInGoogleMaps(selectedLocation.mapUrl)}
              >
                View Larger Map
              </Button>
              <Button
                variant="default"
                onClick={() => openDirections(selectedLocation.position.lat, selectedLocation.position.lng)}
              >
                Directions
              </Button> */}
            </div>
          </div>

          {/* Locations List */}
          <div className="space-y-6">
            {locations.map((location, index) => (
              <div
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`glass-card p-6 transition-all duration-300 hover:scale-[1.03] cursor-pointer animate-slide-up ${selectedLocation.id === location.id ? 'shadow-glow-primary scale-[1.03]' : ''
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold font-display text-foreground">{location.city}</h3>
                      {location.isMain && (
                        <div className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">Flagship</div>
                      )}
                    </div>
                    <p className="text-muted-foreground">{location.state}</p>
                  </div>
                  <Navigation className="w-4 h-4 text-primary-glow" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary-glow" />
                    <span className="text-muted-foreground">{location.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary-glow" />
                    <span className="text-muted-foreground">{location.timings}</span>
                  </div>
                   
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary-glow" />
                    <span className="text-muted-foreground flex flex-col gap-1">
                      {/* Main phone number (no WhatsApp icon) */}
                      <span>{location.phone}</span>

                      {/* Alternate phone number with WhatsApp icon */}
                      <a
                        href={`https://wa.me/${location.altPhone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition"
                      >
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        {location.altPhone}
                      </a>
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">{location.email}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
