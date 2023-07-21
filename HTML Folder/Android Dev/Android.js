const containerRoadmaps = document.querySelector("#DSAinCRoadmaps");
const containerVideoLectures = document.querySelector("#Video-Tutorials");
const containerNotes = document.querySelector("#Notes");
const containerQuestionSheet = document.querySelector("#Question-Sheet");
const containerContentCreators = document.querySelector("#Content-Creators");
const containerInterviewExperience = document.querySelector(
  "#Interview-Experinece"
);
  const RoadmapsArray = [{
    Url:"www.google.com",
    Cost:"Free",
    Description:"Hello",
    Credits:"Bharat Pahwa"
  }];
  const VideoTutorials = [{}];
  const Notes = [{}];
  const QuestionSheet = [{}];
  const InterviewExperience = [{}];

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
