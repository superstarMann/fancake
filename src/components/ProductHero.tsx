import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Droplet, 
  Zap, 
  Shield, 
  Coffee,
  Mail,
  Instagram
} from "lucide-react";
import pancake from "/lovable-uploads/d7f1130a-687e-4908-9d75-cb89c9354dcd.png";

const formSchema = z.object({
  nickname: z.string().min(1, "별명을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  gender: z.string().optional(),
  ageGroup: z.string().optional(),
});

export default function ProductHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
      email: "",
      gender: "",
      ageGroup: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('nickname', values.nickname);
      formData.append('email', values.email);
      if (values.gender) formData.append('gender', values.gender);
      if (values.ageGroup) formData.append('ageGroup', values.ageGroup);

      const response = await fetch('https://formspree.io/f/mzzakakz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "제출이 완료되었습니다! 🎉",
          description: "사장님이 직접 찾아가서 만들어줍니다 🥞",
        });
        setIsModalOpen(false);
        form.reset();
        
        // Redirect after 3 seconds
        setTimeout(() => {
          window.location.href = 'https://orimeopda.github.io/thankyou.html';
        }, 3000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "제출 실패",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                alt="간편 핫케이크 믹스 제품 사진"
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
              <h1 className="font-noto-kr text-center space-y-2">
                <div className="text-[38px] font-bold text-accent-pink leading-tight">
                  간편 핫케이크 믹스
                </div>
                <div className="text-[20px] font-normal text-accent-pink-light">
                  1인용으로 딱 맞는 한 끼
                </div>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                물 조절 필요 없이, 나만을 위한 딱 맞는 양.<br />
                간편하게 즐기는 1인 전용 핫케이크.
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
                  <p className="text-sm text-muted-foreground">1인용 핫케이크 믹스</p>
                </div>
              </div>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    구매하기 • ₩3,150
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md border-4 border-gradient-primary bg-background">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold text-foreground">
                      정보를 남겨주시면,<br />
                      사장님이 직접 찾아가서 만들어줍니다 🥞
                    </DialogTitle>
                  </DialogHeader>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                      <FormField
                        control={form.control}
                        name="nickname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>별명 (필수)</FormLabel>
                            <FormControl>
                              <Input placeholder="별명을 입력하세요" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>이메일 (필수)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="이메일을 입력하세요" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>성별 (선택)</FormLabel>
                            <FormControl>
                              <RadioGroup 
                                onValueChange={field.onChange} 
                                value={field.value}
                                className="flex flex-row space-x-4"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="male" id="male" />
                                  <Label htmlFor="male">♂</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="female" id="female" />
                                  <Label htmlFor="female">♀</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="other" id="other" />
                                  <Label htmlFor="other">기타</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="ageGroup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>연령대 (선택)</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="연령대를 선택하세요" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="teens">10대</SelectItem>
                                <SelectItem value="twenties">20대</SelectItem>
                                <SelectItem value="thirties">30대</SelectItem>
                                <SelectItem value="forties">40대</SelectItem>
                                <SelectItem value="fifties">50대</SelectItem>
                                <SelectItem value="sixties-plus">60대 이상</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full mt-6 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] hover:from-[#FF5252] hover:to-[#FFC107] text-white font-semibold transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "제출 중..." : "제출하기"}
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
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