import { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subheading",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "cta-button",
      label: "CTA Button",
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
