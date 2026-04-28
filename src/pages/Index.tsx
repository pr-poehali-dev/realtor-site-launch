import Header from "@/components/Header";
import ObjectCard from "@/components/ObjectCard";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const OBJECTS = [
  {
    id: 1,
    title: "Бизнес-центр «Северная башня»",
    category: "Офис",
    area: "2 400 м²",
    location: "Москва, СЗАО",
    price: "от 1 800 000 ₽",
    priceUnit: "/ мес",
    description: "Представительский офис класса А в современном бизнес-центре. Панорамное остекление, подземный паркинг, круглосуточная охрана, развитая инфраструктура.",
    badge: "Новое",
    media: [
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/29389a3d-ba41-4d87-8902-4590df65ba5d.jpg", caption: "Главный фасад" },
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/c21905d4-8827-43a4-8293-a5e525517216.jpg", caption: "Лобби" },
    ],
  },
  {
    id: 2,
    title: "Жилой комплекс «Атлас»",
    category: "Жилая недвижимость",
    area: "от 65 м²",
    location: "Москва, ЦАО",
    price: "от 28 500 000 ₽",
    priceUnit: "",
    description: "Элитный жилой комплекс в центре города. Авторская архитектура, закрытая территория с охраной, консьерж-сервис, подземный паркинг.",
    badge: "Премиум",
    media: [
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/35c9e4cc-0f2c-451c-9c64-840fb27e0e15.jpg", caption: "Фасад комплекса" },
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/29389a3d-ba41-4d87-8902-4590df65ba5d.jpg", caption: "Вид на район" },
    ],
  },
  {
    id: 3,
    title: "Логистический центр «Запад»",
    category: "Склад / Логистика",
    area: "12 000 м²",
    location: "МО, Красногорск",
    price: "от 420 000 ₽",
    priceUnit: "/ мес",
    description: "Современный складской комплекс класса А+. Высота потолков 12 м, рампа, отапливаемые доки, ж/д ветка, собственная охрана.",
    media: [
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/f73c1569-869f-47f8-a7f4-ebf83c7623cc.jpg", caption: "Внешний вид" },
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/c21905d4-8827-43a4-8293-a5e525517216.jpg", caption: "Площадка" },
    ],
  },
  {
    id: 4,
    title: "Торговый павильон «Центральный»",
    category: "Торговля / Ритейл",
    area: "380 м²",
    location: "Москва, ЦАО",
    price: "от 650 000 ₽",
    priceUnit: "/ мес",
    description: "Торговая площадь на первой линии с высоким пешеходным трафиком. Витринное остекление, отдельный вход, готовая отделка.",
    media: [
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/c21905d4-8827-43a4-8293-a5e525517216.jpg", caption: "Торговый зал" },
      { type: "image" as const, url: "https://cdn.poehali.dev/projects/25a5ac46-0162-4217-a1c6-78650c76d047/files/35c9e4cc-0f2c-451c-9c64-840fb27e0e15.jpg", caption: "Фасад" },
    ],
  },
];

const STATS = [
  { value: "15+", label: "лет на рынке" },
  { value: "320+", label: "объектов в базе" },
  { value: "98%", label: "сделок успешно" },
  { value: "2,4 млн м²", label: "под управлением" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      {/* Hero */}
      <section className="relative pt-16 min-h-[540px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)" }} />
        </div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase mb-5 border border-accent/30 px-3 py-1">
              Коммерческая недвижимость
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-primary-foreground leading-tight mb-6">
              Объекты высокого класса
            </h1>
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-8 max-w-lg">
              Офисы, склады, торговые площади и жилая недвижимость. Профессиональный подход к каждой сделке.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 hover:bg-gold-dark transition-colors tracking-wide"
              >
                Смотреть объекты
                <Icon name="ArrowDown" size={15} />
              </a>
              <button className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-medium px-6 py-3 hover:border-primary-foreground/60 transition-colors tracking-wide text-sm">
                <Icon name="Phone" size={14} />
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((s, i) => (
              <div key={i} className="py-8 px-6 text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="font-display text-3xl font-semibold text-primary mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase divider-line">Каталог</span>
            <h2 className="font-display text-4xl font-semibold text-primary mt-6">Актуальные объекты</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Все объекты", "Офисы", "Склады", "Торговля", "Жилая"].map((f) => (
              <button
                key={f}
                className={`text-xs font-medium px-4 py-2 border tracking-wide uppercase transition-colors ${
                  f === "Все объекты"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {OBJECTS.map((obj) => (
              <ObjectCard key={obj.id} {...obj} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 border border-border text-sm font-medium text-foreground px-8 py-3 hover:border-primary hover:text-primary transition-colors tracking-wide uppercase">
              Загрузить ещё
              <Icon name="ChevronDown" size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-accent tracking-widest uppercase divider-line">О компании</span>
              <h2 className="font-display text-4xl font-semibold text-primary mt-6 mb-5">
                Надёжный партнёр в сфере недвижимости
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Более 15 лет мы помогаем бизнесу и частным клиентам находить оптимальные решения в области коммерческой и жилой недвижимости. Профессиональная команда, прозрачные условия, юридическое сопровождение.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Мы работаем с объектами в Москве, Московской области и регионах России, обеспечивая высокий стандарт сервиса на каждом этапе сделки.
              </p>
              <div className="flex flex-col gap-3">
                {["Юридическое сопровождение сделок", "Оценка и аудит объектов", "Управление недвижимостью", "Консультации по инвестициям"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "ShieldCheck", title: "Проверенные объекты", text: "Юридическая чистота каждого объекта" },
                { icon: "Clock", title: "Быстро и чётко", text: "Средний срок закрытия сделки — 14 дней" },
                { icon: "Users", title: "Команда экспертов", text: "30+ специалистов в штате" },
                { icon: "TrendingUp", title: "Рост стоимости", text: "Портфельные инвестиции с доходностью 12%+" },
              ].map((c, i) => (
                <div key={i} className="bg-card border border-border p-5">
                  <Icon name={c.icon as "ShieldCheck"} size={20} className="text-accent mb-3" />
                  <h4 className="text-sm font-semibold text-primary mb-1">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="request" className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-accent-foreground mb-3">
                Не нашли нужный объект?
              </h2>
              <p className="text-accent-foreground/75">
                Оставьте заявку — мы подберём варианты под ваши требования в течение 24 часов
              </p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-foreground tracking-widest uppercase mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors bg-background"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground tracking-widest uppercase mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors bg-background"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-foreground tracking-widest uppercase mb-2">Тип объекта</label>
                <select className="w-full border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors bg-background appearance-none">
                  <option value="">Выберите тип...</option>
                  <option>Офис</option>
                  <option>Склад / Логистика</option>
                  <option>Торговая площадь</option>
                  <option>Жилая недвижимость</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="mb-7">
                <label className="block text-xs font-semibold text-foreground tracking-widest uppercase mb-2">Комментарий</label>
                <textarea
                  rows={3}
                  placeholder="Площадь, бюджет, район, пожелания..."
                  className="w-full border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors bg-background resize-none"
                />
              </div>
              <button className="w-full bg-primary text-primary-foreground font-semibold py-3.5 hover:bg-foreground transition-colors tracking-wide uppercase text-sm flex items-center justify-center gap-2">
                Отправить заявку
                <Icon name="ArrowRight" size={15} />
              </button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;