const Portfolio = [
  {
    url: "https://www.wix.com/?utm_source=affiliate&utm_medium=paid_referral&utm_campaign=af_https://colorlib.com&experiment_id=cake_136935013^21",
    description: "Create a website without limits",
    credits: "Wix",
  },
  {
    url: "https://www.weebly.com/in",
    description: "Get started with our powerful free website builder.",
    credits: "Weebly",
  },
  {
    url: "https://mobirise.com/",
    description: "No code & free. Publish anywhere.",
    credits: "Mobirise",
  },
  {
    url: "https://www.ucraft.com/",
    description: "It All Starts With a New Website",
    credits: "Ucraft Website Builder",
  },
  {
    url: "https://tilda.cc/",
    description: "Create beautiful websites without any code on Tilda",
    credits: "Tilda",
  },
  {
    url: "https://www.strikingly.com/?utm_campaign=strkAffiliate_v3&utm_medium=affiliate&utm_source=3XeoTn",
    description: "Make a website in minutes",
    credits: "Strikingly Website Builder",
  },
  {
    url: "https://www.jimdo.com/",
    description: "Everything for your business",
    credits: "Jimdo",
  },
  {
    url: "https://www.webnode.com/",
    description: "Create your own website for free!",
    credits: "Webnode Website Builder",
  },
  {
    url: "https://readymag.com/",
    description: "Create outstanding websites without coding",
    credits: "Readymag",
  },
  {
    url: "https://app.site123.com/?aff=11115630&l=en&landingSystem=1",
    description: "By far the easiest free website builder",
    credits: "SITE123 Website Builder",
  },
  {
    url: "https://elementor.com/pages/elementor-wordpress-hosting/?cxd=5850_624763&utm_source=elementor&utm_medium=affiliate&utm_campaign=5850&utm_content=cx&affid=5850",
    description: "Build & Host Your WordPress Website",
    credits: "Elementor",
  },
  {
    url: "https://www.webstarts.com/",
    description: "Create A Website, Online Store, or Blog",
    credits: "WebStarts",
  },
  {
    url: "https://www.bookmark.com/",
    description: "Spend time running your business, not your website",
    credits: "Bookmark Website Builder",
  },
  {
    url: "https://www.web.com/websitebuilder?brand=websitebuilder&siteID=101&channelID=P99C101S653N0B2A16D132E0000V109",
    description: "eCommerce websites & tools",
    credits: "WebsiteBuilder",
  },
  {
    url: "https://8b.com/",
    description: "Simplest Website Builder",
    credits: "8b",
  },
  {
    url: "https://www.vsble.me/",
    description: "Outstanding websites for outstanding creative pros",
    credits: "Vsble Website Builder",
  },
  {
    url: "https://weblium.com/?sscid=51k7_prs3d&",
    description: "The most effortless website builder",
    credits: "Weblium",
  },
];
const container = document.querySelector("#Portfolio-Section");

Portfolio.forEach((link) => {
  const html = `
  <section class="Resources-list" >
      <div class="Listitem">
        <div class="Source">
          <a
            href="${link.url}"
            class="linked"
            ><img src="../../Images/URL.png" alt="" class="link"
          /></a>
          <p class="Discript">${link.description}</p>
          <p class="free-paid" id="free">Free</p>
        </div>
        <div class="Discription-of-list">
          <p class="credits">${link.credits}</p>
        </div>
      </div>
      </section>
  `;
  container.insertAdjacentHTML("beforeend", html);
});
