import { motion } from "framer-motion";
import { 
  Bone, 
  HeartPulse, 
  Stethoscope, 
  Dumbbell, 
  Brain, 
  ActivitySquare 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bone,
      title: "Reabilitação de Lesões",
      description: "Tratamento especializado para recuperação de lesões musculares, articulares e ligamentares. Retorne às suas atividades com segurança e eficiência.",
    },
    {
      icon: HeartPulse,
      title: "Reabilitação de Idosos",
      description: "Cuidado dedicado à terceira idade, promovendo mobilidade, equilíbrio e qualidade de vida. Envelhecer com autonomia e bem-estar.",
    },
    {
      icon: Stethoscope,
      title: "Pós-Operatórios",
      description: "Acompanhamento completo na recuperação após cirurgias ortopédicas, cardíacas e outras intervenções. Acelere sua reabilitação com segurança.",
    },
    {
      icon: Dumbbell,
      title: "Treinamento Funcional Terapêutico",
      description: "Exercícios personalizados para fortalecer o corpo, prevenir lesões e melhorar o desempenho nas atividades do dia a dia.",
    },
    {
      icon: Brain,
      title: "Reabilitação Neurológica",
      description: "Tratamento especializado para pacientes pós-AVC, AVE e Parkinson. Recuperação de movimentos e independência funcional.",
    },
    {
      icon: ActivitySquare,
      title: "Doenças Degenerativas",
      description: "Suporte contínuo para pacientes com condições degenerativas, mantendo qualidade de vida e funcionalidade pelo maior tempo possível.",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-rose-soft">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-green-dark mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Tratamentos especializados para cada fase da sua recuperação, 
            sempre com foco em resultados e bem-estar.
          </p>
          <div className="w-24 h-1 bg-rose-medium mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-rose-medium/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-medium/30 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-green-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-green-dark mb-4">
                {service.title}
              </h3>
              <p className="text-body text-green-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
