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
    Url: "http://roadmap.sh/",
    Cost: "free",
    Description: "React Developer",
    Credits: "Roadmap.sh",
  },
  {
    Url: "https://www.freecodecamp.org/news/react-fundamentals-for-beginners/",
    Cost: "free",
    Description: "Learn ReactJS – Complete Roadmap",
    Credits: "freeCodeCamp.org",
  },
  {
    Url: "https://medium.com/javarevisited/the-2019-react-js-developer-roadmap-9a8e290b8a56",
    Cost: "free",
    Description: "The 2023 React JS Developer RoadMap",
    Credits: "javinpaul",
  },
  {
    Url: "https://www.youtube.com/watch?v=xoh_L3KPpks",
    Cost: "free",
    Description: "React Roadmap for Beginners 2022",
    Credits: "Codevolution",
  },
  {
    Url: "https://www.youtube.com/playlist?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
    Cost: "free",
    Description: "Learn React",
    Credits: "Developedbyed",
  },
  {
    Url: "https://www.youtube.com/watch?v=PQEj_cm0QS0",
    Cost: "free",
    Description: "How to Become a React JS Developer",
    Credits: "Java Guides",
  },
];
const VideoTutorials = [
  {
    Url: "https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/37350404?start=720#overview",
    Cost: "paid",
    Description: "The Ultimate React Course 2023: React, Redux & More",
    Credits: "Jonas Schmedtmann",
  },
  {
    Url: "https://www.udemy.com/course/react-js-a-complete-guide-for-frontend-web-development/",
    Cost: "paid",
    Description:
      " React JS- Complete Guide for Frontend Web Development [2023]",
    Credits: "EdYoda Digital University",
  },
  {
    Url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    Cost: "paid",
    Description: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    Credits: "Maximilian Schwarzmuller",
  },
  {
    Url: "https://www.udemy.com/course/react-redux/",
    Cost: "paid",
    Description: "Master React and Redux Toolki",
    Credits: "Stephen Grider",
  },

  {
    Url: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
    Cost: "paid",
    Description: "Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)",
    Credits: "Yihua Zhang , Andrei Neagoie",
  },
  {
    Url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    Cost: "paid",
    Description: "The Complete 2023 Web Development Bootcamp",
    Credits: "Dr. Angela Yu",
  },
  {
    Url: "https://www.udemy.com/course/react-basic-in-just-1-hour/",
    Cost: "paid",
    Description: "React basic in just 1 hour [2022]",
    Credits: "Lio Ttrieu",
  },
  {
    Url: "https://www.classcentral.com/course/frontend-masters-complete-intro-to-react-v7-110382",
    Cost: "paid",
    Description: "Complete Intro to React, v7",
    Credits: "Frontend Masters",
  },
  {
    Url: "https://lnkd.in/dDk7p2v7",
    Cost: "free",
    Description: "React JS Tutorials",
    Credits: "Code with harry",
  },
  {
    Url: "https://www.youtube.com/playlist?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
    Cost: "free",
    Description: "Learn React",
    Credits: "Developedbyedr",
  },
  {
    Url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    Cost: "free",
    Description: "Beginner's Tutorial for React JavaScript Library [2022]",
    Credits: "freeCodeCamp.org",
  },
  {
    Url: "https://www.classcentral.com/course/youtube-full-modern-react-tutorial-45814",
    Cost: "free",
    Description: "Full Modern React Tutorial",
    Credits: "Net Ninja",
  },
  {
    Url: "https://www.youtube.com/watch?v=Dorf8i6lCuk",
    Cost: "free",
    Description: "React Crash Course for Beginners 2021",
    Credits: "Academind",
  },
  {
    Url: "https://www.youtube.com/playlist?list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP",
    Cost: "free",
    Description: "Build App Clones with ReactJS",
    Credits: "Clever Programmer",
  },
  {
    Url: "https://www.youtube.com/watch?v=gY5sGvq-8h8",
    Cost: "free",
    Description: "ReactJS Tutorial for Beginners",
    Credits: "Apna College",
  },
  {
    Url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
    Cost: "free",
    Description: "React Tutorial for Beginners",
    Credits: "Programming with Mosh",
  },
  {
    Url: "https://www.youtube.com/watch?v=Rh3tobg7hEo",
    Cost: "free",
    Description: "Learn React With This One Project",
    Credits: "Web Dev Simplified",
  },
  {
    Url: "https://www.youtube.com/watch?v=m55PTVUrlnA",
    Cost: "free",
    Description: "All The JavaScript You Need To Know For React",
    Credits: "PedroTech",
  },
  {
    Url: "https://www.youtube.com/watch?v=0riHps91AzE",
    Cost: "free",
    Description: "Learn React JS with Project in 2 Hours",
    Credits: "Dipesh Malvia",
  },
];

