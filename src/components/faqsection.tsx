"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-28 px-16 bg-white">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="text-center mb-8 grid-cols-1">
            <h2 className="title text-left">
              Frequently Asked <br />
              Questions
            </h2>
            <p className="subtitle text-left">
              Find answers to common questions about our <br />
              affiliate program.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="how-does-it-work">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                Our affiliate program lets you share links to our platform and
                earn commissions for successful referrals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="why-join-us">
              <AccordionTrigger>Why join us?</AccordionTrigger>
              <AccordionContent>
                We provide competitive commissions, robust tracking, and
                resources to help you succeed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-to-sign-up">
              <AccordionTrigger>How to sign up?</AccordionTrigger>
              <AccordionContent>
                Signing up is easy! Just create an account on our affiliate
                portal and start sharing links.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="can-track-earnings">
              <AccordionTrigger>Can I track earnings?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We provide a user-friendly dashboard where you can
                monitor your earnings in real-time. You&apos;ll have access to
                real-time data, allowing you to monitor your progress and
                optimize youre strategies for maximum results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-get-paid">
              <AccordionTrigger>How do I get paid?</AccordionTrigger>
              <AccordionContent>
                Payments are made monthly via bank transfer or PayPal, based on
                your selected payment method.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
