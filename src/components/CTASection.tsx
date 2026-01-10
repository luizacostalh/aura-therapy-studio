import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta de fisioterapia.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="section-padding bg-green-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-medium/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-medium/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-card mb-6">
            Sua Recuperação Começa com uma Conversa
          </h2>
          <p className="text-rose-soft text-lg md:text-xl mb-10 leading-relaxed font-body">
            Não deixe a dor ou limitações atrapalharem sua qualidade de vida. 
            Agende uma avaliação e descubra como a fisioterapia pode transformar o seu dia a dia.
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-rose-medium text-green-dark px-10 py-5 rounded-full font-body font-semibold text-lg shadow-rose hover:bg-rose-soft transition-colors duration-300"
          >
            <MessageCircle className="w-7 h-7" />
            Fale Comigo no WhatsApp
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-rose-soft/80"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="font-body">(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span className="font-body">São Paulo, SP</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
