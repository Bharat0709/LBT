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
    Url: "https://roadmap.sh/backend",
    Cost: "free",
    Description: "Backend Developer",
    Credits: "Roadmap.sh",
  },
  {
    Url: "https://www.knowledgehut.com/blog/web-development/backend-developer-roadmap",
    Cost: "free",
    Description: "Backend Developer Roadmap: The Ultimate Guide 2023",
    Credits: "Knowledge Hut",
  },
  {
    Url: "https://www.scaler.com/topics/software-engineering/backend-developer-roadmap/",
    Cost: "free",
    Description: "Backend Developer Roadmap: The Ultimate Guide 2023",
    Credits: "Scaler.com",
  },
  {
    Url: "https://www.geeksforgeeks.org/back-end-developer-roadmap-2022/",
    Cost: "free",
    Description: "Back-End Developer Roadmap 2022",
    Credits: "Geeks for Geeks",
  },
  {
    Url: "https://medium.com/codex/backend-developer-roadmap-e61ce30ab10d",
    Cost: "free",
    Description: "Backend Developer Roadmap",
    Credits: "Prajix",
  },
  {
    Url: "https://www.alexhyett.com/backend-developer-roadmap-2023/",
    Cost: "free",
    Description: "Backend Developer Roadmap 2023",
    Credits: "ALEX HYETT",
  },
  {
    Url: "https://dev.to/creativetim_official/the-complete-roadmap-for-becoming-a-backend-developer-step-by-step-instructions-d4j",
    Cost: "free",
    Description:
      "The Complete Roadmap for Becoming a Backend Developer: Step-By-Step Instructions",
    Credits: "Creative Tim",
  },
  {
    Url: "https://www.youtube.com/watch?v=zwWROMFDBu0",
    Cost: "free",
    Description: "How To Become Backend Developer in 2022",
    Credits: "Coding Ninjas",
  },
  {
    Url: "https://www.youtube.com/watch?v=aZkG0b6oi4s",
    Cost: "free",
    Description: "How to Become a Backend Developer in 2023?",
    Credits: "Codedamn",
  },
  {
    Url: "https://www.youtube.com/watch?v=1QI0wDJeXO4",
    Cost: "free",
    Description: "Complete Backend Development Roadmap",
    Credits: "Anuj Bhaiya",
  },
];
const VideoTutorials = [
  {
    Url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
    Cost: "paid",
    Description: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
    Credits: "Jonas Schmedtmann",
  },
  {
    Url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    Cost: "paid",
    Description: "The Complete 2023 Web Development Bootcamp",
    Credits: "Dr. Angela Yu",
  },
  {
    Url: "https://www.udemy.com/course/software-developer-masterclass/",
    Cost: "paid",
    Description: "Complete Backend Development 2023 Bundle - Python Roadmap",
    Credits: "Shubham Sarda",
  },
  {
    Url: "https://www.udemy.com/course/django-python-advanced/",
    Cost: "paid",
    Description: "Build a Backend REST API with Python & Django - Advanced",
    Credits: "Mark Winterbottom , Brooke Rutherford",
  },
  {
    Url: "https://www.youtube.com/watch?v=w_L5XMp44tc",
    Cost: "free",
    Description: "Backend Development Full Course 2023",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=pmLnat8m4Nw",
    Cost: "free",
    Description: " Full Stack Development Full Course In 10 Hours",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
    Cost: "free",
    Description: "Full Stack Web Development for Beginners",
    Credits: "freecodecamp.org",
  },
  {
    Url: "https://www.youtube.com/watch?v=BLl32FvcdVM",
    Cost: "free",
    Description: "Node Js Tutorial in Hindi",
    Credits: "Code wih Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    Cost: "free",
    Description: "Node.js and Express.js - Full Course",
    Credits: "freecodecamp.org",
  },
  {
    Url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    Cost: "free",
    Description: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
    Credits: "Programming with Mosh",
  },
  {
    Url: "https://www.youtube.com/watch?v=J6mDkcqU_ZE",
    Cost: "free",
    Description: "MongoDB Tutorial in 1 Hour (2023)",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=SnqPyqRh4r4",
    Cost: "free",
    Description: "What Is MongoDB?",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=8eJJe4Slnik",
    Cost: "free",
    Description: "MongoDB Full Course 2023 ",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=SccSCuHhOw0",
    Cost: "free",
    Description: "Learn Express JS In 35 Minutes",
    Credits: "Web Dev Simplified",
  },
  {
    Url: "https://www.youtube.com/watch?v=0QRFOsrBtXw",
    Cost: "free",
    Description: "What Is Express JS?",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=XGa4onZP66Q",
    Cost: "free",
    Description: "What is an API ? Simply Explained",
    Credits: "Apna College",
  },
  {
    Url: "https://www.youtube.com/watch?v=JxzZxdht-XY",
    Cost: "free",
    Description: "Django Tutorial In Hindi",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
    Cost: "free",
    Description: "Python Django Tutorial for Beginners",
    Credits: "Programming with Mosh",
  },
  {
    Url: "https://www.youtube.com/watch?v=BLrGJvFp75M",
    Cost: "free",
    Description: "Python Django Tutorial",
    Credits: "Simplilearn",
  },
];
const InterviewExperience = [
  {
    Url: "https://www.interviewbit.com/node-js-interview-questions/",
    Cost: "free",
    Description: "Node.js Interview Questions",
    Credits: "InterviewBit",
  },
  {
    Url: "https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions",
    Cost: "free",
    Description: "Top 100+ Node.js Interview Questions and Answers for 2023",
    Credits: "Simplilearn",
  },
  {
    Url: "https://intellipaat.com/blog/interview-question/node-js-interview-questions/",
    Cost: "free",
    Description: "Top 50 Node.js Interview Questions and Answers for 2023",
    Credits: "Intellipat",
  },
  {
    Url: "https://www.fullstack.cafe/blog/node-js-interview-questions",
    Cost: "free",
    Description: "Kill Your Tech Interview",
    Credits: "Full Stack Cafe",
  },
  {
    Url: "https://www.interviewbit.com/mongodb-interview-questions/",
    Cost: "free",
    Description: "MongoDB Interview Questions",
    Credits: "Interview Bit",
  },
  {
    Url: "https://www.javatpoint.com/mongodb-interview-questions",
    Cost: "free",
    Description: "MongoDB Interview Questions",
    Credits: "Java Point",
  },
  {
    Url: "https://intellipaat.com/blog/interview-question/mongodb-interview-questions/",
    Cost: "free",
    Description: "Top MongoDB Interview Questions and Answers",
    Credits: "Intellipat",
  },
  {
    Url: "https://www.javatpoint.com/expressjs-interview-questions",
    Cost: "free",
    Description: "Most Asked Express.js Interview Questions and Answers",
    Credits: "JavaPoint",
  },
  {
    Url: "https://www.testgorilla.com/blog/expressjs-interview-questions/",
    Cost: "free",
    Description: "34 Express.js interview questions",
    Credits: "Test Gorilla",
  },
  {
    Url: "https://www.interviewbit.com/django-interview-questions/",
    Cost: "free",
    Description: "Django Interview Questions",
    Credits: "InterviewBit",
  },
  {
    Url: "https://www.javatpoint.com/django-interview-questions-and-answers",
    Cost: "free",
    Description: "Django Interview Questions",
    Credits: "JavaPoint",
  },
  {
    Url: "https://intellipaat.com/blog/interview-question/django-interview-questions/",
    Cost: "free",
    Description: "Top Django Interview Questions and Answers",
    Credits: "Intellipat",
  },
  {
    Url: "https://www.edureka.co/blog/interview-questions/django-interview-questions/",
    Cost: "free",
    Description: "Top 50 Django Interview Questions and Answers ",
    Credits: "Edureka",
  },
  {
    Url: "https://www.geeksforgeeks.org/django-interview-questions/",
    Cost: "free",
    Description: "Top 50 Django Interview Questions and Answers",
    Credits: "Geeks for Geeks",
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
ContentCreators.forEach((link) => {
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
  containerContentCreators.insertAdjacentHTML("beforeend", Replaced);
});
