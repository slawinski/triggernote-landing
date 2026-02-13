import { Block } from "payload";

export const FAQBlock: Block = {
  slug: "faq",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "FAQ",
    },
    {
      name: "tagline",
      type: "text",
      required: true,
      defaultValue: "SUPPORT_MODULE",
    },
    {
      name: "faqs",
      type: "array",
      required: true,
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};
