import marsoisLogo from "@/assets/marsois-logo.png";
import MenuContent from "@/components/MenuContent";
import Footer from "@/components/Footer";

import { menuSections } from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Watermark decorations */}
      <div className="watermark-icon top-20 left-10 text-[200px] rotate-12 hidden lg:block opacity-5 font-display text-primary">S</div>
      <div className="watermark-icon bottom-40 right-10 text-[180px] -rotate-12 hidden lg:block opacity-5 font-display text-primary">M</div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={marsoisLogo} alt="MARSOIS" className="h-12 w-auto" />
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-widest">
                MARSOIS
              </h1>
              <p className="text-muted-foreground text-xs md:text-sm italic font-body tracking-wide">
                Fait avec passion depuis 2006
              </p>
            </div>
          </div>
          <span className="hidden md:block font-display text-sm text-muted-foreground uppercase tracking-widest">
            Fast Food Tunisien
          </span>
          <span className="font-display text-xs text-muted-foreground uppercase tracking-widest">Menu</span>
        </div>
      </header>

      {/* Main content: all sections */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuSections.map((section) => (
            <MenuContent key={section.id} activeTab={section.id} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
