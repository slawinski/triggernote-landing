import { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "USER LOGS",
    },
    {
      name: "tagline",
      type: "text",
      required: true,
      defaultValue: "USER_REPORTS",
    },
    {
      name: "testimonials",
      type: "array",
      required: true,
      fields: [
        {
          name: "author",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "textarea",
          required: true,
        },
        {
          name: "signal",
          type: "text",
          required: true,
          defaultValue: "STRONG",
        },
      ],
    },
  ],
};
