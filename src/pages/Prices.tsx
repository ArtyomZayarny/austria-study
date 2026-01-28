import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Prices() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-secondary text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Вартість послуг</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Прозорі ціни. Жодних прихованих платежів. Оберіть пакет, який підходить саме вам.
          </p>
        </div>
      </div>

      <div className="container-custom -mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Basic */}
          <PricingCard 
            title="Базовий"
            price="€ 990"
            description="Для тих, хто хоче підготувати документи самостійно, але потребує перевірки."
            features={[
              "Консультація (1 година)",
              "Перевірка пакету документів",
              "Заповнення анкет",
              "Інструкція з подання",
              { text: "Супровід в магістрат", included: false },
              { text: "Пошук житла", included: false },
              { text: "Переклади та апостиль", included: false }
            ]}
          />

          {/* Standard - Featured */}
          <PricingCard 
            title="Стандарт"
            price="€ 2 490"
            description="Оптимальний вибір. Повний супровід процесу отримання ПМП."
            isPopular
            features={[
              "Необмежені консультації",
              "Збір та перевірка документів",
              "Заповнення всіх формулярів",
              "Запис в консульство/магістрат",
              "Супровід на подання (у Відні)",
              "Контроль статусу розгляду",
              { text: "Пошук житла", included: false }
            ]}
          />

          {/* Premium */}
          <PricingCard 
            title="Преміум"
            price="€ 4 900"
            description="Пакет «під ключ» з пошуком житла та повною адаптацією."
            features={[
              "Всі опції пакету Стандарт",
              "Пошук житла (до 10 варіантів)",
              "Перевірка договору оренди",
              "Реєстрація за місцем проживання",
              "Підключення інтернету/електрики",
              "Відкриття банківського рахунку",
              "Страхування"
            ]}
          />
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 font-display">Окремі послуги</h3>
          <p className="text-gray-600 mb-8">
            Ви також можете замовити окремі послуги без покупки пакету. Наприклад, тільки пошук житла або тільки переклади.
          </p>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100 text-left">
            <div className="p-4 flex justify-between items-center">
              <span>Консультація (1 година)</span>
              <span className="font-bold text-primary">€ 150</span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <span>Пошук гуртожитку</span>
              <span className="font-bold text-primary">€ 450</span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <span>Пошук квартири (оренда)</span>
              <span className="font-bold text-primary">1 міс. оренда</span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <span>Супровід в банк</span>
              <span className="font-bold text-primary">€ 200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, isPopular }: any) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl flex flex-col relative overflow-hidden ${isPopular ? 'border-2 border-primary transform scale-105 z-10' : 'border border-gray-100'}`}>
      {isPopular && (
        <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 text-center absolute top-0 w-full">
          Популярний вибір
        </div>
      )}
      <div className={`p-8 ${isPopular ? 'pt-10' : ''}`}>
        <h3 className="text-xl font-bold font-display text-secondary mb-2">{title}</h3>
        <div className="text-4xl font-bold text-primary mb-4">{price}</div>
        <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{description}</p>
        
        <Link href="/contact" className="w-full">
          <Button className={`w-full ${isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}>
            Обрати
          </Button>
        </Link>
      </div>
      <div className="border-t border-gray-100 p-8 bg-gray-50 flex-grow">
        <ul className="space-y-4">
          {features.map((f: any, i: number) => {
            const isIncluded = typeof f === 'string' ? true : f.included;
            const text = typeof f === 'string' ? f : f.text;
            
            return (
              <li key={i} className={`flex items-start gap-3 text-sm ${isIncluded ? 'text-gray-700' : 'text-gray-400'}`}>
                {isIncluded ? (
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-gray-300 shrink-0" />
                )}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
