import React from "react";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
//import { calloutLink } from "./Homepage.module.scss";

import HL from "./banner.png";

const FirstLeftText = () => <p>Welcome Hackers</p>;

const FirstRightText = () => (
  <>
    <p>
      This is the <b>Landing Page</b> for the Hackathon Sept 16 - Sept 18, 2022
      {/* <a className={calloutLink} href="/getting-started">
      Start here →
    </a> */}
    </p>
  </>
);

const BannerText = () => (
  <>
    {" "}
    <h1>Credit Suisse Hackathon - Cloud CoP India 2022</h1>
    Microsoft Azure
  </>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={HL} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
