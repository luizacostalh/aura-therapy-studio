import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Experiência",
      description: "Mais de 10 anos dedicados à reabilitação e bem-estar dos pacientes",
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento personalizado focado em suas necessidades individuais",
    },
    {
      icon: Users,
      title: "Pacientes Atendidos",
      description: "Centenas de vidas transformadas através da fisioterapia",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-green-dark mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-rose-medium mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-body text-lg mb-6 leading-relaxed">
              Olá! Sou a <strong className="text-green-dark">Dra. Tayná Santos</strong>,fisioterapeuta formada pela Unigran, em 2024, atuando em Dourados – MS.
            </p>
            <p className="text-body text-lg mb-6 leading-relaxed">
              Meu trabalho é baseado em um atendimento humanizado e individualizado, focado na recuperação funcional, na qualidade de vida e no bem-estar de cada paciente.</p>
            <p className="text-body text-lg leading-relaxed">
              Acompanho você em cada etapa do tratamento com técnicas atualizadas, escuta atenta e cuidado profissional, sempre buscando mais conforto, segurança e confiança no processo de reabilitação.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-rose-soft p-6 rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-rose-medium/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-green-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body text-green-medium">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
