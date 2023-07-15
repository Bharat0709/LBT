"use strict";

// const MagicSearch = document.querySelector(".MagicSearch");
const Answer = document.querySelector(".answer");
const Reload = document.querySelector(".Reload");
const SearchContainer = document.querySelector(".search-container2");
const SearchContainerFull = document.querySelector(".Searches");
const SearchInput = document.querySelector(".search-input");
const SearchButton = document.querySelector(".search");
const SearchInput2 = document.querySelector(".search-input2");
const SearchButton2 = document.querySelector(".search2");
const SearchAgain = document.querySelector("#search-again");
const SearchAgain2 = document.querySelector("#search-again2");
const APIResponse = document.querySelector("#str");
const Renderedurl = document.querySelector(".RenderedURL");
const Hamburger = document.querySelector(".Hamburger");
const SideMenu = document.querySelector("#SideMenuID");
const sideMenuItems = document.querySelector(".SideMenuItem");
const CheckBox = document.querySelector("#check");
const visitButtons = document.querySelectorAll(".Visit_Button");
const Collections = document.querySelector("#CollectionServices");
const Contests = document.querySelector("#ContestEvents");
const Collabs = document.querySelector("#Collaboration");
const Contactus = document.querySelector("#Contact-Us");
const CollectionSection = document.querySelector("#Templates-Section");
const ContestsSection = document.querySelector("#Events-Section");
const CollabsSection = document.querySelector("#Resources-section");
const OurTeam = document.querySelector("#OurTeam");
const Subscribe = document.querySelector(".Subs");
const Newsletter = document.querySelector(".Newsletter");
console.log(OurTeam);
const TeamsSection = document.querySelector("#Team-Members");
console.log(TeamsSection);
const ContactUsSection = document.querySelector("#Contactus-Section");
Subscribe.addEventListener("click", function () {
  Newsletter.value = "";
});
Collections.addEventListener("click", function () {
  CollectionSection.scrollIntoView({ behavior: "smooth" });
});
OurTeam.addEventListener("click", function () {
  TeamsSection.scrollIntoView({ behavior: "smooth" });
});

Collabs.addEventListener("click", function () {
  CollabsSection.scrollIntoView({ behavior: "smooth" });
});

Contests.addEventListener("click", function () {
  ContestsSection.scrollIntoView({ behavior: "smooth" });
});
Contactus.addEventListener("click", function () {
  ContactUsSection.scrollIntoView({ behavior: "smooth" });
});

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "I have a degree in procrastination, but I still managed to graduate!",
  "The road to success is paved with coffee and all-nighters.",
  "College: where dreams come true, but so do nightmares.",
  "I'm not just getting an education, I'm getting a caffeine addiction too.",
  "College: the place where everyone knows your name, but you can't remember theirs.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "I don't always study, but when I do, I make sure it's worth it.",
  "If at first you don't succeed, try again. And again. And again... until you pass.",
  "College: where every mistake is a learning opportunity.",
  "Don't let yesterday take up too much of today.",
  "Education is not the filling of a pail, but the lighting of a fire.",
  "College is not just about getting a degree, it's about discovering yourself.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "I'm not just here for the degree, I'm here for the experience.",
  "The only way to do great work is to love what you do.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The best way to predict the future is to create it.",
  "Your only limit is the amount of doubt you have in yourself.",
  "Education is the passport to the future for tomorrow belongs to those who prepare for it today.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.",
  "Don't let the fear of striking out keep you from playing the game.",
  "Don't wait for opportunities, create them.",
  "Success is not about how much money you make, it's about the difference you make in people's lives.",
  "The best way to find yourself is to lose yourself in the service of others.",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
  "Believe in yourself and you will be unstoppable.",
  "Success is not measured by what you accomplish, but by the obstacles you overcome.",
  "Education is not preparation for life; education is life itself.",
  "College: where you pay to sleep in class.",
  "I majored in procrastination with a minor in Netflix.",
  "I have a degree in liberal arts, do you want fries with that?",
  "College is the perfect time to learn how to budget your time – and your money.",
  "I'm not a morning person. Or an afternoon person. Or an evening person. College has ruined my sleep schedule.",
  "College: the place where you go to get a degree and a caffeine addiction.",
  "College is like a party – except you're constantly worried about your GPA.",
  "I don't always study, but when I do, I prefer to do it the night before the exam.",
];

