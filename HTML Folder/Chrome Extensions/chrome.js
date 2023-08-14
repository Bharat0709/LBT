const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const InterviewExperience = [
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
  },
  {
    Url: "",
    Cost: "free",
    Description: "",
    Credits: "",
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
