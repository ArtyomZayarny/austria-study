import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, Plane, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/shared/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Austria scenic landscape */}
          <img 
            src="https://pixabay.com/get/ge4e8922a69453da2c2eeaf3a0faa55a44280fefb0279ba199505215a5ddf7033903f2533a42fe09883dd52a3ddad7f897edf83c23b7958b62bb989ca5ee8d078_1280.jpg" 
            alt="Vienna Austria Landscape" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Офіційний супровід
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Ваше майбутнє <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">в Австрії</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Професійна допомога в імміграції, вступи до університетів та адаптації. Ми робимо переїзд комфортним та безпечним.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base rounded-xl shadow-xl shadow-primary/20">
                  Безкоштовна консультація
                </Button>
              </Link>
              <Link href="/migration">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  Дізнатися більше
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 text-secondary">
                Чому обирають нас?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Австрія — країна з високою якістю життя, але складною бюрократією. Наша команда складається з юристів та експертів, які живуть у Відні та знають усі тонкощі законодавства.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Понад 500 успішних кейсів імміграції",
                  "Працюємо офіційно за договором",
                  "Повний супровід до отримання документів",
                  "Підтримка 24/7 на всіх етапах"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="ghost" className="group text-primary p-0 hover:bg-transparent hover:text-primary/80">
                  Детальніше про компанію <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 rotate-3" />
              {/* Modern office team meeting */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-secondary">Наші послуги</h2>
            <p className="text-muted-foreground text-lg">
              Ми пропонуємо повний спектр послуг для тих, хто планує пов'язати своє життя з Австрією.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Plane className="w-10 h-10 text-primary" />}
              title="Імміграція"
              description="ПМП для фінансово незалежних, RWR картка для спеціалістів, возз'єднання сім'ї."
              link="/migration"
            />
            <ServiceCard 
              icon={<GraduationCap className="w-10 h-10 text-primary" />}
              title="Освіта"
              description="Вступ до державних ВНЗ, курси німецької мови, студентські візи."
              link="/students"
            />
            <ServiceCard 
              icon={<Building2 className="w-10 h-10 text-primary" />}
              title="Супровід"
              description="Пошук нерухомості, страхування, відкриття банківських рахунків, інтеграція."
              link="/support"
            />
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 text-secondary leading-tight">
                Готові розпочати нове життя в центрі Європи?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Не відкладайте мрію на потім. Запишіться на безкоштовну первинну консультацію, і ми розберемо ваш кейс, оцінимо шанси та складемо індивідуальний план переїзду.
              </p>
              
              <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Індивідуальний підхід</h4>
                    <p className="text-sm text-gray-600">Кожна ситуація унікальна</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Ми не просто оформляємо документи, ми допомагаємо вам знайти свій новий дім."
                </p>
              </div>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <Link href={link} className="group">
      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="mb-6 bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-display mb-3 text-secondary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
        <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Детальніше <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
