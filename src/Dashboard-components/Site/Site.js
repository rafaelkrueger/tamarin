import React, { useState } from "react";
import UndefinedImage from "../../Images/undefined.jpg";
import SiteCards from "./SiteCards";
import SiteDetails from "./SiteDetails";
import Api from "../../Api";
import "./Site.css";
import SitePattern from "./SitePattern";

function Site({ empresa, dashboard }) {
  const [website, setWebsite] = useState({
    websiteNavbarFooterColor:
      empresa != null ? empresa.website.websiteNavbarFooterColor : "",
    websiteFontFooterColor:
      empresa != null ? empresa.website.websiteFontFooterColor : "",
    websiteColor: empresa != null ? empresa.website.websiteColor : "",
    websiteFontColor: empresa != null ? empresa.website.websiteFontColor : "",
    websiteCarousel: empresa != null ? empresa.website.websiteCarousel : "",
  });

  return (
    <div className="site">
      <h1>Informações do Site</h1>
      {dashboard === 51 ? (
        <SitePattern
          empresa={empresa}
          website={website}
          setWebsite={setWebsite}
        />
      ) : (
        ""
      )}
      {dashboard === 53 ? <SiteCards empresa={empresa} /> : ""}
      {dashboard === 52 ? <SiteDetails empresa={empresa} /> : ""}
    </div>
  );
}

export default Site;
