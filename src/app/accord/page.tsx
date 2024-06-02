import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const AccordPage = () => {
  const faqData = [
    {
      question: "how many man in man in room ",
      answer: [
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam inventore nostrum consectetur recusandae animi obcaecati repellendus atque voluptatum. In aliquam iure, vitae rem quae fuga laborum tenetur, veritatis placeat sint repellendus, commodi laudantium unde labore quas nesciunt impedit laboriosam? Quod voluptate similique aspernatur numquam impedit cum nemo animi? Neque, laboriosam!",
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam inventore nostrum consectetur recusandae animi obcaecati repellendus atque voluptatum. In aliquam iure, vitae rem quae fuga laborum tenetur, veritatis placeat sint repellendus, commodi laudantium unde labore quas nesciunt impedit laboriosam? Quod voluptate similique aspernatur numquam impedit cum nemo animi? Neque, laboriosam!",
      ],
      value: "item-1",
    },
    {
      question: "how many man in man in room ",
      answer: [
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam inventore nostrum consectetur recusandae animi obcaecati repellendus atque voluptatum. In aliquam iure, vitae rem quae fuga laborum tenetur, veritatis placeat sint repellendus, commodi laudantium unde labore quas nesciunt impedit laboriosam? Quod voluptate similique aspernatur numquam impedit cum nemo animi? Neque, laboriosam!",
      ],
      value: "item-2",
    },
    {
      question: "how many man in man in room ",
      answer: [
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam inventore nostrum consectetur recusandae animi obcaecati repellendus atque voluptatum. In aliquam iure, vitae rem quae fuga laborum tenetur, veritatis placeat sint repellendus, commodi laudantium unde labore quas nesciunt impedit laboriosam? Quod voluptate similique aspernatur numquam impedit cum nemo animi? Neque, laboriosam!",
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam inventore nostrum consectetur recusandae animi obcaecati repellendus atque voluptatum. In aliquam iure, vitae rem quae fuga laborum tenetur, veritatis placeat sint repellendus, commodi laudantium unde labore quas nesciunt impedit laboriosam? Quod voluptate similique aspernatur numquam impedit cum nemo animi? Neque, laboriosam!",
      ],
      value: "item-3",
    },
    {
      question: "how many man in man in room ",
      answer: [
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam inventore nostrum consectetur recusandae animi obcaecati repellendus atque voluptatum. In aliquam iure, vitae rem quae fuga laborum tenetur, veritatis placeat sint repellendus, commodi laudantium unde labore quas nesciunt impedit laboriosam? Quod voluptate similique aspernatur numquam impedit cum nemo animi? Neque, laboriosam!",
      ],
      value: "item-4",
    },
  ];
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen px-3">
      <h1 className="text-3xl">Accordion</h1>
      <main className=" max-w-[500px] flex justify-center flex-col mx-auto px-2 my-4 w-full ">
        <Accordion type="single" collapsible>
          {faqData.map((obj, index) => (
            <AccordionItem key={index} value={obj.value}>
              <AccordionTrigger>{obj.question}</AccordionTrigger>
              {obj.answer.map((value, index) => (
                <AccordionContent key={index}>{value}</AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
        <Button className="my-4">
          <a href="/" className="w-full">
            Back
          </a>
        </Button>
      </main>
    </section>
  );
};

export default AccordPage;
