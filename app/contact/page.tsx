import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Page() {
  const questionData = [
    {
      q: "What is THUISA?",
      a: "THUISA is the Indonesian Student Association at Tunghai University. We host cultural, social, academic, and faith-friendly activities for Indonesian and non-Indonesian students.",
    },
    {
      q: "How do I join THUISA member?",
      a: "Fill the google form in here, and pay the membership fee to our THUISA ganbu",
      l: "https://www.google.com/",
    },
    {
      q: "How much for membership fee?",
      a: "It's around 200nt for 1 year membership in THUISA",
    },
    {
      q: "What benefit I can get as a member in THUISA?",
      a: "All events is more cheaper than the normal price",
    },
    {
      q: "Where do you post updates?",
      a: "Instagram & TikTok for quick updates, LINE for contact our ganbu, and email for official info.",
    },
    {
      q: "Where are events held?",
      a: "Mostly on campus (Tunghai), sometimes off-campus venues in Taichung. Each event page shows the exact location and map.",
    },
    {
      q: "How can I contact THUISA?",
      a: "DM Instagram (@thuisa), add our LINE (ID: thuisa), or email thuisa2025@gmail.com.",
    },
    {
      q: "How can partners/sponsors collaborate with THUISA?",
      a: "Email us your proposal and contact details; our partnership team will follow up.",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="w-full text-white bg-red-600 text-center py-15 md:py-25">
        <h1 className="text-4xl md:text-7xl font-bold pb-2 md:pb-4">
          Contact THUISA
        </h1>
        <p className="md:text-2xl text-md">
          Have questions or need support? <br />
          Contact us, we are happy to help
        </p>
      </div>
      <div className="md:max-w-5xl mx-10 md:mx-auto mt-10 md:mt-20 md:flex gap-10 text-center mb-10">
        <div className="md:w-1/2 px-10 md:pb-20 pb-10 pt-10 rounded-3xl shadow-md">
          <h1 className="text-red-600 md:text-5xl text-3xl font-bold mb-10">
            Contacts
          </h1>
          <h3 className="text-red-600 md:text-2xl text-xl mb-1">
            Contact Our Line:
          </h3>
          <p className="mb-5 md:mb-8 md:text-xl text-md">lineId thuisa</p>
          <h3 className="text-red-600 md:text-2xl text-xl mb-1">
            Find Our Latest Update:
          </h3>
          <p className="md:text-xl text-md">Tiktok: @thuisa_official</p>
          <p className="mb-5 md:mb-8 md:text-xl text-md">
            Instagram: thuisa_official
          </p>
          <h3 className="text-red-600 md:text-2xl text-xl mb-1">Email Us: </h3>
          <p className="md:text-xl text-md">thuisa2025@gmail.com</p>
        </div>
        <div className="md:w-1/2 rounded-3xl shadow-md px-10 md:pb-20 pb-10 pt-10">
          <h1 className="text-red-600 md:text-5xl text-3xl font-bold mb-7">
            Our Location:
          </h1>
          <div>
            <iframe
              title="Tunghai Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.693668951489!2d120.59997247606017!3d24.182473772050418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693e1c3a406707%3A0xd43d01bc4fb2806a!2sUniversitas%20Tunghai!5e0!3m2!1sid!2sid!4v1755167301397!5m2!1sid!2sid"
              allowFullScreen
              className="w-full md:min-h-100 min-h-75"
            ></iframe>
          </div>
        </div>
      </div>
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
                  target="__blank"
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
      <form></form>
    </div>
  );
}
