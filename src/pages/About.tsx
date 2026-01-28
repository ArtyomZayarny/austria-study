import { ContactForm } from "@/components/shared/ContactForm";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Про компанію</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ми — команда професіоналів, що об'єднала юристів, консультантів та перекладачів, щоб зробити ваш переїзд в Австрію простим та зрозумілим.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Наша місія</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Імміграція — це не просто зміна геолокації. Це нове життя, нові можливості та, неминуче, нові виклики. Наша мета — стати вашим надійним провідником у цьому процесі.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ми працюємо прозоро, дотримуючись австрійського законодавства. Ми не даємо порожніх обіцянок, але робимо все можливе, щоб ваш кейс був успішним.
            </p>
          </div>
          <div>
            {/* Team working image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-secondary mb-10 text-center">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Марія Вебер" 
              role="Засновник, Юрист" 
              img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            />
            <TeamMember 
              name="Олександр Шмідт" 
              role="Експерт з освіти" 
              img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            />
            <TeamMember 
              name="Олена Фішер" 
              role="Менеджер з адаптації" 
              img="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary mb-6 text-center">Зв'яжіться з нами</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, role, img }: { name: string, role: string, img: string }) {
  return (
    <div className="text-center group">
      <div className="mb-4 relative overflow-hidden rounded-2xl aspect-[3/4]">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <p className="text-white font-medium">Зв'язатися</p>
        </div>
      </div>
      <h3 className="text-xl font-bold font-display text-secondary">{name}</h3>
      <p className="text-primary font-medium">{role}</p>
    </div>
  );
}
