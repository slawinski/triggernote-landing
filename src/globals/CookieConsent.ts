import { GlobalConfig } from "payload";

export const CookieConsent: GlobalConfig = {
  slug: "cookie-consent",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Cookie Consent",
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
    {
      name: "acceptButtonLabel",
      type: "text",
      required: true,
      defaultValue: "Accept All Cookies",
    },
    {
      name: "settingsButtonLabel",
      type: "text",
      required: true,
      defaultValue: "Settings",
    },
  ],
};
