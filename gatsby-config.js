module.exports = {
  siteMetadata: {
    title: 'KubeSphere',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          "gatsby-remark-prismjs",
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
      },
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
  ],
}
