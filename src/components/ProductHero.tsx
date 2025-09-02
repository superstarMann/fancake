import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Star, 
  Leaf, 
  Shield, 
  Heart, 
  CheckCircle,
  Truck
} from "lucide-react";
import granola from "@/assets/granola-hero.jpg";

export default function ProductHero() {
  const [purchaseType, setPurchaseType] = useState<"onetime" | "subscription">("onetime");

  const features = [
    { icon: Star, text: "Premium organic ingredients" },
    { icon: Heart, text: "Heart-healthy nuts and seeds" },
    { icon: Leaf, text: "No artificial preservatives" },
    { icon: CheckCircle, text: "Ready-to-eat convenience" }
  ];

  const certifications = [
    { icon: Leaf, label: "Organic" },
    { icon: Shield, label: "Non-GMO" },
    { icon: Heart, label: "No Palm Oil" },
    { icon: Truck, label: "Carbon Neutral" }
  ];

  return (
    <section className="min-h-screen bg-gradient-subtle px-4 py-8 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Product Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant animate-float">
              <img 
                src={granola} 
                alt="Premium Organic Granola Bowl"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Badge 
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground shadow-glow animate-pulse-soft"
            >
              Best Seller
            </Badge>
          </div>

          {/* Product Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Artisan Granola
                <span className="block text-primary">Breakfast Bowl</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start your morning with our carefully crafted blend of organic oats, 
                premium nuts, and antioxidant-rich berries.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Purchase Options */}
            <Card className="p-6 space-y-6 shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-card-foreground">Choose your option</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPurchaseType("onetime")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      purchaseType === "onetime" 
                        ? "border-primary bg-primary/5 shadow-soft" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-center space-y-2">
                      <p className="font-medium text-card-foreground">One-time</p>
                      <p className="text-2xl font-bold text-primary">$24.99</p>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setPurchaseType("subscription")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 relative ${
                      purchaseType === "subscription" 
                        ? "border-secondary-dark bg-secondary/20 shadow-soft" 
                        : "border-border hover:border-secondary/50"
                    }`}
                  >
                    <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs">
                      Save 15%
                    </Badge>
                    <div className="text-center space-y-2">
                      <p className="font-medium text-card-foreground">Subscription</p>
                      <p className="text-2xl font-bold text-secondary-dark">$21.24</p>
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                  </button>
                </div>
              </div>

              <Button 
                variant={purchaseType === "subscription" ? "subscription" : "hero"} 
                size="lg" 
                className="w-full"
              >
                Add to Cart • {purchaseType === "subscription" ? "$21.24/mo" : "$24.99"}
              </Button>
            </Card>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300">
                    <cert.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">{cert.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}