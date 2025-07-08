import { Block } from "payload";

export const HeaderBlock: Block = {
  slug: "header",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "nav",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "link", type: "text" },
      ],
      minRows: 1,
      required: true,
    },
  ],
};
