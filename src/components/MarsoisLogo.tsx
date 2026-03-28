const MarsoisLogo = () => (
  <div className="flex items-center gap-3">
    {/* Windmill SVG */}
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      {/* Blades */}
      <path d="M24 20 L20 4 L24 8 L28 4 Z" fill="currentColor" opacity="0.9" />
      <path d="M28 24 L44 20 L40 24 L44 28 Z" fill="currentColor" opacity="0.9" />
      <path d="M24 28 L28 44 L24 40 L20 44 Z" fill="currentColor" opacity="0.9" />
      <path d="M20 24 L4 28 L8 24 L4 20 Z" fill="currentColor" opacity="0.9" />
      {/* Base */}
      <rect x="22" y="28" width="4" height="16" rx="1" fill="currentColor" opacity="0.6" />
      <path d="M18 44 L30 44 L26 36 L22 36 Z" fill="currentColor" opacity="0.4" />
    </svg>
    <div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-widest">
        MARSOIS
      </h1>
      <p className="text-muted-foreground text-xs md:text-sm italic font-body tracking-wide">
        Fait avec passion depuis 2006
      </p>
    </div>
  </div>
);

export default MarsoisLogo;
