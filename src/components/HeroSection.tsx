import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const HeroSection = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta de fisioterapia.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen bg-rose-soft relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-card rounded-full text-green-medium text-sm font-medium shadow-soft">
                CREFITO-3/123456-F
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-green-dark mb-6 leading-tight"
            >
              Dra. Maria Silva
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-green-medium mb-4 font-body font-medium"
            >
              Fisioterapeuta Especialista
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-body text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Cuidado humanizado, reabilitação personalizada e compromisso com sua qualidade de vida. 
              Cada passo da sua recuperação é acompanhado com dedicação e expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-dark text-card px-8 py-4 rounded-full font-body font-medium text-lg shadow-soft-lg hover:shadow-rose transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                Agende sua Consulta
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-rose-medium/30 rounded-3xl blur-2xl" />
              <img
                src={heroImage}
                alt="Fisioterapeuta em atendimento"
                className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-soft-lg object-cover aspect-square"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-medium/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-rose-medium/30 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
