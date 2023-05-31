const containerRoadmaps = document.querySelector("#DSAinCRoadmaps");
const containerVideoLectures = document.querySelector("#Video-Tutorials");
const containerNotes = document.querySelector("#Notes");
const containerQuestionSheet = document.querySelector("#Question-Sheet");
const containerContentCreators = document.querySelector("#Content-Creators");
const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
const RoadmapsArray = [
  {
    Url: "https://www.geeksforgeeks.org/roadmap-to-learn-javascript-for-beginners/",
    Cost: "free",
    Description: "Roadmap to Learn JavaScript For Beginners",
    Credits: "Geeks for Geeks",
  },
  {
    Url: "https://jsroadmap.com/",
    Cost: "free",
    Description: "JavaScript Beginners",
    Credits: "jsroadmap",
  },
  {
    Url: "https://roadmap.sh/javascript",
    Cost: "free",
    Description: "Step by step guide to learn JavaScript in 2023",
    Credits: "Roadmap.sh",
  },
  {
    Url: "https://www.youtube.com/watch?v=Ar9mGfmsgtM",
    Cost: "free",
    Description: "JavaScript Roadmap for Beginners in 2022",
    Credits: "Codevolution",
  },
  {
    Url: "https://flaviocopes.com/javascript/a",
    Cost: "free",
    Description: "Roadmap to Learn JavaScript",
    Credits: "Flavio Copes",
  },
  {
    Url: "https://medium.com/@sabirsafder/javascript-learning-roadmap-2023-the-ultimate-guide-f1bcebe24737",
    Cost: "free",
    Description: " JavaScript learning roadmap 2023 — The Ultimate Guide",
    Credits: "Sabir Hussain",
  },
  {
    Url: "https://www.youtube.com/watch?v=quJzdnXuNDc",
    Cost: "free",
    Description: "How to Learn Javascript in 2023 (From ZERO)",
    Credits: "Andy Sterkowitz",
  },
];
const VideoTutorials = [
  {
    Url: "https://www.udemy.com/course/javascript-and-php-programming-complete-course/",
    Cost: "paid",
    Description: " JavaScript And PHP Programming Complete Course",
    Credits: "Proper Dot Institute (Udemy)",
  },
  {
    Url: "https://www.udemy.com/course/the-complete-javascript-course/",
    Cost: "paid",
    Description: "The Complete JavaScript Course 2023: From Zero to Expert!",
    Credits: "Jonas Schmedtmann",
  },
  {
    Url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    Cost: "paid",
    Description: "The Complete 2023 Web Development Bootcamp",
    Credits: "Dr. Angela Yu",
  },
  {
    Url: "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/",
    Cost: "paid",
    Description: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
    Credits: "Maximilian Schwarzmüller",
  },
  {
    Url: "https://www.udemy.com/course/advanced-javascript-concepts/",
    Cost: "paid",
    Description: "JavaScript: The Advanced Concepts (2023 Update)",
    Credits: "Andrei Neagoie",
  },
  {
    Url: "https://www.educative.io/courses/complete-guide-to-modern-javascript?affiliate_id=5073518643380224",
    Cost: "paid",
    Description: "The Complete Guide to Modern JavaScript",
    Credits: "educative",
  },
  {
    Url: "JavaScript Tutorial In Hindi",
    Cost: "free",
    Description: "JavaScript Tutorial In Hindi",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=quJzdnXuNDc",
    Cost: "free",
    Description: "How to Learn Javascript in 2023 (From ZERO)",
    Credits: "Andy Sterkowitz",
  },
  {
    Url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    Cost: "free",
    Description:
      "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
    Credits: "Programming with Mosh",
  },
  {
    Url: "https://www.youtube.com/watch?v=B7wHpNUUT4Y",
    Cost: "free",
    Description: "Javascript Introduction ",
    Credits: "Apna College",
  },
  {
    Url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    Cost: "free",
    Description: "Learn JavaScript - Full Course for Beginners",
    Credits: "freeCodeCamp.org",
  },
  {
    Url: "https://www.youtube.com/watch?v=8HUuKkgskCA",
    Cost: "free",
    Description: "JavaScript Full Course 2023 ",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=o1IaduQICO0",
    Cost: "free",
    Description: "JavaScript Full Course",
    Credits: "Edureka",
  },
  {
    Url: "https://www.youtube.com/watch?v=SBmSRK3feww",
    Cost: "free",
    Description: "JavaScript Full Course (2023) - Beginner to Pro",
    Credits: "SuperSimpleDev",
  },
  {
    Url: "5 JavaScript Concepts You HAVE TO KNOW",
    Cost: "free",
    Description: "5 JavaScript Concepts You HAVE TO KNOW",
    Credits: "James Q Quick",
  },
];
const Notes = [
  {
    Url: "https://www.linkedin.com/feed/update/urn:li:activity:7063138544545935360?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7063138544545935360%29",
    Cost: "free",
    Description: "Javascript Handwritten Notes𝘀",
    Credits: "Topperworld",
  },
  {
    Url: "https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf",
    Cost: "free",
    Description: "JS Notes.",
    Credits: "Prof Harshal V Patil",
  },
  {
    Url: "https://www.youtube.com/watch?v=3PHXvlpOkf4",
    Cost: "free",
    Description: "Build 15 JavaScript Projects",
    Credits: "freecodecamp.org",
  },
  {
    Url: "https://www.youtube.com/watch?v=UQnucbThyFw",
    Cost: "free",
    Description: "10 JavaScript Projects that will get you HIRED",
    Credits: "Tanay Pratap",
  },
  {
    Url: "https://www.youtube.com/watch?v=E3XxeE7NF30",
    Cost: "free",
    Description: "Learn JavaScript With This ONE Project!",
    Credits: "Tech with Tim",
  },
  {
    Url: "https://www.youtube.com/watch?v=roumzWd4XJU",
    Cost: "free",
    Description: "5 Javascript Projects to Build (For Beginners)",
    Credits: "Andy Sterkowitz",
  },
  {
    Url: "https://www.youtube.com/watch?v=j59qQ7YWLxw",
    Cost: "free",
    Description: "Build A Calculator With JavaScript Tutorial",
    Credits: "Web Dev Simplified",
  },

  {
    Url: "Creating a Spotify Clone Using HTML, CSS & JavaScript",
    Cost: "free",
    Description: "Creating a Spotify Clone Using HTML, CSS & JavaScript",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=sSLGP-_2gOI&list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3&index=2",
    Cost: "free",
    Description: "Tic Tac Toe Using only HTML, CSS & JavaScrip",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=oFnIe-RpkE4",
    Cost: "free",
    Description: "Personal Portfolio website using HTML, CSS and JavaScript",
    Credits: "Code with Harry",
  },
];

const InsertHtml = `
<section class="Resources-list" >
    <div class="Listitem">
      <div class="Source">
        <a
          href="$\{Url}"
          class="linked"
          ><img src="../../Images/URL.png" alt="" class="link"
        /></a>
        <p class="Discript">$\{Description}</p>
        <p class="free-paid" id="\${Cost}">\${Costp}</p>
      </div>
      <div class="Discription-of-list">
        <p class="credits"> \${Credits}</p>
      </div>
    </div>
</section>
`;

RoadmapsArray.forEach((link) => {
  const html = InsertHtml;
  const Url = link.Url;
  const Description = link.Description;
  const Cost = link.Cost;
  const Costp = link.Cost;
  const Credits = link.Credits;
  const Replaced = html
    .replace(/\${Url}/g, Url)
    .replace(/\${Description}/g, Description)
    .replace(/\${Cost}/g, Cost)
    .replace(/\${Costp}/g, Cost.charAt(0).toUpperCase())
    .replace(/\${Credits}/g, Credits);
  containerRoadmaps.insertAdjacentHTML("beforeend", Replaced);
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
