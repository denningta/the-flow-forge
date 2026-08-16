"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Section } from "@/components/site/section"
import type { FaqContent } from "@/lib/content-types"

function Faq({ data }: { data: FaqContent }) {
  const questions = data.questions ?? []

  return (
    <Section id="faq" eyebrow={data.eyebrow} title={data.heading}>
      {/* Base UI accordion: no `type` prop, and `defaultValue` is an array. */}
      <Accordion
        defaultValue={questions[0] ? [questions[0]._key] : []}
        className="reveal mt-12 max-w-3xl"
      >
        {questions.map((faq) => (
          <AccordionItem key={faq._key} value={faq._key}>
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
