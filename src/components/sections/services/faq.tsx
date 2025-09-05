import Accordion from "@/components/shared/accordion";
import { Subtitle } from "@/components/shared/title";
import { FAQ } from "@/db/services";

export default function ServiceFAQ() {
  return (
    <div className="flex flex-col items-center w-full gap-6 lg:gap-10 pt-10">
      <Subtitle>
        Frequently Asked <span className="hidden lg:inline">Questions</span>
      </Subtitle>
      <div className="flex flex-col gap-4 w-full">
        {FAQ.map((faq) => (
          <Accordion
            key={faq.title}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </div>
    </div>
  );
}
