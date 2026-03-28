const Footer = () => (
  <footer className="bg-card border-t border-border/50 py-8 mt-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm font-body">
      <div className="text-center md:text-left">
        <p className="font-display text-primary font-bold tracking-wider text-lg">MARSOIS</p>
        <p>23 Avenue Habib Bourguiba, Le Kef, Tunisie</p>
        <p>📞 +216 78 123 456</p>
      </div>
      <div className="flex gap-4">
        {/* Instagram */}
        <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        {/* Facebook */}
        <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
      <p className="text-xs text-muted-foreground/60">© 2006–2026 MARSOIS. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
