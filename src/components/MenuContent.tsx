import { menuSections } from "@/data/menuData";
import MenuItemRow from "./MenuItemRow";

interface MenuContentProps {
  activeTab: string;
}

const MenuContent = ({ activeTab }: MenuContentProps) => {
  const section = menuSections.find((s) => s.id === activeTab);
  if (!section) return null;

  return (
    <div key={section.id} className="bg-card rounded-xl p-6 md:p-8 shadow-xl border border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{section.icon}</span>
        <h2 className="section-title">{section.title}</h2>
      </div>

      {section.hasSizes && (
        <div className="flex gap-4 mb-4 text-xs font-display uppercase tracking-wider text-muted-foreground">
          <span>Deux tailles disponibles :</span>
          <span className="text-primary font-semibold">Moyenne</span>
          <span>&</span>
          <span className="text-primary font-semibold">Maxi</span>
        </div>
      )}

      <div>
        {section.items.map((item, i) => (
          <MenuItemRow
            key={item.name}
            item={item}
            hasSizes={section.hasSizes}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuContent;
