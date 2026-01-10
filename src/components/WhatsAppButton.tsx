import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta de fisioterapia.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-dark rounded-full flex items-center justify-center shadow-soft-lg hover:shadow-rose transition-shadow duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-card" />
    </motion.a>
  );
};

export default WhatsAppButton;
