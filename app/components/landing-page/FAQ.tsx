import { faqItems } from "../../lib/utils";

export default function FAQ() {
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <h3 className="text-4xl font-bold text-white">Dúvidas frequentes</h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <FAQItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border borber border-border-primary bg-background-primary">
      <p className="font-bold text-white">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  );
}
