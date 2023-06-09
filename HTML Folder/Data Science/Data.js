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
    Url: "https://www.scaler.com/topics/data-science/data-scientist-roadmap/",
    Description: "A Complete Guide on Data Scientist Roadmap in 2023",
    Cost: "free",
    Credits: "Scaler",
  },
  {
    Url: "https://www.analyticsvidhya.com/blog/2023/01/step-by-step-guide-to-become-a-data-scientist-in-2023/",
    Description: "Step-by-step Guide To become a Data Scientist in 2023",
    Cost: "free",
    Credits: "Analytics Vidhya",
  },

  {
    Url: " https://towardsdatascience.com/a-road-map-for-data-science-d1977504a72b",
    Description: "A Road Map for Data Science",
    Cost: "free",
    Credits: "Towards Data Science",
  },
  {
    Url: " https://github.com/Moataz-Elmesmary/Data-Science-Roadmap",
    Description: "Data-Science-Roadmap",
    Cost: "free",
    Credits: "GitHub",
  },
  {
    Url: " https://www.kdnuggets.com/2022/08/complete-data-science-study-roadmap.html",
    Description: "The Complete Data Science Study Road Map",
    Cost: "free",
    Credits: "KDnuggets",
  },
  {
    Url: "https://omdena.com/blog/data-science-road-map/",
    Description: "DataScience Roadmap in 2023 – The Ultimate Guide",
    Cost: "free",
    Credits: "OmDena",
  },
  {
    Url: "https://www.geeksforgeeks.org/how-to-become-data-scientist-a-complete-roadmap/",
    Description: "A Road Map for Data Science – A Complete Roadmap",
    Cost: "free",
    Credits: "GeeksForGeeks",
  },
  {
    Url: "https://www.simplilearn.com/data-science-roadmap-article#:~:text=What%20is%20the%20career%20path,data%20science%20career%20guide%20today.",
    Description: "Data Science Roadmap 2023",
    Cost: "free",
    Credits: "SimpliLearn",
  },
];
const Notes = [
  {
    Url: "https://www.geeksforgeeks.org/introduction-to-data-science/",
    Description: "Introduction to Data Science",
    Cost: "free",
    Credits: "GeeksForGeeks",
  },
  {
    Url: "https://nathancarter.github.io/MA346-course-notes/_build/html/chapter-1-intro-to-data-science.html",
    Description: "What is Data Science",
    Cost: "free",
    Credits: "GitHub Pages",
  },
  {
    Url: "https://www.guru99.com/data-science-tutorial.html",
    Description:
      "What is Data Science? Introduction, Basic Concepts and Processes",
    Cost: "free",
    Credits: "Guru99",
  },
  {
    Url: "https://www.tutorialsduniya.com/notes/data-science-notes/",
    Description: "Data Science Notes PDF",
    Cost: "free",
    Credits: "Tutorials Duniya",
  },
  {
    Url: "http://www.datasciencecourse.org/lectures/",
    Description: "Data Science Lectures",
    Cost: "free",
    Credits: "Practical Data Science",
  },
  {
    Url: "https://www.javatpoint.com/data-science",
    Description: "Data Science Tutorials for Beginners",
    Cost: "free",
    Credits: "Java Point",
  },
  {
    Url: "https://sites.google.com/student.onlinedegree.iitm.ac.in/datasciencenotes/home",
    Description: "Data Science Notes",
    Cost: "free",
    Credits: "Data Science Notes",
  },
  {
    Url: "https://srdas.github.io/Papers/DSA_Book.pdf",
    Description: "Data Science: Theories. Models, Algorithms and Analytics",
    Cost: "free",
    Credits: "Sanjiv Ranjan Das",
  },
  {
    Url: "https://sist.sathyabama.ac.in/sist_coursematerial/uploads/SCSA3016.pdf",
    Description: "Data Science",
    Cost: "free",
    Credits: "Sathyabama",
  },
  {
    Url: "https://machinelearningprojects.net/handwritten-data-science-notes/",
    Description: "Handwritten Data Science Notes",
    Cost: "free",
    Credits: "Machine Learning Projects by Abhishek Sharma",
  },
];
const InterviewExperience = [
  {
    Url: "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions",
    Description: "Top 90+ Data Science Interview Questions and Answers 2023",
    Cost: "free",
    Credits: "Simplilearn",
  },
  {
    Url: "https://intellipaat.com/blog/interview-question/data-science-interview-questions/",
    Description: "Top 100+ Data Science Interview Questions in 2023",
    Cost: "free",
    Credits: "Intellipat",
  },
  {
    Url: "https://www.interviewbit.com/data-science-interview-questions/",
    Description: "Data Science Interview Questions",
    Cost: "free",
    Credits: "Interviewbit",
  },
  {
    Url: "https://www.mygreatlearning.com/blog/data-science-interview-questions/",
    Description: "100+ Data Science Interview Questions in 2023",
    Cost: "free",
    Credits: "great Learning",
  },
  {
    Url: "https://www.edureka.co/blog/interview-questions/data-science-interview-questions/",
    Description: "120+ Data Science Interview Questions And Answers for 2023",
    Cost: "free",
    Credits: "Edureka",
  },
  {
    Url: "https://www.javatpoint.com/data-science-interview-questions",
    Description: "Top 25 Data Science Interview Questions",
    Cost: "free",
    Credits: "Java Point",
  },
];