const Notes = [
  {
    Url: "https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/",
    Cost: "free",
    Description: "The React Handbook",
    Credits: "Freecodecamp",
  },
  {
    Url: "https://legacy.reactjs.org/docs/implementation-notes.html",
    Cost: "free",
    Description: "Implementation Notes",
    Credits: "Legacy Reactjs",
  },
  {
    Url: "https://www.geeksforgeeks.org/react-js-introduction-working/",
    Cost: "free",
    Description: "React.js Introduction and Working",
    Credits: "GeeksforGeeks",
  },
  {
    Url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
    Cost: "free",
    Description: "React Tutorial",
    Credits: "W3 Schools",
  },
  {
    Url: "https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf",
    Cost: "free",
    Description: "The React Beginners Handbook",
    Credits: "Flavio Copes",
  },
  {
    Url: "https://web.stanford.edu/class/cs142/lectures/ReactJS.pdf",
    Cost: "free",
    Description: "React Js Introduction",
    Credits: "Mendel Rosenblum",
  },
  {
    Url: "https://www.javatpoint.com/reactjs-tutorial",
    Cost: "free",
    Description: "Learn ReactJS Tutorial",
    Credits: "Java Point",
  },
];
const QuestionSheet = [
  {
    Url: "https://www.youtube.com/watch?v=0fYi8SGA20k&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR",
    Cost: "free",
    Description:
      "Build and Deploy.....(30 Projects Tutorials) ",
    Credits: "Javascript Mastery",
  },
  {
    Url: "https://www.youtube.com/watch?v=DgRrrOt0Vr8",
    Cost: "free",
    Description: "The Perfect Beginner React Project",
    Credits: "Web Dev Simplified",
  },
  {
    Url: "https://www.youtube.com/watch?v=edBx-fjgh4k",
    Cost: "free",
    Description: "React Responsive Real Estate Website",
    Credits: "ZAINKEEPSCODE",
  },
  {
    Url: "https://www.youtube.com/watch?v=b50zSyLiCYQ",
    Cost: "free",
    Description: "MASTER REACT JS IN ONE VIDEO WITH 5 PROJECTS",
    Credits: "6 Pack Programmer",
  },
  {
    Url: "https://www.youtube.com/watch?v=Vf09gAb5tSo",
    Cost: "free",
    Description: "Create Responsive Flight Booking Website using React JS",
    Credits: "IsraTech",
  },
];
const InterviewExperience = [
  {
    Url: "https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions",
    Cost: "free",
    Description: "Top 40 ReactJS Interview Questions and Answers for 2023",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.interviewbit.com/react-interview-questions/",
    Cost: "free",
    Description: "React Interview Questions",
    Credits: "Interview Bit",
  },
  {
    Url: "https://www.javatpoint.com/react-interview-questions",
    Cost: "free",
    Description: "React Interview Questions and Answers",
    Credits: "Javapoint",
  },
  {
    Url: "https://github.com/sudheerj/reactjs-interview-questions",
    Cost: "free",
    Description: "React Interview Questions & Answers for 2023",
    Credits: "Sudheer Jonna",
  },
  {
    Url: "https://www.edureka.co/blog/interview-questions/react-interview-questions/",
    Cost: "free",
    Description: "Top 100+ React Interview Questions You Must Prepare In 2023",
    Credits: "Edureka",
  },
  {
    Url: "https://intellipaat.com/blog/interview-question/react-interview-questions/",
    Cost: "free",
    Description: "Top React Interview Questions",
    Credits: "Intellpat",
  },
  {
    Url: "https://www.mygreatlearning.com/blog/react-js-interview-questions-and-answers/",
    Cost: "free",
    Description: "Top 50 React JS Interview Questions and Answers for 2023",
    Credits: "Great Lerning",
  },
  {
    Url: "https://www.toptal.com/react/interview-questions",
    Cost: "free",
    Description: "21 Essential React.js Interview Questions ",
    Credits: "Toptal",
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
