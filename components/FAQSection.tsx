import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/lib/data/faq"

const FAQSection: React.FC = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-xl font-bold md:text-3xl">Common Questions and Concerns</h2>
        </div>

        <Accordion type="single" collapsible className="mx-auto w-full max-w-4xl">
          {faq.map((item, idx) => (
            <AccordionItem value={item.id} key={idx}>
              <AccordionTrigger className="cursor-pointer">{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
