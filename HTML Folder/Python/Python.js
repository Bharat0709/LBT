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
    Url: "https://www.linkedin.com/feed/update/urn:li:activity:6992053261730017280?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6992053261730017280%29",
    Description: "The Ultimate Python roadmap",
    Cost: "free",
    Credits: "Abhinavan Sarikonda",
  },
  {
    Url: "https://www.youtube.com/watch?v=27u8xHqLMZE",
    Description: "Complete python roadmap",
    Cost: "free",
    Credits: "codebasics",
  },
  {
    Url: "https://www.linkedin.com/pulse/roadmap-python-shahrukh-khan/",
    Description: "Roadmap For Python",
    Cost: "free",
    Credits: "SHAHRUKH KHAN",
  },
  {
    Url: "https://roadmap.sh/python",
    Description: "Step by step guide to becoming a Python developer in 2023",
    Cost: "free",
    Credits: "Roadmap.sh",
  },
  {
    Url: "https://www.geeksforgeeks.org/best-way-to-start-learning-python-a-complete-roadmap/",
    Description: "Best Way To Start Learning Python – A Complete Roadmap",
    Cost: "free",
    Credits: "geeksforgeeks",
  },
  {
    Url: "https://www.javatpoint.com/complete-roadmap-to-learn-python",
    Description: "Complete roadmap to learn Pythonp",
    Cost: "free",
    Credits: "Java Point",
  },
  {
    Url: "https://www.youtube.com/watch?v=Ogild8PjK6c",
    Description: "HOW I Learned Python in 30 Days? BEST Python Course",
    Cost: "free",
    Credits: "Ishan Sharma",
  },
  {
    Url: "https://medium.com/javarevisited/the-2022-python-programmer-roadmap-bafb365071a3",
    Description: "The 2023 Python Programmer RoadMap",
    Cost: "free",
    Credits: "javinpaul",
  },
  {
    Url: "https://www.scaler.com/topics/software-engineering/python-developer-roadmap/",
    Description: "Python Developer Roadmap",
    Cost: "free",
    Credits: "Scaler",
  },
  {
    Url: "https://codersera.com/blog/roadmap-for-a-python-developer/",
    Description: "Roadmap For A Python Developer",
    Cost: "free",
    Credits: "Codesera",
  },
];
const VideoTutorials = [
  {
    Url: "https://www.udemy.com/course/100-days-of-code/",
    Description: " The Complete Python Pro Bootcamp for 2023",
    Cost: "paid",
    Credits: "Dr.Angela Yu",
  },
  {
    Url: "https://www.udemy.com/course/complete-python-bootcamp/",
    Description: "The Complete Python Bootcamp From Zero to Hero in Python",
    Cost: "paid",
    Credits: "Jose Portilla",
  },
  {
    Url: "https://www.udemy.com/course/complete-python-bootcamp/",
    Description: "Complete Python Developer in 2023: Zero to Mastery",
    Cost: "paid",
    Credits: "Andrei Neagoie",
  },
  {
    Url: "https://www.udemy.com/course/python-the-complete-python-developer-course/",
    Description: "Learn Python Programming Masterclass",
    Cost: "paid",
    Credits: "Udemy",
  },
  {
    Url: "https://www.codingninjas.com/courses/python-data-structures-and-algorithms?utm_source=google&utm_medium=%5Bsearch%5D&utm_campaign=17209309560_142852974389_p_python%20course__633903310512_c____9301525&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1U6wQh3GMu4CeuoSdv9kwWJHUNR6WxEaAbTxfcX438CYEoFPSat1SKhoCfmEQAvD_BwE",
    Description: "Basics of Python with Data Structures and Algorithms",
    Cost: "paid",
    Credits: "Coding Ninjas",
  },
  {
    Url: "https://www.youtube.com/watch?v=vLqTf2b6GZw",
    Description: "Python Tutorial for Beginners | Learn Python in 1.5 Hours",
    Cost: "free",
    Credits: "Apna College",
  },
  {
    Url: "https://www.youtube.com/watch?v=gfDE2a7MKjA",
    Description: "Python Tutorial For Beginners In Hindi (With Notes)",
    Cost: "free",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
    Description: "Introduction to Programming & Python",
    Cost: "free",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    Description: "Python Tutorial - Python Full Course for Beginners",
    Cost: "free",
    Credits: "Programming with Mosh",
  },

  {
    Url: "https://www.youtube.com/watch?v=ITSMDeOgXxw",
    Description: "Python Full Course 2023",
    Cost: "free",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
    Description: "Learn Python - Full Course for Beginners",
    Cost: "free",
    Credits: "freeCodeCamp.org",
  },

  {
    Url: "https://www.youtube.com/watch?v=XKHEtdqhLK8",
    Description: "Python Full Course for free ",
    Cost: "free",
    Credits: "Bro Code",
  },
  {
    Url: "https://www.youtube.com/watch?v=p15xzjzR9j0",
    Description:
      "Mastering Python - Everything You Need To Know To Become a Python Master",
    Cost: "free",
    Credits: "Tech with Tim",
  },
];
const Notes = [
  {
    Url: "https://www.codewithharry.com/notes/",
    Description: "Python Notes",
    Cost: "free",
    Credits: "CodeWithHarry",
  },

  {
    Url: "https://www.tutorialspoint.com/python/index.htm",
    Description: "Python Overview",
    Cost: "free",
    Credits: "Tutorials Point",
  },
  {
    Url: "https://www.w3schools.com/python/",
    Description: "Python Tutorial",
    Cost: "free",
    Credits: "W3Schools",
  },

  {
    Url: "https://www.dropbox.com/s/ch1st9uf61100qq/Python%20Programming%20Notes%20by%20CodingClub.pdf?dl=0",
    Description: "Python Notes",
    Cost: "free",
    Credits: "CodingClub26",
  },
  {
    Url: "https://www.tutorialsduniya.com/notes/python-notes/",
    Description: "Python Programming Notes",
    Cost: "free",
    Credits: "Tutorail Duniya",
  },
  {
    Url: "https://www.webpages.uidaho.edu/~stevel/504/Python%20Notes.pdf",
    Description: "Cheat Sheet",
    Cost: "free",
    Credits: "",
  },
  {
    Url: "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/PYTHON%20PROGRAMMING%20NOTES.pdf",
    Description: "PYTHON PROGRAMMING NOTES",
    Cost: "free",
    Credits: "MALLA REDDY COLLEGE OF ENGINEERING & TECHNOLOGY",
  },
];
const QuestionSheet = [
  {
    Url: "https://www.geeksforgeeks.org/python-exercises-practice-questions-and-solutions/",
    Description: "Python Exercises, Practice Questions and Solutions",
    Cost: "free",
    Credits: "geeksforgeeks",
  },
  {
    Url: "https://programmingwithmosh.com/python/python-exercises-and-questions-for-beginners/",
    Description: "53 Python Exercises and Questions for Beginners",
    Cost: "free",
    Credits: "Mosh Hamedani",
  },
  {
    Url: "https://programmingwithmosh.com/python/python-exercises-and-questions-for-beginners/",
    Description: "100+ Python challenging programming exercises",
    Cost: "free",
    Credits: "zhiwehu",
  },
  {
    Url: "https://www.udemy.com/course/automate-everything-with-python/",
    Description: "Automate Everything with Python",
    Cost: "paid",
    Credits: "Ardit Sluce",
  },
  {
    Url: "https://www.udemy.com/course/python-training/",
    Description: "Python A-Z: Learn Python By Building 15 Projects & ChatGPT",
    Cost: "paid",
    Credits: "Shubham Sarda",
  },
  {
    Url: "https://www.youtube.com/watch?v=DLn3jOsNRVE",
    Description: "5 Mini Python Projects - For Beginners",
    Cost: "free",
    Credits: "Tech with Tim",
  },
  {
    Url: "https://www.youtube.com/watch?v=_MzEthXDlGo",
    Description: "5 Quick Python Projects to Add To Your Resume!",
    Cost: "free",
    Credits: "Code with Harry",
  },
  {
    Url: "https://www.youtube.com/watch?v=8ext9G7xspg",
    Description: "12 Beginner Python Projects - Coding Course",
    Cost: "free",
    Credits: "freeCodeCamp.org",
  },
  {
    Url: "https://www.youtube.com/watch?v=DY4M9bAVyUc",
    Description: "Track Phone Number Location Using Python",
    Cost: "free",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.youtube.com/watch?v=KgCgpCIOkIs",
    Description: "Python Project for Data Analysis",
    Cost: "free",
    Credits: "Rishabh Mishra",
  },
];
const InterviewExperience = [
  {
    Url: "https://www.youtube.com/watch?v=s3nW1kdTT7w",
    Description: "20 Mostly Asked Python Question",
    Cost: "free",
    Credits: "Nitman Talks",
  },
  {
    Url: "https://www.youtube.com/watch?v=WZHx1h6f2W0",
    Description: "Python Interview Questions and Answer",
    Cost: "free",
    Credits: "Career Ride",
  },
  {
    Url: "https://www.youtube.com/watch?v=dVg0zFhSDhU",
    Description: "Top 15 Python Interview Questions ",
    Cost: "free",
    Credits: "Intellipaat",
  },
  {
    Url: "https://www.youtube.com/watch?v=uuhi830wOzs",
    Description: "Top 100 Python Interview Questions",
    Cost: "free",
    Credits: "Great Learning",
  },
  {
    Url: "https://www.youtube.com/watch?v=JDtp5IlGSug",
    Description: "Accolite Interview Experience |",
    Cost: "free",
    Credits: "NitMan Talks",
  },
];

const InsertHtml = `
<section class="Resources-list" >
    <div class="Listitem">
      <div class="Source">
        <a
        target=”_blank”
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
