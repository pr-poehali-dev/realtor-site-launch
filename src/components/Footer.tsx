import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground text-xs font-bold tracking-widest">RE</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-wide">РЕАЛ ЭСТЕЙТ</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Профессиональный подход к коммерческой недвижимости. Надёжность, прозрачность, результат.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2.5">
              <a href="#catalog" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Объекты</a>
              <a href="#about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">О компании</a>
              <a href="#contacts" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Контакты</a>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+78001234567" className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Icon name="Phone" size={14} />
                +7 (800) 123-45-67
              </a>
              <a href="mailto:info@realestate.ru" className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Icon name="Mail" size={14} />
                info@realestate.ru
              </a>
              <div className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Деловая, д. 1, офис 100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-primary-foreground/30">© 2024 Реал Эстейт. Все права защищены.</span>
          <span className="text-xs text-primary-foreground/30">Коммерческая недвижимость</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