const VideoTutorials = [
  {
    Url: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/",
    Description: "The Data Science Course: Complete Data Science Bootcamp",
    Cost: "paid",
    Credits: "365 Careers Team",
  },

  {
    Url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    Description: "Python for Data Science and Machine Learning Bootcamp",
    Cost: "paid",
    Credits: "Jose Portilla",
  },
  {
    Url: "https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/",
    Description: "Complete Machine Learning & Data Science Bootcamp 2023",
    Cost: "paid",
    Credits: "Daniel Bourke , Andrei Neagoie",
  },
  {
    Url: "https://www.udemy.com/course/datascience/#instructor-1",
    Description: "Data Science A-Z™: Hands-On Exercises & ChatGPT Bonus [2023]",
    Cost: "paid",
    Credits: "Kirill Eremenko , SuperDataScience Team , Ligency Team",
  },

  {
    Url: " https://www.youtube.com/watch?v=-ETQ97mXXF0",
    Description: "Data Science Full Course – Learn Data Science in 10 hours",
    Cost: "free",
    Credits: "Edureka",
  },
  {
    Url: "https://www.youtube.com/watch?v=JL_grPUnXzY&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV",
    Description: "Data Science Full Course For Beginners",
    Cost: "free",
    Credits: "codebasics",
  },
  {
    Url: "https://www.youtube.com/watch?v=xiEC5oFsq2s",
    Description: "Data Science Full Course – 12 hours",
    Cost: "free",
    Credits: "edureka",
  },
  {
    Url: "https://www.youtube.com/watch?v=JDcZBzb46ts",
    Description: "Python for Data Science Full Course",
    Cost: "free",
    Credits: "Great Learning",
  },
  {
    Url: "https://www.youtube.com/watch?v=ua-CiDNNj30&list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1",
    Description: "Learn Data Science Tutorial – Full Course for Beginners",
    Cost: "free",
    Credits: "freeCodeCamp.org",
  },
  {
    Url: "https://www.youtube.com/watch?v=X3paOmcrTjQ&list=PLEiEAq2VkUUIEQ7ENKU5Gv0HpRDtOphC6",
    Description: "Data Science",
    Cost: "free",
    Credits: "SimpliLearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=dJjSQwKjuwE&list=PLG9aCp4uE-s2HRvW-fSs2E4hk07xWTGYB",
    Description: "Data Science and Machine Learning",
    Cost: "free",
    Credits: "Unacademy Computer Science:",
  },
  {
    Url: "https://www.youtube.com/watch?v=tMZn54M8tGU&list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8",
    Description:
      "Machine Learning and Data Science Hamd-On Python Course Introduction",
    Cost: "free",
    Credits: "Indian AI Production",
  },
  {
    Url: "https://www.youtube.com/watch?v=innk6tpRCW0",
    Description: "Statistics for Data Science",
    Cost: "free",
    Credits: "Great Learning",
  },
  {
    Url: "https://www.youtube.com/watch?v=jtn-hRJjl68",
    Description: "What is Data Science? Complete RoadMap",
    Cost: "free",
    Credits: "Apna College",
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
