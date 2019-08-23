module.exports = {
  title: 'SXCSS',
  description: ' 🎮 Minimalist, universal and scalable SASS/CSS framework for rapid UI development 🛠 ',
  ga: 'UA-140885563-1',
  themeConfig: {
    // logo: 'https://cdn.newfantastic.com/images/vue-wp-json-logo.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Contribution Guide', link: '/contribution-guide/' },
      { text: 'GitHub', link: 'https://github.com/sxcss/sxcss' },
      { text: 'Support us', link: 'https://github.com/sxcss/sxcss' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            ['/guide/introduction/why/', 'Why would you use this library?'],
            ['/guide/introduction/features/', 'Features'],
            ['/guide/introduction/schema/', 'Schema'],
            ['/guide/introduction/to-do/', 'To Do'],
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['/guide/getting-started/installation/', 'Installation'],
            ['/guide/getting-started/usage/', 'Usage'],
          ]
        },
      ],
      '/api/' : [
        {
          title: 'Variables',
          collapsable: false,
          children: [
            ['#', 'Height'],
          ]
        },
        {
          title: 'Mixins',
          collapsable: false,
          children: [
            ['#6', 'Height'],
          ]
        },
        {
          title: 'Functions',
          collapsable: false,
          children: [
            ['#6', 'Height'],
          ]
        },
        {
          title: 'Classes',
          collapsable: false,
          children: [
            ['#6', 'Height'],
          ]
        }
      ],
      '/contribution-guide/' : [
        {
          title: 'Contribution guide',
          collapsable: false,
          children: [
            ['/contribution-guide/reporting-issues/', 'Reporting Issues'],
            ['/contribution-guide/pull-requests/', 'Pull requests']
          ]
        }
      ]
    }
  }
}