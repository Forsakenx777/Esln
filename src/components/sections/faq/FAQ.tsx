import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "How do I register for tournaments?",
    answer: "Registration is simple! Navigate to the Tournaments section. Choose your preferred tournament and follow the registration steps. Make sure to read the tournament rules and requirements before registering."
  },
  {
    question: "What games do you currently support?",
    answer: "We currently support major esports titles including DOTA 2, PUBG Mobile, Valorant, and Counter-Strike. We're constantly expanding our game roster based on community feedback and tournament demand."
  },
  {
    question: "Are there entry fees for tournaments?",
    answer: "Entry fees vary by tournament tier. All fee details are clearly listed on each tournament's registration page."
  },
  {
    question: "How are prize pools distributed?",
    answer: "Prize pool distribution varies by tournament and is always clearly outlined in the tournament rules. Typically, prizes are distributed among top performers, with the majority going to the champion team/player."
  },
  {
    question: "Can I stream my tournament matches?",
    answer: "Yes, players can stream their matches unless specifically prohibited by tournament rules. ESLN also has official tournament streams where featured matches are broadcast."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about participating in ESLN tournaments
          </p>
        </div>

        <Card className="max-w-3xl mx-auto divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </Card>
      </Container>
    </section>
  );
}