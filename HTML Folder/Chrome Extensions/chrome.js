const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const InterviewExperience = [
  {
    Url: "https://chrome.google.com/webstore/detail/compose-ai-ai-powered-wri/ddlbpiadoechcolndfeaonajmngmhblj",
    Cost: "free",
    Description: "AI-powered assistance for writing efficiency",
    Credits: "Compose AI",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/conch-ai/namibaeakmnknolcnomfdhklhkabkchl",
    Cost: "free",
    Description: "AI-powered Q&A for any article you're reading",
    Credits: "Conch AI",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/naturalreader-ai-text-to/kohfgcgbkjodfcfkcackpagifgbcmimk",
    Cost: "free",
    Description: "Text-to-speech conversion for easier content consumption",
    Credits: "Natural Reader - AI Text to Speech",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/otterai-record-and-transc/bnmojkbbkkonlmlfgejehefjldooiedp",
    Cost: "free",
    Description: "Automatic transcription of audio recordings",
    Credits: "Otter.ai",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/pronounce-english-pronunc/fbjmlmabammiejnfkmgjhdcnjdahblaj",
    Cost: "free",
    Description: "Pronounce",
    Credits: "Real-time feedback on English pronunciation",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/vetted-ai-%E2%80%93-gpt-for-shopp/cjmfiochlaffhnellbhffgnjocahinnh",
    Cost: "free",
    Description: "Vetted AI",
    Credits: "AI-powered product recommendations and comparisons",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/ai-excel-bot-chatgpt-exce/ehpdalbmeiockgpaikchiciodighaedg",
    Cost: "free",
    Description: "AI Excel Bot",
    Credits: "ChatGPT-powered assistance for Excel tasks",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/scribe-ai-documentation-s/okfkdaglfjjjfefdcppliegebpoegaii",
    Cost: "free",
    Description:
      "Convert video recordings into step-by-step process documents.",
    Credits: "Scribe",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/saima-ai-based-video-spee/dpajfcckdohlcidmbjledcaenfkjaddo",
    Cost: "free",
    Description: "AI-based video speed adjustment",
    Credits: "Saima",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/careerflow-ai-linkedin-op/iadokddofjgcgjpjlfhngclhpmaelnli",
    Cost: "free",
    Description: "AI-powered LinkedIn optimization",
    Credits: "Careerflow",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/hubspot-sales/oiiaigjnkhngdbnoookogelabohpglmd?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "HubSpot's Sales tool connects your email inbox with your CR",
    Credits: "HubSpot Sales",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/todoist-to-do-list-and-ta/jldhpllghnbhlbpcmnajkpdmadaolakh?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Highly organized and visually appealing to-do lists.",
    Credits: "Todoist",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/reply-free-email-search-a/amcdijdgmckgkkahhcobikllddfbfidi?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description:
      "Helps research and engage with potential prospects on LinkedIn",
    Credits: "Reply",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Helps eliminate distractions on specific websites.",
    Credits: "StayFocusd",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/clickup-tasks-screenshots/pliibjocnfmkagafnbkfcimonlnlpghj?hl=en",
    Cost: "free",
    Description: "All-in-one productivity platform with customizable features",
    Credits: "ClickUp",
  },
  {
    Url: "https://writesonic.com/chatgpt-chrome-extension-chatsonic",
    Cost: "free",
    Description: "Generate summarized answers to Google queries",
    Credits: "Chatsonic",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Autofills passwords, increasing security and saving time.",
    Credits: "LastPass",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/add-to-trello/engmocckoohpopiacajolojeobefbcec?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Easily add links as cards to Trello boards",
    Credits: "Add to Trello",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/extension-manager/gjldcdngmdknpinoemndlidpcabkggco?hl=en",
    Cost: "free",
    Description: "Organizes extensions to keep browser interface clear",
    Credits: "Extensions Manager",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/toggl-track-productivity/oejgccbfbmkkpaidnkphaiaecficdnfn",
    Cost: "free",
    Description: "Convenient time tracking within the browser",
    Credits: "Toggl Track",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/print-friendly-pdf/ohlencieiipommannpdfcmfdpjjmeolj",
    Cost: "free",
    Description: "Saves web pages in print-friendly format or as PDFs.",
    Credits: "Print Friendly & PDF",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/email-finder-by-snovio/einnffiilpmgldkapbikhkeicohlaapj",
    Cost: "free",
    Description: "Provides verified emails associated with a domain",
    Credits: "Email Finder",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/clickclean/ghgabhipcejejjmhhchfonmamedcbeod?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Easy one-click clearing of browser cache",
    Credits: "Click&Clean",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/j2team-security/hmlcjjclebjnfohgmgikjfnbmfkigocc?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description:
      "Offers basic virus protection and customizable website block list",
    Credits: "J2TEAM Security",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-ad-blo/mlomiejdfkolichcflejclcbmpeaniij?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Sophisticated ad-blocking to improve browsing experience",
    Credits: "Ghostery",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Combines technical SEO and security analysis for websites",
    Credits: "Checkbot",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/avast-online-security/gomekmidlodglbbmalcneegieacbdmki?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Examines websites for suspicious information ",
    Credits: " Avast Online Security",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/flowcrypt-encrypt-gmail-w/bnjglocicdkmhmoohhfkfkbbkejdhdgc?hl=en&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description:
      "Provides PGP encryption for sending and receiving encrypted emails",
    Credits: "FlowCrypt",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/fair-adblocker/lgblnfidahcdcjddiepkckcfdhpknnjh?hl=en-US&__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Fair AdBlocker",
    Credits: "Protects against malware and distracting ads and pop-ups",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/speedtest-by-ookla/pgjjikdiikihdfpoppgaidccahalehjh",
    Cost: "free",
    Description: "Accurate speed measurements",
    Credits: "Speedtest by Ookla",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/hola-free-vpn-proxy-unblo/gkojfkhlekighikafcpjkiklfbnlmeio",
    Cost: "free",
    Description: "Geolocation flexibility VPN",
    Credits: "Hola Free VPN",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/bitly-unleash-the-power-o/iabeihobmhlgpkcgjiloemdbofjbdcic?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Quick and easy link shortening",
    Credits: "Bitly",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/pinterest-save-button/gpdjojdkbbmdfjfahjcgigfpmkopogic?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Easily save items to Pinterest boards ",
    Credits: "Pinterest",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/save-to-facebook/jmfikkaogpplgnfjmbjdpalkhclendgd?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description: "Centralized location for saving interesting web content",
    Credits: " Save to Facebook",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/ritetag/hclhpnhohpmlbadmeieecaandnglfodm?__hstc=20629287.a51a184b1f4b68b5a109abeccb174b23.1628192355924.1630000442296.1630011805805.80&__hssc=20629287.1.1630011805805&__hsfp=4043529008",
    Cost: "free",
    Description:
      "Real-time analysis of hashtag performance on Twitter and Facebook",
    Credits: "RiteTag",
  },
  {
    Url: "https://chrome.google.com/webstore/detail/buffer/noojglkidnpfjbincgijbaiedldjfbhh",
    Cost: "free",
    Description: "Easily share content to Facebook, Twitter, and LinkedIn",
    Credits: "Buffer",
  },
];

const InsertHtml = `
<section class="Resources-list" >
<a target="_blank" href="$\{Url}" class="linked">
  <div class="Listitem">
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

InterviewExperience.forEach((link) => {
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
    .replace(/\${Credits}/g, Credits);
  containerInterviewExperience.insertAdjacentHTML("beforeend", Replaced);
});
