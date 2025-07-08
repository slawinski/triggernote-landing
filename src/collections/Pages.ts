import { HeroBlock } from "@/blocks/HeroBlock";
import { HeaderBlock } from "@/blocks/HeaderBlock";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [HeroBlock, HeaderBlock],
    },
  ],
};
