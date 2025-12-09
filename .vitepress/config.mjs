import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BaldHedgehog",
  description: "Muyun's Secret Garden",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Maths Notes', link: '/maths' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Maths Notes', link: '/maths' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MooYuun/study-notes' }
    ]
  }
})
