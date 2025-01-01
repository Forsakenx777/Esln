import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <Container className="relative z-10 px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-4xl mx-auto text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Your Esports Journey Starts Here
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Nepal's fastest-growing esports community and take your first step towards becoming a gaming legend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Register Now
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('tournaments');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Tournaments
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}