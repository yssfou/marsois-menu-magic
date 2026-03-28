import { useState } from "react";
import MarsoisLogo from "@/components/MarsoisLogo";
import MenuTabs from "@/components/MenuTabs";
import MenuContent from "@/components/MenuContent";
import FoodGallery from "@/components/FoodGallery";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("sandwich");

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Watermark decorations */}
      <div className="watermark-icon top-20 left-10 text-[200px] rotate-12 hidden lg:block">🥪</div>
      <div className="watermark-icon bottom-40 right-10 text-[180px] -rotate-12 hidden lg:block">🔥</div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <MarsoisLogo />
          <span className="hidden md:block font-display text-sm text-muted-foreground uppercase tracking-widest">
            Fast Food Tunisien
          </span>
        </div>
      </header>

      {/* Tabs */}
      <nav className="container mx-auto px-4 py-6">
        <MenuTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </nav>

      {/* Main content: menu + gallery */}
      <main className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <MenuContent activeTab={activeTab} />
          </div>
          <div className="lg:col-span-2">
            <FoodGallery />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
