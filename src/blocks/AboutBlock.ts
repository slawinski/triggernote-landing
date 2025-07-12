import { Block } from "payload";

export const AboutBlock: Block = {
  slug: "about",
  fields: [
    {
      name: "content",
      type: "text",
      required: true,
    },
    {
      name: "more-button",
      label: "Read More Button",
      type: "group",
      required: true,
      fields: [
        {
          name: "caption",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
