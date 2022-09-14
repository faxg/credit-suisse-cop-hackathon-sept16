import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";
import { withPrefix } from "gatsby";

const Content = ({ buildTime }) => (
  <>
    <p>Site build time: {buildTime}</p>
  </>
);

const links = {
  firstCol: [
    {
      href: "https://docs.microsoft.com/training/azure/?ocid=AID3054457",
      linkText: "Microsoft Learn for Azure",
    },
    {
      href: "https://docs.microsoft.com/azure/??ocid=AID3054457&product=all",
      linkText: "Azure Docs",
    },
    {
      href: "https://docs.microsoft.com/en-us/certifications/browse/?ocid=AID3054457&resource_type=certification&products=azure&type=fundamentals",
      linkText: "Azure Fundamental Certifications",
    },
  ],
  secondCol: [],
};

const CustomFooter = () => (
  <Footer
    links={links}
    Content={Content}
    Logo={() => (
      <img
        className={"logo"}
        src={withPrefix("/images/logo.svg")}
        alt="Logo"
      ></img>
    )}
  />
);

export default CustomFooter;
