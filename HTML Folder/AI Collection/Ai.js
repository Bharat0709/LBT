const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const InterviewExperience = [
  {
    Url: "https://chat.openai.com/",
    Cost: "free",
    Description: "It's CHAT GPT No Description Needed!!",
    Credits: "Chat GPT",
  },
  {
    Url: "https://writesonic.com/chat",
    Cost: "free",
    Description: "Chatsonic - your generative AI conversation partner",
    Credits: "Write Sonic",
  },
  {
    Url: "https://www.perplexity.ai/",
    Cost: "free",
    Description: "The answer to any question.",
    Credits: "Perplexity",
  },
  {
    Url: "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
    Cost: "free",
    Description: "Midjourney is imaginative powers of the human species",
    Credits: "Midjourney",
  },
  {
    Url: "https://bria.ai/",
    Cost: "free",
    Description: "The Visual Generative AI ",
    Credits: "Bria.AI",
  },
  {
    Url: "https://boolv.tech/",
    Cost: "free",
    Description: "Promo Video Maker",
    Credits: "Boolv",
  },
  {
    Url: "https://www.supercreator.ai/",
    Cost: "free",
    Description: "Ideate.Create.Dominate.",
    Credits: "Super Creator.AI",
  },
  {
    Url: "https://runwayml.com/",
    Cost: "free",
    Description: "Advancing creativity with artificial intelligence",
    Credits: "Runway",
  },
  {
    Url: "https://fliki.ai/",
    Cost: "free",
    Description: "Video creation made 10x simpler & faster with AI",
    Credits: "Fliki",
  },
  {
    Url: "https://gencraft.com/",
    Cost: "free",
    Description: "Bring your ideas to life.",
    Credits: "Gencraft",
  },
  {
    Url: "https://lumen5.com/",
    Cost: "free",
    Description: "Grow your brand and drive demand with video at scale",
    Credits: "Lumen5",
  },
  {
    Url: "https://www.watermarkremover.io/",
    Cost: "free",
    Description: "Remove Watermarks from Your Images for FREE",
    Credits: "Watermarkremover.io",
  },
  {
    Url: "https://tribescaler.com/index.html",
    Cost: "free",
    Description: "Make Your Tweets Go Viral",
    Credits: "TribeScaler",
  },
  {
    Url: "https://www.opus.pro/",
    Cost: "free",
    Description: "1 long video,10 viral clips.Create 10x faster.",
    Credits: "Opus Clip",
  },
  {
    Url: "https://postwise.ai/",
    Cost: "free",
    Description: "Write Engaging Posts in Seconds",
    Credits: "Postwise.AI",
  },
  {
    Url: "https://tokee.ai/",
    Cost: "free",
    Description: "Create YouTube Thumbnails that get Clicks.",
    Credits: "Tokke.AI",
  },
  {
    Url: "https://financegpt.uk/",
    Cost: "free",
    Description: "Text Generation is Great. Data and Charts Make it Better.",
    Credits: "FinanceGPT",
  },
  {
    Url: "https://explodingtopics.com/",
    Cost: "free",
    Description: "Discover Exploding Topics",
    Credits: "Exploding Topics",
  },
  {
    Url: "https://sketch.metademolab.com/canvas",
    Cost: "free",
    Description: "Sketch Canvas",
    Credits: "Sketch.metademolab",
  },
  {
    Url: "https://convert.leiapix.com/",
    Cost: "free",
    Description: "Bring your images to life",
    Credits: "Leiapix",
  },
  {
    Url: "https://10web.io/ai-website-builder/?_from=bruno86",
    Cost: "free",
    Description: "AI Website Builder",
    Credits: "10 Web",
  },
  {
    Url: "https://stunning.so/",
    Cost: "free",
    Description: "AI Website Builder",
    Credits: "Stunning.so",
  },
  {
    Url: "https://durable.co/",
    Cost: "free",
    Description: "Build a website in 30 seconds with AI.",
    Credits: "Durable AI",
  },
  {
    Url: "https://www.magicform.ai/",
    Cost: "free",
    Description: "Meet Your Sales Copilot",
    Credits: "Magic Form",
  },
  {
    Url: "https://www.taskade.com/?via=start&fp_sid=1-g-CjwKCAjwjMiiBhA4EiwAZe6jQwPF73GNBz_ekQ-FHmGvGJZiyXFVtHnFG3alEOkrHrPsSHvqZg0OaxoC8o4QAvD_BwE",
    Cost: "free",
    Description: "AI-Powered Productivity.",
    Credits: "Taskade",
  },
  {
    Url: "https://monica.im/",
    Cost: "free",
    Description: "All-in-one AI Assistant on All Websites & Devices",
    Credits: "Monica",
  },
  {
    Url: "https://sheetplus.ai/",
    Cost: "free",
    Description: "Write Google Sheets & Excel formulas 10x faster with AI",
    Credits: "Sheet+",
  },
  {
    Url: "https://rose.ai/",
    Cost: "free",
    Description: "Research faster with Rose",
    Credits: "Rose.AI",
  },
  {
    Url: "https://scribe.com/",
    Cost: "free",
    Description: "The future of medical documentation is here",
    Credits: "Scribe",
  },
  {
    Url: "https://godmode.space/",
    Cost: "free",
    Description: "Similar to Chat GPT",
    Credits: "GOD MODE",
  },
  {
    Url: "https://www.whatsgpt.me/",
    Cost: "free",
    Description: "Revolutionize messaging with ChatGPT",
    Credits: "WhatsGPT",
  },
  {
    Url: "https://beta.character.ai/",
    Cost: "free",
    Description: "Character.AI lets you create Characters and talk to them.",
    Credits: "Character.AI",
  },
  {
    Url: "https://www.rocketai.io/",
    Cost: "free",
    Description:
      "Generate creative assets that perfectly capture your unique brand style.",
    Credits: "Rocket.AI",
  },
  {
    Url: "https://beta.nando.ai/goalai.php",
    Cost: "free",
    Description:
      "GoalAI empowers you to design and launch self-governing AI GPT robots.",
    Credits: "Goal AI",
  },
  {
    Url: "https://www.slidesai.io/",
    Cost: "free",
    Description: "Create Presentation Slides with AI in seconds",
    Credits: "Slides AI",
  },
  {
    Url: "https://rationale.jina.ai/",
    Cost: "free",
    Description:
      "Rationale See two sides of the coin, make rational decisions.",
    Credits: "Ratinale",
  },
  {
    Url: "https://finchat.io/",
    Cost: "free",
    Description:
      "FinChat is ChatGPT for investors.",
    Credits: "FIn Chat",
  },
  {
    Url: "https://animeai.app/",
    Cost: "free",
    Description: "Create your perfect anime picture with AI.",
    Credits: "Anime.AI",
  },
];

