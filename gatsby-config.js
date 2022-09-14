module.exports = {
  siteMetadata: {
    title: "Credit Suisse Hackathon Cloud CoP India - Sept 2022",
    description: "Join the Credit Suisse Hackathon Cloud CoP India - Sept 2022",
    keywords: "microsoft,challenge,azure, cloud, credit suisse",
  },
  pathPrefix: `/credit-suisse-cop-hackathon-sept16`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Credit Suisse Hackathon Cloud CoP India - Sept 2022",
        icon: "./static/images/favicon.svg",
        short_name: "CS Cloud CoP India Hackathon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#627d77",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        iconPath: "./static/images/favicon.svg",
        isSwitcherEnabled: false,
        titleType: "page",
        theme: {
          homepage: "white",
          interior: "white",
        },

        repository: {
          baseUrl: "https://github.com/faxg/credit-suisse-cop-hackathon-sept16",
          branch: "master",
        },
      },
    },
  ],
};
