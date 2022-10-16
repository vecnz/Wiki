import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/representation/": [
    {
      text: "Representation",
      children: [
        "/representation/README.md",
        "/representation/classreps.md",
        "/representation/representation.md",
        "/representation/boards.md",
      ],
    },
  ],
  "/club/": [
    {
      text: "VEC Processes",
      children: [
        "/club/README.md",
        "/club/getting-involved.md",
        "/club/collective.md",
        "/club/events.md",
        "/club/engagement.md",
        "/club/meetings.md",
        "/club/structure.md",
        "/club/finances.md",
        "/club/handover.md",
      ],
    },
  ],
  "/university/": [
    {
      text: "University Processes",
      children: [
        "/university/README.md",
        "/university/guides.md",
        "/university/faq.md",
      ],
    },
  ],
  "/services/": [
    {
      text: "VEC Services",
      children: [
        "/services/README.md",
        "/services/vicverify.md",
        "/services/vecbot.md",
      ],
    },
  ],
};
