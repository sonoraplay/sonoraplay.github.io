module.exports = {
  portal: [
    'intro',
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['vision', 'how-it-works', 'business-rules']
    },
    {
      type: 'category',
      label: 'Technical design',
      collapsed: false,
      items: ['architecture', 'data', 'apis', 'decisions']
    },
    {
      type: 'category',
      label: 'Project',
      collapsed: false,
      items: ['getting-started', 'status', 'glossary']
    }
  ]
};
