import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Droplet, 
  Zap, 
  Shield, 
  Coffee,
  Mail,
  Instagram
} from "lucide-react";
import pancake from "/lovable-uploads/d7f1130a-687e-4908-9d75-cb89c9354dcd.png";

export default function ProductHero() {
  const features = [
    { icon: Droplet, text: "물조절 필요 없음" },
    { icon: Zap, text: "적은 칼로리, 부담 없는 한 끼" },
    { icon: Shield, text: "인공 보존료 무첨가" },
    { icon: Coffee, text: "언제 어디서나 간편하게" }
  ];

  return (
    <section className="min-h-screen bg-gradient-subtle px-4 py-8 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Product Image */}
          <div className="relative order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img 
                src={pancake} 
                alt="간편 팬케이크 믹스 제품 사진"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Badge 
              className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground shadow-glow animate-pulse-soft"
            >
              orimeopda
            </Badge>
          </div>

          {/* Product Details */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                간편 팬케이크
                <span className="block text-primary">1인용 팬케이크 믹스</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                물 조절 필요 없이, 나만을 위한 딱 맞는 양.<br />
                간편하게 즐기는 1인 전용 팬케이크.
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
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-primary">₩3,150</p>
                  <p className="text-sm text-muted-foreground">1인용 팬케이크 믹스</p>
                </div>
              </div>

              <Button 
                variant="default" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
              >
                구매하기 • ₩3,150
              </Button>
            </Card>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                연락처
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a href="mailto:orimeopda@gmail.com" className="hover:text-primary transition-colors">
                    orimeopda@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Instagram className="h-4 w-4 text-secondary" />
                  <a 
                    href="https://www.instagram.com/orimeopda?igsh=N2lyd3Jtc290cGl3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @orimeopda
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}