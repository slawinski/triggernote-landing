import { HeroBlock } from "@/blocks/HeroBlock";
import { HeaderBlock } from "@/blocks/HeaderBlock";
import { CollectionConfig } from "payload";
import { AboutBlock } from "@/blocks/AboutBlock";
import { FeaturesBlock } from "@/blocks/FeaturesBlock";
import { ApplicationBlock } from "@/blocks/ApplicationBlock";
import { TestimonialsBlock } from "@/blocks/TestimonialsBlock";
import { FAQBlock } from "@/blocks/FAQBlock";

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
      blocks: [
        HeroBlock,
        HeaderBlock,
        AboutBlock,
        FeaturesBlock,
        ApplicationBlock,
        TestimonialsBlock,
        FAQBlock,
      ],
    },
  ],
};
