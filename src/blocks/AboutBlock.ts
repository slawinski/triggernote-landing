import { Block } from "payload";

export const AboutBlock: Block = {
  slug: "about",
  fields: [
    {
      name: "tagline",
      type: "text",
      required: true,
      defaultValue: "SYSTEM_MANIFESTO",
    },
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "OUR MISSION",
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
  ],
};
