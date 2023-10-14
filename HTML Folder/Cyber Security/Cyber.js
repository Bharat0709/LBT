const containerRoadmaps = document.querySelector("#DSAinCRoadmaps");
const containerVideoLectures = document.querySelector("#Video-Tutorials");
const containerNotes = document.querySelector("#Notes");
const containerQuestionSheet = document.querySelector("#Question-Sheet");
const containerContentCreators = document.querySelector("#Content-Creators");
const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const RoadmapsArray = [];
const VideoTutorials = [
  {
    Url: "https://ctfd.io/",
    Cost: "free",
    Description: "An open-source CTF platform",
    Credits: "ctfd.io",
  },
  {
    Url: "https://ctftime.org/",
    Cost: "free",
    Description:
      "A public directory of all CTFs organized currently or in the past",
    Credits: "ctftime.org",
  },
  {
    Url: "https://trailofbits.github.io/ctf/",
    Cost: "free",
    Description: "An online book about preparing for CTFs",
    Credits: "Trailofbits",
  },
  {
    Url: "https://avatao.com/",
    Cost: "free",
    Description: "Challenges to practice cybersecurity skills",
    Credits: "Avatao",
  },
  {
    Url: "https://crackmes.one/",
    Cost: "free",
    Description: "Challenges to practice reverse engineering",
    Credits: "crackmes.one",
  },
  {
    Url: "http://www.dvwa.co.uk/",
    Cost: "free",
    Description:
      "A PHP/MySQL web application containing various vulnerabilities",
    Credits: "www.dvwa.co.uk",
  },
  {
    Url: "https://exploit-exercises.com/",
    Cost: "free",
    Description:
      "Virtual machines and challenges to practice security exploits",
    Credits: "exploit-exercises.com",
  },
  {
    Url: "https://hack.me/",
    Cost: "free",
    Description:
      "A community platform for building, hosting and sharing vulnerable web app code",
    Credits: "Hack Me",
  },
  {
    Url: "https://www.hackthebox.eu/",
    Cost: "free",
    Description: "A community platform with hacking challenges",
    Credits: "Hack the Box",
  },
  {
    Url: "https://www.hackthis.co.uk/",
    Cost: "free",
    Description:
      "Challenges to practice cryptography, forensics, JavaScript, SQL, and more",
    Credits: "www.hackthis.co.uk",
  },
  {
    Url: "http://www.hackertest.net/",
    Cost: "free",
    Description:
      "Challenges to practice JavaScript, PHP, HTML and graphic thinking",
    Credits: "Hacker Test",
  },
  {
    Url: "https://www.root-me.org/",
    Cost: "free",
    Description: "Challenges to practice hacking skills",
    Credits: "Root Me",
  },
  {
    Url: "https://portal.securecodewarrior.com/#/intro-splash",
    Cost: "free",
    Description: "Security learning resources and challenges",
    Credits: "portal.securecodewarrior.com",
  },
  {
    Url: "http://overthewire.org/wargames/",
    Cost: "free",
    Description: "Games for practicing hacking skills",
    Credits: "Overthewire.org",
  },
];

const Notes = [
  {
    Url: "https://www.cybrary.it/",
    Cost: "free",
    Description: "Free online security courses",
    Credits: "Cybrary",
  },
  {
    Url: "https://www.elearnsecurity.com/",
    Cost: "free",
    Description: "Paid online security courses",
    Credits: "E-learnsecurity",
  },
  {
    Url: "https://www.enisa.europa.eu/topics/trainings-for-cybersecurity-specialists/online-training-material",
    Cost: "free",
    Description: "Educational resources",
    Credits: "ENISA Training Resources ",
  },
  {
    Url: "https://www.exploit-db.com/",
    Cost: "free",
    Description: "Archive of exploits",
    Credits: "Exploit Database",
  },
  {
    Url: "https://www.hacker101.com/",
    Cost: "free",
    Description: "Free, open-source video lessons on web security",
    Credits: "Hacker101",
  },
  {
    Url: "https://www.hacksplaining.com/lessons",
    Cost: "free",
    Description: "Vulnerabilities explained simply",
    Credits: "Hacksplaining",
  },
  {
    Url: "http://www.opensecuritytraining.info/",
    Cost: "free",
    Description: "Free, open-source materials for computer security classes",
    Credits: "Opensecuritytraining",
  },
  {
    Url: "https://portswigger.net/web-security",
    Cost: "free",
    Description:
      "Free, online web security training with basic and advanced topics and hands-on labs",
    Credits: "PortSwigger",
  },
  {
    Url: "https://www.sans.org/",
    Cost: "free",
    Description: "Professional paid information security training",
    Credits: "SANS",
  },
  {
    Url: "https://tutorials.cyberaces.org/",
    Cost: "free",
    Description: "Video tutorials with handouts and quizzes",
    Credits: "SANS Cyber Aces",
  },
  {
    Url: "https://github.com/sindresorhus/awesome#security",
    Cost: "free",
    Description: "A major list on everything security-related",
    Credits: "Sindresorhu",
  },
  {
    Url: "http://www.amanhardikar.com/mindmaps/PracticeUrls.html",
    Cost: "free",
    Description: "A roadmap for vulnerable apps and systems",
    Credits: "Amanhardikar",
  },
  {
    Url: "http://captf.com/practice-ctf/",
    Cost: "free",
    Description: "CTF practice sites and tools",
    Credits: "CAPTF",
  },
  {
    Url: "https://teachcyber.tk/",
    Cost: "free",
    Description: "A list of free online resources",
    Credits: "Teach Cyber",
  },
  {
    Url: "https://www.wechall.net/active_sites",
    Cost: "free",
    Description: "A list of web challenges and practice sites",
    Credits: "We Chall",
  },
];
const QuestionSheet = [{}];

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

Notes.forEach((link) => {
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
  containerNotes.insertAdjacentHTML("beforeend", Replaced);
});

VideoTutorials.forEach((link) => {
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
  containerVideoLectures.insertAdjacentHTML("beforeend", Replaced);
});

QuestionSheet.forEach((link) => {
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
  containerQuestionSheet.insertAdjacentHTML("beforeend", Replaced);
});

