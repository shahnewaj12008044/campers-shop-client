import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../../components/ui/accordion";
  
  const faqs = [
    {
      question: "What types of camping gear do you offer?",
      answer: "We offer a wide range of camping gear including tents, sleeping bags, backpacks, cooking equipment, and more.",
    },
    {
      question: "Do you have any eco-friendly products?",
      answer: "Yes, we have a selection of eco-friendly products made from sustainable materials to help you reduce your environmental footprint.",
    },
    {
      question: "Can I find gear for extreme weather conditions?",
      answer: "Absolutely! We have specialized gear designed for extreme weather conditions, ensuring you stay safe and comfortable no matter where you camp.",
    },
    {
      question: "Do you offer any camping tips or guides?",
      answer: "Yes, our website features a blog with camping tips, gear guides, and destination recommendations to help you plan your next adventure.",
    },
    {
      question: "How can I stay updated on new products and promotions?",
      answer: "You can subscribe to our newsletter to receive updates on new products, special promotions, and exclusive offers directly to your inbox.",
    },
  ];
  
  const Faq = () => {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="border-l-4  border-l-lime-400 px-4 py-4 bg-white rounded-lg w-full sm:w-3/4 md:w-1/2 mb-4">
          <h2 className="text-xs sm:text-sm md:text-2xl font-bold text-[#020C29] mb-4">
          Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4 ">
          {faqs.map((faq, index) => (
            <AccordionItem
            value={index.toString()}
              key={index}
              className="border border-gray-200 rounded-lg "
            >
              <AccordionTrigger className="p-4 text-gray-950 bg-gradient-to-tl from-blue-900 to-lime-300 rounded-lg hover:bg-gray-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-gradient rounded-lg my-1 font-bold text-[#020C29]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };
  
  export default Faq;
  