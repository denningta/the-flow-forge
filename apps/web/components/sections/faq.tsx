"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Section } from "@/components/site/section"
import { FAQS } from "@/lib/content"

function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="Questions"
      title="What manufacturers ask us first."
    >
      {/* Base UI accordion: no `type` prop, and `defaultValue` is an array. */}
      <Accordion defaultValue={["faq-0"]} className="reveal mt-12 max-w-3xl">
        {FAQS.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger className="gap-6 py-5 font-heading text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pr-10 pb-5 text-base text-pretty text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}

export { Faq }
