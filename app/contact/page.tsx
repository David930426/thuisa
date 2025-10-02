import { ContactForm } from "@/components/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Information, Title } from "@/components/contact-components";
import { questionData } from "@/lib/qna-data";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Title />
      <Information />
      <h1 className="text-4xl md:text-7xl font-bold pb-5 md:pb-10 text-center text-red-600 md:mt-30 mt-20">
        Ask THUISA
      </h1>
      <Accordion
        type="single"
        collapsible
        defaultValue="question-0"
        className="max-w-5xl mx-10 md:mx-auto mb-20"
      >
        {questionData.map((data, index) => (
          <AccordionItem key={index} value={`question-${index}`}>
            <AccordionTrigger className="hover:cursor-pointer hover:no-underline">
              <p className="flex md:text-3xl text-xl md:py-5 py-1">{data.q}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="flex md:text-2xl text-md md:pb-10 pb-5">{data.a}</p>
              {data.l ? (
                <Link
                  href={`${data.l}`}
                  className="block text-blue-600 hover:text-red-600 md:text-2xl text-md md:pb-5"
                  target="_blank"
                >
                  Click Here
                </Link>
              ) : (
                ""
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <ContactForm />
    </div>
  );
}
