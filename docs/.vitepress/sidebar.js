export default {
  "/representation/": [
    {
      text: "Representation",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/representation/" },
        { text: "Class Reps", link: "/representation/classreps" },
        { text: "Representation", link: "/representation/representation" },
        { text: "Boards", link: "/representation/boards" },
        { text: "Governance Structure", link: "/representation/governance" },
      ],
    },
  ],
  "/clubs/": [

    {
      text: "Victoria Engineering Club",
      collapsible: true,
      collapsed: true,
      link: "/clubs/vec/",
      items: [
        { text: "Introduction", link: "/clubs/vec/index" },
        { text: "Getting Involved", link: "/clubs/vec/getting-involved" },
        { text: "VEC Collective", link: "/clubs/vec/collective" },
        { text: "Event Organising", link: "/clubs/vec/events" },
        { text: "Engagement", link: "/clubs/vec/engagement" },
        { text: "Meetings", link: "/clubs/vec/meetings" },
        { text: "Club structure", link: "/clubs/vec/structure" },
        { text: "Finances", link: "/clubs/vec/finances" },
        { text: "Handover", link: "/clubs/vec/handover" },
        { text: "Technology", link: "/clubs/vec/technology" },
        { text: "Google Drive", link: "/clubs/vec/drive" },
      ],
    },
    {
      text: "VUWWIT",
      collapsible: true,
      collapsed: true,
      link: "/clubs/vuwwit/",
      items: [
        { text: "Introduction", link: "/clubs/vuwwit/index" },
      ],
    },
  ],
  "/university/": [
    {
      text: "University Guides",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/university/index" },
        { text: "FAQ", link: "/university/faq" },
      ],
    },
    {
      link: "/university/guides/",
      text: "Guides",
      collapsible: true,
      items: [
        { text: "Git", link: "/university/guides/git" },
        { text: "SSH and ECS", link: "/university/guides/ssh" },
        { text: "Virtual Machines", link: "/university/guides/virtual_machines" },
      ]
    },
  ],
  "/services/": [
    {
      text: "Hosted Services",
      collapsible: true,
      items: [
        { text: "Introduction", link: "/services/index" },
        { text: "Shared Services", link: "/services/shared" },
        { text: "VicVerify", link: "/services/vicverify" },
        { text: "VecBot", link: "/services/vecbot" },
        { text: "Internal Tools", link: "/services/internal" },
      ],
    },
  ],
}
