import { Block } from "payload";

export const FAQBlock: Block = {
  slug: "faq",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "OVERSEER'S MANUAL",
    },
    {
      name: "tagline",
      type: "text",
      required: true,
      defaultValue: "HELP_MODULE",
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
