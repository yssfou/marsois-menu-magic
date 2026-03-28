import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isBW, setIsBW] = useState(() => {
    return localStorage.getItem("marsois-theme") === "bw";
  });

  useEffect(() => {
    if (isBW) {
      document.documentElement.classList.add("theme-bw");
      localStorage.setItem("marsois-theme", "bw");
    } else {
      document.documentElement.classList.remove("theme-bw");
      localStorage.setItem("marsois-theme", "default");
    }
  }, [isBW]);

  return (
    <button
      onClick={() => setIsBW(!isBW)}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-foreground text-xs font-display uppercase tracking-wider hover:bg-muted transition-colors"
      aria-label="Changer le thème"
    >
      <span className="w-4 h-4 rounded-full border border-foreground" style={{
        background: isBW ? "linear-gradient(135deg, #000 50%, #fff 50%)" : "linear-gradient(135deg, #e8b923 50%, #1a1a2e 50%)"
      }} />
      {isBW ? "Couleurs" : "Noir & Blanc"}
    </button>
  );
};

export default ThemeToggle;
