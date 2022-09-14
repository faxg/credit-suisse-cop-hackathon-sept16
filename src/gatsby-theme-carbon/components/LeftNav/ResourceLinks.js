import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  {
    title: "Credit Suisse",
    href: "https://www.credit-suisse.com",
  },
  {
    title: "Microsoft.Source Newsletter",
    href: "https://azure.microsoft.com/en-us/resources/join-the-azure-developer-community/?ocid=3054457",
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
