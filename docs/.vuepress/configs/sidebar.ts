import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
  "/rep/": [
    {
      text: "Representation",
      children: [
        "/rep/README.md",
        "/rep/classreps.md",
        "/rep/representation.md",
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
        "/club/handover.md",
      ],
    },
  ],
  "/uni/": [
    {
      text: "University Processes",
      children: ["/uni/README.md"],
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
