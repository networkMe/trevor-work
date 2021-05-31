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
    "gatsby-plugin-react-helmet",
  ],
};
