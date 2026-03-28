import { menuSections } from "@/data/menuData";

interface MenuTabsProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const MenuTabs = ({ activeTab, onTabChange }: MenuTabsProps) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {menuSections.map((section) => (
      <button
        key={section.id}
        onClick={() => onTabChange(section.id)}
        className={`font-display font-semibold text-sm md:text-base uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all duration-300 ${
          activeTab === section.id
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
            : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
      >
        
        {section.id === "baguette" ? "BAGUETTE FARCIE" : section.title}
      </button>
    ))}
  </div>
);

export default MenuTabs;
