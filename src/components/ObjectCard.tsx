import { useState } from "react";
import Icon from "@/components/ui/icon";
import GalleryModal from "@/components/GalleryModal";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumb?: string;
  caption?: string;
}

interface ObjectCardProps {
  title: string;
  category: string;
  area: string;
  location: string;
  price: string;
  priceUnit?: string;
  description: string;
  media: MediaItem[];
  badge?: string;
}

const ObjectCard = ({
  title,
  category,
  area,
  location,
  price,
  priceUnit = "/ мес",
  description,
  media,
  badge,
}: ObjectCardProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const images = media.filter((m) => m.type === "image");
  const videos = media.filter((m) => m.type === "video");

  const openGallery = (index = 0) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <>
      <div className="property-card bg-card border border-border group">
        <div className="relative overflow-hidden aspect-[4/3]">
          {media[0] && (
            <img
              src={media[0].type === "image" ? media[0].url : media[0].thumb || ""}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              onClick={() => openGallery(0)}
            />
          )}
          {badge && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 tracking-widest uppercase">
              {badge}
            </span>
          )}
          <button
            onClick={() => openGallery(0)}
            className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 flex items-center gap-1.5 transition-colors"
          >
            <Icon name="Images" size={12} />
            <span>{images.length} фото{videos.length > 0 ? ` · ${videos.length} видео` : ""}</span>
          </button>
        </div>

        {media.length > 1 && (
          <div className="flex gap-1 p-2 bg-muted/40 border-b border-border overflow-x-auto">
            {media.slice(0, 5).map((m, i) => (
              <button
                key={i}
                onClick={() => openGallery(i)}
                className="flex-shrink-0 w-12 h-9 overflow-hidden border border-border hover:border-accent transition-colors relative"
              >
                {m.type === "video" ? (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Icon name="Play" size={10} className="text-muted-foreground" />
                  </div>
                ) : (
                  <img src={m.thumb || m.url} alt="" className="w-full h-full object-cover" />
                )}
              </button>
            ))}
            {media.length > 5 && (
              <button
                onClick={() => openGallery(5)}
                className="flex-shrink-0 w-12 h-9 bg-muted border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                +{media.length - 5}
              </button>
            )}
          </div>
        )}

        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">{category}</span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Icon name="MapPin" size={11} />
              <span>{location}</span>
            </div>
          </div>

          <h3 className="font-display text-xl font-semibold text-primary mb-2 leading-snug">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center gap-4 mb-4 pt-3 border-t border-border">
            <div className="flex items-center gap-1.5 text-sm text-foreground">
              <Icon name="Maximize2" size={13} className="text-muted-foreground" />
              <span>{area}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-2xl font-semibold text-primary">{price}</span>
              <span className="text-sm text-muted-foreground ml-1">{priceUnit}</span>
            </div>
            <button className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2.5 hover:bg-accent transition-colors tracking-wide uppercase">
              Запросить
            </button>
          </div>
        </div>
      </div>

      {galleryOpen && (
        <GalleryModal
          items={media}
          initialIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
};

export default ObjectCard;
