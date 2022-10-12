import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HuSpaCy',
  description: 'Industrial-strength Hungarian natural language processing.',
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/docs/': sidebarDocs(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huspacy/huspacy' },
    ]
  }
})

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/introduction' },
    { text: 'Documentation', link: '/docs/huspacy/' },
    { text: 'Models', link: 'https://huggingface.co/huspacy' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Guide',
      collapsable: false,
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Usage', link: '/guide/usage' },
        { text: 'Development', link: '/guide/development' },
        { text: 'Citing', link: '/guide/citing' },
        { text: 'License', link: '/guide/license' },
        { text: 'Contact', link: '/guide/contact' },
      ]
    },
    {
      text: 'Examples',
      collapsable: false,
      items: [
        { text: 'Keyphrase Extraction', link: '/guide/examples/keyphrase' },
        { text: 'Text Anonymizer', link: '/guide/examples/anonymizer' },
        { text: 'Relation Extraction', link: '/guide/examples/relation' },
        { text: 'DBpedia Spotlight', link: '/guide/examples/dbpedia' },
      ]
    }
  ]
}

function sidebarDocs() {
  return [
    {
      text: 'HuSpaCy Module',
      collapsable: false,
      items: [
        { text: 'Description', link: '/docs/huspacy/' }
      ]
    },
    {
      text: 'Large Model',
      collapsable: false,
      items: [
        { text: 'Description', link: '/docs/lg/' },
        { text: 'Changelog', link: '/docs/lg/changelog' },
        { text: 'Download', link: 'https://huggingface.co/huspacy/hu_core_news_lg' },
      ]
    },
    {
      text: 'Medium Model',
      collapsable: false,
      items: [
        { text: 'Description', link: '/docs/md/' },
        { text: 'Changelog', link: '/docs/md/changelog' },
        { text: 'Download', link: 'https://huggingface.co/huspacy/hu_core_news_md' },
      ]
    },
    {
      text: 'Transformer Model',
      collapsable: false,
      items: [
        { text: 'Description', link: '/docs/trf/' },
        { text: 'Changelog', link: '/docs/trf/changelog' },
        { text: 'Download', link: 'https://huggingface.co/huspacy/hu_core_news_trf' },
      ]
    },
    {
      text: 'Large Vectors',
      collapsable: false,
      items: [
        { text: 'Description', link: '/docs/lg_vectors/' },
        { text: 'Changelog', link: '/docs/lg_vectors/changelog' },
        { text: 'Download', link: 'https://huggingface.co/huspacy/hu_vectors_web_lg' },
      ]
    },
    {
      text: 'Medium Vectors',
      collapsable: false,
      items: [
        { text: 'Description', link: '/docs/md_vectors/' },
        { text: 'Changelog', link: '/docs/md_vectors/changelog' },
        { text: 'Download', link: 'https://huggingface.co/huspacy/hu_vectors_web_md' },
      ]
    }
  ]
}
