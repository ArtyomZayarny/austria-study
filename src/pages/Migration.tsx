import { Link } from "wouter";
import { Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";

export default function Migration() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-secondary text-white py-20 relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Імміграція в Австрію</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ми допомагаємо оформити ПМП та ПМЖ для роботи, навчання або фінансово незалежного життя. Повний юридичний супровід.
          </p>
        </div>
      </div>

      <div className="container-custom -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* RWR Card */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 text-primary rounded-xl flex items-center justify-center font-bold text-xl">1</div>
                <h2 className="text-2xl font-display font-bold text-secondary">Red-White-Red Card</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Картка, що дає право на проживання та роботу кваліфікованим спеціалістам. Це найпопулярніший спосіб переїзду для професіоналів.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-primary" /> IT-спеціалісти
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-primary" /> Інженери
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-primary" /> Медичні працівники
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-primary" /> Ключові кадри
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm text-gray-600">
                <strong>Вимоги:</strong> Профільна освіта, контракт з роботодавцем, мінімальна зарплата, знання мови (англійська або німецька), балльна система.
              </div>
            </section>

            {/* Niederlassungsbewilligung */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-secondary rounded-xl flex items-center justify-center font-bold text-xl">2</div>
                <h2 className="text-2xl font-display font-bold text-secondary">ПМП без права на роботу</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Для фінансово незалежних осіб, пенсіонерів або тих, хто має віддалений дохід з-за кордону. Квоти на цей тип ПМП обмежені та видаються раз на рік (у січні).
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm text-gray-600 mb-6">
                <strong>Вимоги:</strong> Наявність достатніх коштів на рахунку (від €50,000 на людину), наявність житла в Австрії, знання німецької А1.
              </div>
              <Link href="/contact">
                <Button variant="outline" className="text-secondary border-secondary/20 hover:bg-secondary/5">
                  Дізнатися про квоти 2024
                </Button>
              </Link>
            </section>

            {/* Family */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center font-bold text-xl">3</div>
                <h2 className="text-2xl font-display font-bold text-secondary">Возз'єднання сім'ї</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Якщо один з подружжя вже має ПМП або громадянство Австрії, другий подружжя та неповнолітні діти можуть отримати дозвіл на проживання.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10">
              <h3 className="text-xl font-bold mb-4 font-display">Є питання?</h3>
              <p className="text-sm text-gray-500 mb-6">
                Імміграційне законодавство складне і часто змінюється. Опишіть вашу ситуацію, і ми підкажемо оптимальний шлях.
              </p>
              <ContactForm />
            </div>

            <div className="bg-secondary text-white p-6 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 font-display">Чек-лист документів</h3>
              <p className="text-sm text-gray-300 mb-4">
                Завантажте наш PDF з повним списком документів для подання на RWR картку.
              </p>
              <Button variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white border-0">
                Завантажити PDF
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
