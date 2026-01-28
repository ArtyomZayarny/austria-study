import { Home, Shield, Landmark, Languages, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Support() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Пошук нерухомості",
      desc: "Підбір квартири або гуртожитку (для студентів). Перевірка договору оренди, спілкування з маклерами."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Страхування",
      desc: "Оформлення обов'язкового медичного страхування (ÖGK) або приватного страхування для ПМП."
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary" />,
      title: "Банки та Фінанси",
      desc: "Відкриття банківського рахунку, консультації з переказу коштів, підтвердження походження коштів."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Реєстрація",
      desc: "Отримання Meldezettel (прописка), реєстрація в магістраті, отримання пластикової картки ПМП."
    },
    {
      icon: <Languages className="w-8 h-8 text-primary" />,
      title: "Інтеграція",
      desc: "Запис на мовні курси, школи та дитячі садки для дітей, обмін водійських прав."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-4">Адаптація та Супровід</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Переїзд — це стрес. Ми беремо на себе побутові та бюрократичні питання, щоб ви могли насолоджуватися Віднем з першого дня.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
          
          {/* Custom Request Card */}
          <div className="p-8 rounded-2xl bg-primary text-white flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold mb-4 font-display">Індивідуальний запит?</h3>
            <p className="text-white/80 mb-6">
              Потрібно щось особливе? Допомога з покупкою авто, бізнес-консалтинг або щось інше?
            </p>
            <Link href="/contact">
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Написати нам
              </Button>
            </Link>
          </div>
        </div>

        {/* Testimonial Section (Placeholder) */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-10">Ми вже допомогли сотням сімей</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"Завдяки команді Austria Move ми знайшли квартиру за 3 дні, хоча всі говорили, що це нереально."</p>
              <p className="font-bold text-sm">— Анна К., переїхала в 2023</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"Повний супровід вступу до університету. Жодної головної болі з документами."</p>
              <p className="font-bold text-sm">— Дмитро В., студент TU Wien</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">"Професійно, чітко, без зайвих обіцянок. ПМП отримали швидше, ніж очікували."</p>
              <p className="font-bold text-sm">— Сім'я Петрових</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
