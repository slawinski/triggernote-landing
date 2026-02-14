import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "subscription",
      type: "group",
      fields: [
        { name: "heading", type: "text", required: true },
      ],
    },
    {
        name: "socials",
        type: "array",
        fields: [
            { name: "platform", type: "text", required: true },
            { name: "icon", type: "upload", relationTo: "media", required: true },
            { name: "link", type: "text", required: true },
        ]
    },
    {
      name: "copyright",
      type: "text",
      required: true,
    },
  ],
};
