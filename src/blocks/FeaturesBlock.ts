import { Block } from "payload";

export const FeaturesBlock: Block = {
  slug: "features",
  fields: [
    { name: "heading", type: "text", required: true },
    {
      name: "cards",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
        },
        { name: "caption", type: "text" },
      ],
      minRows: 3,
      required: true,
    },
  ],
};
