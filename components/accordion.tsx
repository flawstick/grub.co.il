"use client"

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does Grub work?</AccordionTrigger>
        <AccordionContent>
          Grub streamlines meal management for companies by providing an easy-to-use platform for employees to order meals, integrating with payroll systems, and partnering with local restaurants.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What are the benefits for employers?</AccordionTrigger>
        <AccordionContent>
          Employers benefit from simplified meal management, increased employee satisfaction, and streamlined accounting processes for meal-related expenses.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do restaurants partner with Grub?</AccordionTrigger>
        <AccordionContent>
          Restaurants can partner with Grub by signing up on our platform. We provide them with access to a broader customer base and streamlined ordering processes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Is Grub available in my area?</AccordionTrigger>
        <AccordionContent>
          Grub is currently expanding its services to major cities across the United States. Please check our coverage area page or contact our sales team to see if we're available in your location.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How does Grub handle dietary restrictions and allergies?</AccordionTrigger>
        <AccordionContent>
          Grub allows employees to set their dietary preferences and allergies in their profiles. Our platform then filters meal options accordingly, ensuring that employees only see meals that meet their dietary needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can Grub accommodate both small businesses and large corporations?</AccordionTrigger>
        <AccordionContent>
          Yes, Grub's platform is scalable and can accommodate businesses of all sizes. We offer customizable solutions to meet the unique needs of both small businesses and large corporations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>How secure is the payment process through Grub?</AccordionTrigger>
        <AccordionContent>
          Grub uses industry-standard encryption and security measures to protect all financial transactions. We comply with PCI DSS standards and regularly undergo security audits to ensure the safety of our users' data.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FAQAccordion

