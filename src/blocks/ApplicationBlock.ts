import { Block } from "payload";

export const ApplicationBlock: Block = {
  slug: "application",
  fields: [
    {
      name: "tagline",
      type: "text",
      required: true,
      defaultValue: "Nightsable Card",
    },
    { name: "heading", type: "text", required: true },
    {
      name: "caption",
      type: "text",
      required: true,
    },
    {
      name: "downloads",
      type: "array",
      fields: [
        {
          name: "store-links",
          type: "group",
          required: true,
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
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
    },
  ],
};
