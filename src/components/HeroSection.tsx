import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.png";

const HeroSection = () => {
  const whatsappNumber = "5567993391756";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta de fisioterapia."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-[70vh] lg:min-h-[85vh] bg-rose-soft relative overflow-hidden flex items-end">
<div className="container-custom pt-12 sm:pt-16 lg:pt-24 pb-0 w-full">

        
        {/* 🔥 GRID SEM EMPILHAR */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 items-end">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left flex flex-col justify-center h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-card rounded-full text-green-medium text-xs sm:text-sm font-medium shadow-soft">
                CREFITO - 415623-F
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-2xl sm:text-4xl lg:text-6xl font-semibold text-green-dark mb-4 leading-tight"
            >
              Dra. Tayná Santos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-lg text-green-medium mb-3 font-body font-medium"
            >
              Fisioterapeuta Especialista
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xs sm:text-base md:text-lg mb-6 max-w-md"
            >
              Cuidado humanizado, reabilitação personalizada e compromisso com sua
              qualidade de vida. Cada passo da sua recuperação é acompanhado com
              dedicação e expertise.
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
                className="inline-flex items-center gap-3 bg-green-dark text-card px-6 sm:px-8 py-3 sm:py-4 rounded-full font-body font-medium text-sm sm:text-lg shadow-soft-lg hover:shadow-rose transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Agende sua Consulta
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-end items-end"
          >
            <div className="relative w-full flex justify-end">
              <div className="absolute -inset-6 bg-rose-medium/30 blur-3xl rounded-full" />

              <img
                src={heroImage}
                alt="Fisioterapeuta em atendimento"
                className="
                  relative
                  w-full
                  max-w-[160px]
                  sm:max-w-[260px]
                  md:max-w-md
                  lg:max-w-lg
                  xl:max-w-xl
                  h-auto
                  object-cover
                  drop-shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                "
                style={{ objectPosition: "center top" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-medium/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-rose-medium/30 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