// function showQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const quoteText = quotes[randomIndex];
//   const quoteElement = document.getElementById("quote");
//   quoteElement.insertAdjacentHTML("afterend", `<p id="quote">${quoteText}</p>`);
// }

// window.onload = function () {
//   const loadingContainer = document.querySelector(".loading-container");
//   showQuote();
//   setTimeout(function () {
//     loadingContainer.style.opacity = 0;
//     setTimeout(function () {
//       loadingContainer.style.display = "none";
//       const landingPage = document.querySelector(".landing-page");
//       landingPage.style.opacity = 1;
//       sessionStorage.setItem("animationPlayed", true);
//     }, 2000);
//   }, 3000);
// };

let firstClick = true;

Hamburger.addEventListener("click", function () {
  if (CheckBox.checked) {
    SideMenu.classList.add("show");
    SideMenu.style.display = "flex";
  } else {
    SideMenu.classList.remove("show");
    SideMenu.style.display = "none";
  }
});

// MagicSearch.addEventListener("click", function () {
//   SearchContainerFull.style.display = "flex";
// });

// MagicSearchNav.addEventListener("click", function () {
//   SearchContainerFull.style.display = "flex";
//   CheckBox.checked = false;
// });

const RenderURl = function (data) {
  const html = `
  <a class="RenderedURL" href="${data.data[0].url}">Click Here To View</p>
    `;
  SearchContainer.insertAdjacentHTML("afterbegin", html);
  console.log(data.data[0].url);
};

SearchAgain.addEventListener("click", function () {
  SearchButton.style.display = "block";
  SearchAgain.style.display = "none";
  APIResponse.textContent = " ";
  Answer.style.display = "none";
});

SearchAgain2.addEventListener("click", function () {
  console.log(SearchInput2.value);
  SearchButton2.style.display = "block";
  SearchAgain2.style.display = "none";
  Renderedurl.style.display = "none";

  SearchInput2.style.display = "flex";
});

SearchButton.addEventListener("click", function () {
  alert("Sit Tight while we are generating your Answer");
  SearchButton.style.display = "none";
  const PromptGiven = SearchInput.value;
  SearchAgain.style.display = "flex";
  Answer.style.display = "flex";

  const generateText = async (question) => {
    const apiKey = "";
    const url = `https://api.openai.com/v1/engines/text-davinci-003/completions`;
    const requestBody = {
      prompt: question,
      temperature: 0.9,
      max_tokens: 1000,
    };

    if (SearchInput.value == "") {
      alert("Nothing to Search!!");
      Answer.style.display = "none";
    }
    SearchInput.value = "";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    const json = await response.json();
    const generatedText = json.choices[0].text;
    console.log(generateText);

    var string = `${generatedText}`;
    var str = string.split("");
    var el = document.getElementById("str");

    (function animate() {
      str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
      var running = setTimeout(animate, 30);
    })();
  };

  generateText(`${PromptGiven}`);
});

SearchButton2.addEventListener("click", function () {
  alert("Sit Tight while we are generating your Image");
  const PromptGiven2 = SearchInput2.value;
  async function generateImage(prompt) {
    const API_URL = "https://api.openai.com/v1/images/generations";
    const API_KEY = "";
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "image-alpha-001",
        prompt: prompt,
        num_images: 1,
      }),
    });
    const json = await response.json();
    console.log(json.data[0].url);
    RenderURl(json);
    console.log("rendering done");
  }

  // Example usage:
  generateImage(`${PromptGiven2}`)
    .then((url) => console.log(url))
    .catch((error) => console.error(error));

  SearchAgain2.style.display = "flex";
  SearchButton2.style.display = "none";
  SearchInput2.value = "";
});
