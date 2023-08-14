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
    Url: "https://youtu.be/7jtValBVpKc",
    Cost: "free",
    Description: "DevOps Roadmap for Beginners 2023",
    Credits: "Kushal Vijay",
  },
  {
    Url: "https://www.linkedin.com/posts/maheshwattamwar_devops-roadmap-activity-7048187266346725376-Pfdv?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "DevOps Roadmap",
    Credits: "Mahesh Wattamwar",
  },
  {
    Url: "https://youtu.be/G_nVMUtaqCk",
    Cost: "free",
    Description: "From Zero to DevOps Engineer",
    Credits: "TechWorld with Nana",
  },
  {
    Url: "https://www.linkedin.com/feed/update/urn:li:activity:7034140970451410944?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7034140970451410944%29",
    Cost: "free",
    Description: "The DevOps Roadmap",
    Credits: "Karishma Soni",
  },
  {
    Url: "https://www.linkedin.com/feed/update/urn:li:activity:7065202234656980993?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7065202234656980993%29",
    Cost: "free",
    Description: "DevOps Engineer Roadmap ",
    Credits: "Rohit Ghumare",
  },
  {
    Url: "https://youtu.be/mN-85fQkRAs",
    Cost: "free",
    Description: "How She Became a DevOps Engineer After 3 Years",
    Credits: "Technical Suneja",
  },
  {
    Url: "https://www.linkedin.com/posts/pratiksha-kanojiya-645204260_devops-roadmap-activity-7043541327367540736-9Cou?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description:
      "A Comprehensive ROadmap for Streamlining Development and Operation Processes",
    Credits: "Pratiksha Kanojiya",
  },
  {
    Url: "https://www.linkedin.com/posts/hiteshchoudhary_devops-roadmap-for-beginners-activity-6979770919548317696-ztaB?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "DevOps Roadmap for Beginners",
    Credits: "Hitesh Chaudhary",
  },
  {
    Url: "https://www.linkedin.com/posts/kartik-kathuria-988594217_licreatoraccelerator-linkedinforcreators-activity-7048553509616521216-8eMo?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "ROADMAP TO LEARN DEVOPS",
    Credits: "Kartik Kathuria",
  },
  {
    Url: "https://www.linkedin.com/posts/avni-goel-4045aa184_devops-roadmap-activity-7041255308412764160-vKrh?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "DevOps Roadmap 2023",
    Credits: "Avni Goel",
  },
  {
    Url: "https://www.linkedin.com/posts/vaibhav-kamble-b3683315a_devops-cicdpipelines-cloudinfrastructure-activity-7065670827458916353--ctv?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "DevOps Roadmap",
    Credits: "Vaibhav Kamble",
  },
  {
    Url: "https://youtu.be/EAXdnPWUCcc",
    Cost: "free",
    Description: "The best information on DevOps Roadmap",
    Credits: "Cloud Champ",
  },
];
const VideoTutorials = [
  {
    Url: "https://www.udemy.com/course/decodingdevops/",
    Cost: "paid",
    Description: "DevOps Beginners to Advanced",
    Credits: "Imran Teli (Udemy)",
  },
  {
    Url: "https://www.udemy.com/course/the-complete-devops-bootcamp/",
    Cost: "paid",
    Description: "The Ultimate DevOps Bootcamp - 2023",
    Credits: "KodeKloud Training",
  },
  {
    Url: "https://www.udemy.com/course/devops-with-docker-kubernetes-and-azure-devops/",
    Cost: "paid",
    Description: "Learn DevOps: Docker, Kubernetes, Terraform and Azure DevOps",
    Credits: "Udemy",
  },
  {
    Url: "https://www.udemy.com/course/devopsprojects/",
    Cost: "paid",
    Description: "DevOps Projects | 20 Real Time DevOps Projects",
    Credits: "Imran teli",
  },
  {
    Url: "https://www.udemy.com/course/the-devops-essentials/",
    Cost: "free",
    Description: "The DevOps Essentials - The Handbook",
    Credits: "Anand Rao Nedur",
  },

  {
    Url: "https://youtu.be/4wT73lCbIFM",
    Cost: "free",
    Description: "Do Companies Hire DevOps Freshers?",
    Credits: "Kunal Kushwaha",
  },
  {
    Url: "https://youtu.be/bi04iEjAa3I",
    Cost: "free",
    Description:
      "DevOps as a Career - Prerequisites, Resources, Mentorship, & More!",
    Credits: "Kunal Kushwaha",
  },
  {
    Url: "https://youtu.be/nKX3gfyvGxc",
    Cost: "free",
    Description: "Do these Important Certifications for DevOps",
    Credits: "TrainWithShubham",
  },

  {
    Url: "https://youtu.be/Xrgk023l4lI",
    Cost: "free",
    Description: "What Is DevOps? ",
    Credits: "SimpliLearn",
  },
  {
    Url: "https://youtu.be/ZbG0c87wcM8",
    Cost: "free",
    Description: "DevOps Bootcamp",
    Credits: "Kunal Kushwaha",
  },
  {
    Url: "https://youtu.be/j5Zsa_eOXeY",
    Cost: "free",
    Description: "DevOps Engineering Course for Beginners",
    Credits: "freeCodeCamp.org",
  },
  {
    Url: "https://youtu.be/5KtRF4NuUWE",
    Cost: "free",
    Description: "| Learn DevOps In 10 Hours |",
    Credits: "SimpliLearn",
  },
  {
    Url: "https://youtu.be/h7LDnVsNRVI",
    Cost: "free",
    Description: "DevOps Explained | Simplest Explanation in Hindi",
    Credits: "Apna College",
  },
  {
    Url: "https://youtu.be/-yFXVwhGP0s",
    Cost: "free",
    Description: "DevOps explanation by WebGentle",
    Credits: "WebGentle",
  },
  {
    Url: "https://www.youtube.com/live/-Ffuttr7znM?feature=share",
    Cost: "free",
    Description: "DevOps Tools",
    Credits: "IntelliPat",
  },
  {
    Url: "https://www.linkedin.com/posts/renu-b-600a5823a_devops-notes-activity-7059201044420935681-6Y2v?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "Devops Notes",
    Credits: "Renu B",
  },
  {
    Url: "https://www.linkedin.com/posts/rajesh-reddy-bejadi_devops-activity-7041369881476284416-V1XR?utm_source=share&utm_medium=member_desktop",
    Cost: "free",
    Description: "A complete DevOps package",
    Credits: "Rajesh Reddy Bejadi",
  },
  {
    Url: "https://www.javatpoint.com/devops",
    Cost: "free",
    Description: "DevOps Tutorial",
    Credits: "Java Tutorial Point",
  },
  {
    Url: "https://github.com/vinayhegde1990/devops-notes",
    Cost: "free",
    Description: "DeOps Notes",
    Credits: "Vijay Hegde",
  },
  {
    Url: "https://directdevops.blog/devops-classroom-notes/",
    Cost: "free",
    Description: "DevOps Classroom Notes",
    Credits: "Direct Developers",
  },
  {
    Url: "https://www.happiestminds.com/whitepapers/devops.pdf",
    Cost: "free",
    Description: "DevOps - Happiest Minds",
    Credits: "Happiest Minds",
  },
];
const QuestionSheet = [
  {
    Url: "https://youtu.be/WxjJlYFIWtI",
    Cost: "free",
    Description: "Devops Interview Questions",
    Credits: "Simplilearn",
  },
  {
    Url: "https://www.simplilearn.com/tutorials/devops-tutorial/devops-interview-questions",
    Cost: "free",
    Description: "Top 110+ DevOps Interview Questions and Answers",
    Credits: "Simplilearn",
  },
  {
    Url: "https://intellipaat.com/blog/interview-question/azure-devops-interview-questions/",
    Cost: "free",
    Description: "Top 30 Azure DevOps Interview Questions and Answers",
    Credits: "Intellipat",
  },
  {
    Url: "https://www.udemy.com/course/50-devops-interview-questions-answers/",
    Cost: "paid",
    Description: "50 DevOps Interview Questions & Answers - 2023",
    Credits: "Udemy",
  },

  {
    Url: "https://youtu.be/aAxtUJrpMWQ",
    Cost: "free",
    Description: "DevOps Interview For Experience : First Round Selected",
    Credits: "Ashok IT",
  },
  {
    Url: "https://youtu.be/NnRsdVN_yh0",
    Cost: "free",
    Description: "DevOps Mock Interviews",
    Credits: "Abhishek.Veeramalla",
  },
  {
    Url: "https://www.youtube.com/watch?v=JYAA2G-muZY",
    Cost: "free",
    Description: "How do I prepare for Cloud or DevOps Interviews",
    Credits: "Cloud Advocate",
  },
  {
    Url: "https://youtu.be/i7YJesoeWFI",
    Cost: "free",
    Description: "Devops Interview questions",
    Credits: "Deekshith SN",
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
