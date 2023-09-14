const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const InterviewExperience = [
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense",
    Cost: "free",
    Description:"Autocomplete behavior when you use require() to import modules into your code.",
    Credits: "npm Intellisense",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    Cost: "free",
    Description: "It checks your code for syntax errors and highlights errors ",
    Credits: "ESLint",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    Cost: "free",
    Description: "Make your codes consistently formatted and properly indented",
    Credits: "Prettier",
  },
  {
    Url: "make your codes consistently formatted and properly indented",
    Cost: "free",
    Description: "GitLens simply helps you better understand the code.",
    Credits: "GitLens — Git supercharged",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets",
    Cost: "free",
    Description: "JavaScript (ES6) code snippets",
    Credits: "Contains code snippets for JavaScript in ES6 syntax",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv",
    Cost: "free",
    Description: "DotENV is a syntax highlighting extension ",
    Credits: "DotENV",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments",
    Cost: "free",
    Description: "Human-friendly comments in your code",
    Credits: "Better Comments",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml",
    Cost: "free",
    Description: "It converts tabs to spaces to ensure valid YAML",
    Credits: "YAML",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker",
    Cost: "free",
    Description: "The goal of this spell checker is to help catch common spelling errors ",
    Credits: "Code Spell Checker",
  },
  {
    Url: "https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons",
    Cost: "free",
    Description: "Differentiate between different types of files and folders",
    Credits: "Vscode-icons",
  },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
  // {
  //   Url: "",
  //   Cost: "free",
  //   Description: "",
  //   Credits: "",
  // },
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
