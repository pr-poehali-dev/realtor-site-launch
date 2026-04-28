import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumb?: string;
  caption?: string;
}

interface GalleryModalProps {
  items: MediaItem[];
  initialIndex?: number;
  onClose: () => void;
}

const GalleryModal = ({ items, initialIndex = 0, onClose }: GalleryModalProps) => {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % items.length);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [items.length, onClose]);

  const item = items[current];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 gallery-overlay flex flex-col animate-fade-in"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-4" onClick={(e) => e.stopPropagation()}>
        <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
          {current + 1} / {items.length}
        </span>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-2"
        >
          <Icon name="X" size={22} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center relative px-4" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute left-4 md:left-8 z-10 text-white/60 hover:text-white transition-colors p-3 bg-black/30 hover:bg-black/50"
          onClick={() => setCurrent((p) => (p - 1 + items.length) % items.length)}
        >
          <Icon name="ChevronLeft" size={24} />
        </button>

        <div className="max-w-5xl w-full max-h-[70vh] flex items-center justify-center animate-scale-in">
          {item.type === "video" ? (
            <video
              src={item.url}
              controls
              className="max-w-full max-h-[70vh] object-contain"
            />
          ) : (
            <img
              src={item.url}
              alt={item.caption || ""}
              className="max-w-full max-h-[70vh] object-contain"
            />
          )}
        </div>

        <button
          className="absolute right-4 md:right-8 z-10 text-white/60 hover:text-white transition-colors p-3 bg-black/30 hover:bg-black/50"
          onClick={() => setCurrent((p) => (p + 1) % items.length)}
        >
          <Icon name="ChevronRight" size={24} />
        </button>
      </div>

      {item.caption && (
        <div className="px-6 py-3 text-center text-white/50 text-sm" onClick={(e) => e.stopPropagation()}>
          {item.caption}
        </div>
      )}

      <div className="flex gap-2 justify-center px-6 py-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
        {items.map((m, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-shrink-0 w-14 h-10 border-2 transition-all overflow-hidden ${
              i === current ? "border-accent" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            {m.type === "video" ? (
              <div className="w-full h-full bg-white/10 flex items-center justify-center">
                <Icon name="Play" size={12} className="text-white" />
              </div>
            ) : (
              <img src={m.thumb || m.url} alt="" className="w-full h-full object-cover" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryModal;
