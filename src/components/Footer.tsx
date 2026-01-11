import { MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta de fisioterapia.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-green-dark mb-2">
              Dra. Tayná Santos
            </h3>
            <p className="text-green-medium font-body text-sm">
              CREFITO - 415623-F
            </p>
            <p className="text-muted-foreground font-body text-sm mt-2">
              Fisioterapeuta Especialista
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-dark hover:text-green-medium transition-colors duration-300 font-body font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Entre em contato
            </a>
            <p className="text-muted-foreground text-sm font-body flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-rose-dark" /> para você
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-green-medium font-body text-sm leading-relaxed max-w-xs">
              Cuidando da sua saúde com dedicação e carinho. 
              Sua recuperação é minha prioridade.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Dra. Tayná Santos - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
