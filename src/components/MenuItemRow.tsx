import type { MenuItem } from "@/data/menuData";

interface MenuItemRowProps {
  item: MenuItem;
  hasSizes?: boolean;
  index: number;
}

const MenuItemRow = ({ item, hasSizes, index }: MenuItemRowProps) => (
  <div
    className="group py-3 border-b border-border/30 last:border-b-0 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div className="flex items-end gap-1 min-w-0">
      <div className="min-w-0 flex-1">
        <span className="font-display font-bold text-foreground uppercase text-sm md:text-base tracking-wide group-hover:text-primary transition-colors">
          {item.name}
        </span>
        {item.description && !hasSizes && (
          <p className="text-muted-foreground text-xs italic font-body mt-0.5">
            {item.description}
          </p>
        )}
      </div>

      <div className="menu-item-dots" />

      <div className="flex-shrink-0 flex gap-1 md:gap-2 flex-wrap justify-end">
        {hasSizes && item.priceMoy ? (
          <>
            <span className="price-badge text-[10px] md:text-xs whitespace-nowrap">
              Moy: {item.priceMoy}
            </span>
            <span className="price-badge text-[10px] md:text-xs whitespace-nowrap">
              Maxi: {item.priceMaxi}
            </span>
          </>
        ) : item.price ? (
          <span className="price-badge">{item.price}</span>
        ) : item.description && !item.price ? (
          <span className="text-muted-foreground italic text-xs font-body whitespace-nowrap">
            {item.description}
          </span>
        ) : null}
      </div>
    </div>
  </div>
);

export default MenuItemRow;
