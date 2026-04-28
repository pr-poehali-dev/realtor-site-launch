import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold tracking-widest">RE</span>
          </div>
          <div>
            <span className="font-display text-lg font-semibold text-primary tracking-wide">РЕАЛ ЭСТЕЙТ</span>
            <span className="hidden sm:block text-xs text-muted-foreground tracking-widest uppercase ml-0.5">Коммерческая недвижимость</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
            Объекты
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
            О компании
          </a>
          <a href="#contacts" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
            Контакты
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+78001234567" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
            <Icon name="Phone" size={14} />
            <span>+7 (800) 123-45-67</span>
          </a>
          <button className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 hover:bg-accent transition-colors tracking-wide">
            Оставить заявку
          </button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#catalog" className="text-sm font-medium text-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Объекты</a>
            <a href="#about" className="text-sm font-medium text-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>О компании</a>
            <a href="#contacts" className="text-sm font-medium text-foreground uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Контакты</a>
            <a href="tel:+78001234567" className="text-sm font-medium text-accent flex items-center gap-2">
              <Icon name="Phone" size={14} />
              +7 (800) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
