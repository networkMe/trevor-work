module.exports = {
  siteMetadata: {
    title: "Trevor's Profile",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-66908920-1",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 100
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ['Roboto', 'Roboto:bold']
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Trevor Meehl",
        short_name: "TM",
        start_url: "/",
        background_color: "#cccccc",
        theme_color: "#495562",
        display: "standalone",
        icon: "./src/images/web_ico.png"
      },
    },
  ],
};
