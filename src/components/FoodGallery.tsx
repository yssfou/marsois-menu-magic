import sandwichImg from "@/assets/sandwich-thon.jpg";
import merguezImg from "@/assets/merguez.jpg";
import baguetteImg from "@/assets/baguette-farcie.jpg";
import fritesImg from "@/assets/frites.jpg";

const images = [
  { src: sandwichImg, alt: "Sandwich thon et frites", label: "Sandwich" },
  { src: merguezImg, alt: "Merguez grillée", label: "Merguez" },
  { src: baguetteImg, alt: "Baguette farcie", label: "Baguette" },
  { src: fritesImg, alt: "Frites croustillantes", label: "Frites" },
];

const FoodGallery = () => (
  <div className="grid grid-cols-2 gap-3">
    {images.map((img, i) => (
      <div
        key={img.label}
        className="relative overflow-hidden rounded-xl shadow-lg group opacity-0 animate-fade-in-up"
        style={{ animationDelay: `${200 + i * 100}ms` }}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <span className="absolute bottom-2 left-3 font-display text-sm font-bold text-primary uppercase tracking-wider">
          {img.label}
        </span>
      </div>
    ))}
  </div>
);

export default FoodGallery;
