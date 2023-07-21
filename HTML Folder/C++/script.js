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
    Url: "https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/",
    Description: "DSA Roadmap",
    Cost: "free",
    Credits: "Geeks for Geeks",
  },
  {
    Url: "https://www.codingninjas.com/codestudio/library/complete-data-structures-and-algorithms-roadmap-for-placements",
    Description: "DSA Roadmap",
    Cost: "free",
    Credits: "Coding Ninjas",
  },
  {
    Url: "https://www.youtube.com/watch?v=UVP3123wNYQ",
    Description: "90 Days DSA Roadmap !",
    Cost: "free",
    Credits: "Nishant Chahar",
  },
  {
    Url: "https://www.youtube.com/watch?v=udt-kvHNt_o",
    Description: "Complete DSA Roadmap",
    Cost: "free",
    Credits: "Ishan Sharma",
  },
  {
    Url: "https://dev.to/suchitra_13/complete-roadmap-to-learn-data-structure-and-algorithms-1pka",
    Description: "Learn Data Structure and Algorithms",
    Cost: "free",
    Credits: "Dev Community",
  },
  {
    Url: "https://www.youtube.com/watch?v=RRjekv8D-O8",
    Description: "DON'T DO THIS While Learning DSA",
    Cost: "free",
    Credits: "Parikh Jain",
  },
];
const VideoTutorials = [
  {
    Url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    Description: "Complete C++ Placement Course",
    Cost: "free",
    Credits: "Love Babbar",
  },
  {
    Url: "https://www.thecodehelp.in/course/data-structures-bootcamp",
    Description: "Supreme Batch",
    Cost: "paid",
    Credits: "Love Babbar",
  },
  {
    Url: "https://www.udemy.com/course/datastructurescncpp/",
    Description: "Abdul Bari DSA C++",
    Cost: "paid",
    Credits: "Abdul Bari",
  },
  {
    Url: "https://www.codingninjas.com/courses/c-plus-plus-data-structures-and-algorithms?utm_source=google&utm_medium=%5Bsearch%5D&utm_campaign=14935983531_128056128213_e_coding%20ninjas%20c%2B%2B__612621177529_c____1007765&gclid=CjwKCAjwov6hBhBsEiwAvrvN6Dohjh3YZk97FnLPuANouzx7yaxmg1U4TBh_qFSamj_-TEXC16bwkxoCBfUQAvD_BwE",
    Description: "DSA in C++",
    Cost: "paid",
    Credits: "Coding Ninjas",
  },
  {
    Url: "https://pwskills.com/course/Decode-DSA-with-C++?source=course_listing_page&utm_source=Google&utm_medium=CPC&utm_campaign=PW%20Skills%20Decode%20C++%20Search&utm_source=google&utm_medium=cpc&utm_campaign=pw_Skills_Decode_Search_15-03-23&gclid=CjwKCAjwov6hBhBsEiwAvrvN6FqB-PVbUP4vpqJMAW_badG6UCblR3aA2kR98_a8WEKlJOtTu-99BBoC_KcQAvD_BwE",
    Description: "DSA in C++",
    Cost: "paid",
    Credits: "PW Skills",
  },
  {
    Url: "https://practice.geeksforgeeks.org/courses/dsa-self-paced?source=google&medium=cpc&device=c&keyword=data%20structures%20and%20algorithms%20online%20training&matchtype=b&campaignid=19932281970&adgroup=145142080462&gclid=CjwKCAjwov6hBhBsEiwAvrvN6AXWlYcn4gZWcN4PAuSECVjOwG-XTPe437AwW-LqcRjYedPkOfm6jRoCfDIQAvD_BwE",
    Description: "DSA in C++",
    Cost: "paid",
    Credits: "Geeks For Geeks",
  },
  {
    Url: "https://www.scaler.com/academy/mentee-dashboard/curriculum",
    Description: "DSA Course",
    Cost: "paid",
    Credits: "Scaler Academy",
  },
  {
    Url: "https://www.youtube.com/c/takeUforward",
    Description: "DSA Related Content Creator/Educator",
    Cost: "free",
    Credits: "Raj Vikramaditya (take U forward)",
  },
  {
    Url: "https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
    Description: "C++ Placement Course<",
    Cost: "free",
    Credits: "Apni Kaksha",
  },
  {
    Url: "https://www.youtube.com/c/takeUforward",
    Description: "Recursion Playlist-Aditya Verma",
    Cost: "free",
    Credits: "Aditya Verma",
  },
  {
    Url: "https://www.youtube.com/playlist?list=PLzjZaW71kMwQ-D3oxCEDHAvYu8VC1XOsS",
    Description: "Hashing Data Structure",
    Cost: "free",
    Credits: "Hello World (Youtube)",
  },
  {
    Url: "https://lnkd.in/dfmi74sU",
    Description: "Striver's Graph Series",
    Cost: "free",
    Credits: "Raj Vikramaditya (take U forward)",
  },
  {
    Url: "https://lnkd.in/dxXNKFgQ",
    Description: "Sliding Window Algorithm",
    Cost: "free",
    Credits: "Aditya Verma",
  },
  {
    Url: "https://lnkd.in/dytGUaGB",
    Description: "Segment Trees in Detail<",
    Cost: "free",
    Credits: "Code Buddy Official (Shikhar Garg)",
  },
  {
    Url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go",
    Description: "Dynamic Programming",
    Cost: "free",
    Credits: "Aditya Verma",
  },
  {
    Url: "https://www.udemy.com/course/data-structures-algorithms-using-c-zero-to-mastery/",
    Description: "DSA using C++",
    Cost: "free",
    Credits: "Udemy",
  },
];
const Notes = [
  {
    Url: "https://www.linkedin.com/posts/vikas-singh-rajput-546643206_best-free-resources-for-learning-dsa-activity-7044263947096473600-EcTx?utm_source=share&utm_medium=member_desktop",
    Description: "free Resources",
    Cost: "free",
    Credits: "Vikas Singh Rajput",
  },
  {
    Url: "https://www.linkedin.com/posts/shubham-upadhyay1_complete-dsa-guide-ugcPost-7046814924202749954-5yZc/?utm_source=share&utm_medium=member_android",
    Description: "DSA Guide",
    Cost: "free",
    Credits: "Shubham Upadhyay",
  },
  {
    Url: "https://www.codingninjas.com/codestudio/guided-paths",
    Description: "Guided Paths",
    Cost: "free",
    Credits: "Code Studio",
  },
  {
    Url: "https://lnkd.in/gJWWHX5m",
    Description: "Sorting Algorithms",
    Cost: "free",
    Credits: "Kapil Yadav",
  },
  {
    Url: "https://www.linkedin.com/posts/vijay-chollangi-3230abcd12271_data-structures-swipe-activity-7052650295620681728-Ms-O?utm_source=share&utm_medium=member_desktop",
    Description: "DSA Notes",
    Cost: "free",
    Credits: "Vijay Chollangi",
  },
  {
    Url: "https://www.geeksforgeeks.org/data-structures/",
    Description: "Data Structures",
    Cost: "free",
    Credits: "Geeks For Geeks",
  },
  {
    Url: "https://lnkd.in/gWsyCEGp",
    Description: "OOPs Notes",
    Cost: "free",
    Credits: "Kapil Yadav",
  },
  {
    Url: "https://www.linkedin.com/posts/riti2409_dsa-notes-ugcPost-7050100435306614784-TNHc/?utm_source=share&utm_medium=member_android",
    Description: "DSA Notes",
    Cost: "free",
    Credits: "Riti Kumari",
  },
  {
    Url: "https://lnkd.in/gs2B5w_G",
    Description: "Standard Template Library Notes",
    Cost: "free",
    Credits: "Kapil Yadav",
  },
];
const QuestionSheet = [
  {
    Url: "https://bit.ly/DSAbyApnaCollege",
    Description: "DSA Questions Sheet",
    Cost: "free",
    Credits: "Apna College",
  },
  {
    Url: "https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/",
    Description: "DSA Questions Sheet",
    Cost: "free",
    Credits: "Love Babbar<",
  },
  {
    Url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    Description: "DSA Questions Sheet",
    Cost: "free",
    Credits: "Striver",
  },
  {
    Url: "https://www.linkedin.com/posts/riti2409_must-do-leetcode-questions-ugcPost-7054669554555224064-fApW?utm_source=share&utm_medium=member_android",
    Description: "Must Do Leetcode Questions",
    Cost: "free",
    Credits: "Riti Kumari",
  },
  {
    Url: "https://www.youtube.com/playlist?list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-",
    Description: "LeetCode Solutions",
    Cost: "free",
    Credits: "Nick White",
  },
];
const ContentCreators = [
  {
    Url: "https://www.instagram.com/data_structures_algorithms/",
    Description: "Interview Q&A",
    Cost: "free",
    Credits: "data_structures_algorithms",
  },
  {
    Url: "https://www.instagram.com/leetcodeofficial/",
    Description: "All in One Creator",
    Cost: "free",
    Credits: "leetcodeofficial",
  },
  {
    Url: "https://www.instagram.com/codes.learning/",
    Description: "All In One",
    Cost: "free",
    Credits: "codes.learning",
  },
  {
    Url: "https://www.instagram.com/codingkrle/",
    Description: "Coding",
    Cost: "free",
    Credits: "codingkrle",
  },
];
const InterviewExperience = [
  {
    Url: "https://www.linkedin.com/posts/parassaini_dsa-interviewexp-collab-activity-7052490655062777856-d_i7?utm_source=share&utm_medium=member_desktop",
    Description: "Interview Experience MICROSOFT",
    Cost: "free",
    Credits: "Paras Saini",
  },
  {
    Url: "https://www.youtube.com/watch?v=Kpiok_qpmJI",
    Description: "Interview Experience AMAZON",
    Cost: "free",
    Credits: "Anuj Bhaiya",
  },
  {
    Url: "https://www.youtube.com/watch?v=Fg0i44PRjBU",
    Description: "Package, Rejections, Interview Experience",
    Cost: "free",
    Credits: "Harman Singh",
  },
  {
    Url: "https://www.youtube.com/watch?v=j2OonBggKE4&list=PLDYtC50LJ5HSzYhXzmEv6ktb8GCTADQY1",
    Description: "Interview Experience(Playlist)",
    Cost: "free",
    Credits: "Nishant Chahar",
  },
  {
    Url: "https://www.youtube.com/watch?v=pTJ034o2cks",
    Description: "Interview Experience APPLE, GOOGLE",
    Cost: "free",
    Credits: "Code Help",
  },
  {
    Url: "https://www.youtube.com/watch?v=K1raAUE7t-c",
    Description: "Interview Experience ADOBE",
    Cost: "free",
    Credits: "Code Help",
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
