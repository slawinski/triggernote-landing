import { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      defaultValue: "SURVIVOR LOGS",
    },
    {
      name: "tagline",
      type: "text",
      required: true,
      defaultValue: "SIGNAL_INTERCEPTS",
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
