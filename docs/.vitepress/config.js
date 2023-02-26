import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";
import head from "./head";

export default defineConfig({
  lang: "en-US",
  title: "VEC Wiki",
  description: "Victoria Engineering Club Wiki",

  lastUpdated: true,
  cleanUrls: "without-subfolders",

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  head: head,

  themeConfig: {
    logo: "/images/logo_small.png",
    siteTitle: false,

    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vecnz/wiki" },
      { icon: "discord", link: "https://discord.gg/vec" },
    ],

    editLink: {
      pattern: "https://github.com/vecnz/wiki/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: " AGPLv3 & Creative Commons Attribution-ShareAlike 4.0 International Licensed",
      copyright: "Copyright © 2023-present Tūhura Tech",
    }
  },
});
