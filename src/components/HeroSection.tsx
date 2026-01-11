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
    <section className="bg-rose-soft relative overflow-hidden">
      {/* ↓ menos altura no MOBILE */}
      <div className="container-custom px-6 sm:px-8 lg:px-0 pt-12 sm:pt-20 lg:pt-14 pb-4 sm:pb-8 lg:pb-0 w-full">

        <div className="grid grid-cols-2 gap-4 sm:gap-10 lg:gap-24 items-end lg:items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col justify-center items-center px-1 sm:px-0 space-y-3 sm:space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-2 flex justify-center -translate-y-3 sm:translate-y-0"

            >
              <span className="inline-block whitespace-nowrap px-4 py-2 bg-card rounded-full text-green-medium text-xs sm:text-sm font-medium shadow-soft">
                CREFITO - 415623-F
              </span>
            </motion.div>

            {/* ↓ não quebra no mobile */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-xl sm:text-4xl lg:text-6xl font-semibold text-green-dark leading-tight whitespace-nowrap -translate-y-3 sm:translate-y-0"

            >
              Dra. Tayná Santos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm sm:text-lg text-green-medium font-body font-medium"
            >
              Fisioterapia • Atendimento domiciliar
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 2020 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center -translate-y-3 sm:translate-y-0"

            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-green-dark text-card px-5 sm:px-8 py-3 sm:py-4 rounded-full font-body font-medium text-sm sm:text-lg shadow-soft-lg hover:shadow-rose transition-all duration-300 hover:scale-105"
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
            className="flex justify-center lg:justify-end items-end h-full"
          >
            <div className="relative flex items-end">
              <div className="absolute -inset-6 bg-rose-medium/30 blur-3xl rounded-full" />

              {/* ↓ imagem bem maior no MOBILE */}
              <img
                src={heroImage}
                alt="Fisioterapeuta em atendimento"
                className="
  relative
  w-[160%]
  sm:w-full
  max-w-none
  sm:max-w-sm
  lg:max-w-lg
  xl:max-w-xl
  h-auto
  object-cover
  translate-y-4
  sm:translate-y-0
  -translate-x-12
  sm:translate-x-0
  drop-shadow-[0_15px_35px_rgba(0,0,0,0.18)]
"

                style={{ objectPosition: "center top" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-rose-medium/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-48 h-48 bg-rose-medium/30 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
