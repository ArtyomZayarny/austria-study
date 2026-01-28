import { Link } from "wouter";
import { GraduationCap, BookOpen, Clock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";

export default function Students() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-secondary py-20 relative overflow-hidden">
        {/* University image */}
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="University Library" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Навчання в Австрії</h1>
          <p className="text-xl text-gray-300">
            Європейський диплом, безкоштовна або недорога освіта, можливість жити в центрі Європи.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <Wallet className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Доступна вартість</h3>
            <p className="text-sm text-gray-600">Від 750€ до 1500€ за семестр для іноземних студентів у державних ВНЗ.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <BookOpen className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Без іспитів</h3>
            <p className="text-sm text-gray-600">На багато факультетів вступ без вступних іспитів, тільки за документами.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Право на роботу</h3>
            <p className="text-sm text-gray-600">Студенти мають право офіційно працювати до 20 годин на тиждень під час навчання.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Як ми допомагаємо вступити?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Вибір університету</h4>
                    <p className="text-gray-600">Підберемо програму виходячи з ваших інтересів та бюджету (Uni Wien, WU, TU та ін.).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Підготовка документів</h4>
                    <p className="text-gray-600">Апостиль, переклад, нотаріальне засвідчення. Подання заявки до університету.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Отримання ПМП</h4>
                    <p className="text-gray-600">Збір документів для магістрату, підтвердження фінансів та житла, отримання візи D.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-lg">Переїзд</h4>
                    <p className="text-gray-600">Зустріч у Відні, заселення в гуртожиток, реєстрація, відкриття рахунку.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200">
               <h3 className="font-bold text-xl mb-4">Підготовчі курси (VWU)</h3>
               <p className="text-gray-600 mb-4">
                 Якщо вашого рівня німецької недостатньо, ми допоможемо вступити на підготовче відділення (Vorstudienlehrgang). Це дає статус студента та можливість вчити мову у Відні до 2 років.
               </p>
               <Link href="/prices">
                 <Button variant="outline">Переглянути ціни на пакети</Button>
               </Link>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-fit sticky top-24">
            <h3 className="text-2xl font-bold font-display mb-2">Заявка на навчання</h3>
            <p className="text-gray-500 mb-6 text-sm">
              Залиште заявку, і ми безкоштовно оцінимо ваші шанси на вступ.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
