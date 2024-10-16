import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: ".",
  description: "A vitepress site to management sales truffles",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Daily Control", link: "/daily-control" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/enriquevierne" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/enriquevierne/" },
    ],
  },
});