const InsertHtml = `
<section class="Resources-list" >
<a target="_blank" href="$\{Url}" class="linked">
  <div class="Listitem \${RowColor}">
    <div class="Source">
      <img src="../../Images/URL.png" alt="" class="link" />
      <p class="Discript">$\{Description}</p>
      <p class="free-paid" id="\${Cost}">\${Costp}</p>
    </div>
    <div class="Discription-of-list">
      <p class="credits">$\{Credits}</p>
    </div>
  </div>
</a>
</section>
`;

InterviewExperience.forEach((link, index) => {
  let rowColorClass = '';
  if (index % 3 === 0) {
    rowColorClass = 'orange-row';
  } else if (index % 3 === 1) {
    rowColorClass = 'white-row';
  } else {
    rowColorClass = 'green-row';
  }
  const html = InsertHtml;
  const Url = link.Url;
  const Description = link.Description;
  const Cost = link.Cost;
  const Credits = link.Credits;
  const Replaced = html
  .replace(/\${Url}/g, Url)
  .replace(/\${Description}/g, Description)
  .replace(/\${Cost}/g, Cost)
  .replace(/\${Costp}/g, Cost.charAt(0).toUpperCase() + Cost.slice(1))
  .replace(/\${RowColor}/g, rowColorClass)
  .replace(/\${Credits}/g, Credits);
  containerInterviewExperience.insertAdjacentHTML("beforeend", Replaced);
});
