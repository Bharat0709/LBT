const SemesterFilter = document.querySelector("#semester-filter");
const courses = document.querySelectorAll(".ChooseTopic");
const visitButtons = document.querySelectorAll(".Visit_Button");

SemesterFilter.addEventListener("change", () => {
  const selectedOption = SemesterFilter.value;
  courses.forEach((courses) => {
    if (selectedOption === "All") {
      courses.style.display = "flex";
    } else if (selectedOption === "Semester 2") {
      if (courses.querySelector(".Topic").id === "sem2") {
        courses.style.display = "flex";
      } else {
        courses.style.display = "none";
      }
    } else if (selectedOption === "Semester 4") {
      if (courses.querySelector(".Topic").id === "sem4") {
        courses.style.display = "flex";
      } else {
        courses.style.display = "none";
      }
    } else if (selectedOption === "Semester 6") {
      if (courses.querySelector(".Topic").id === "sem6") {
        courses.style.display = "flex";
      } else {
        courses.style.display = "none";
      }
    } else {
      courses.style.display = "none";
    }
  });
});
visitButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Use Code LBT35 To get 35% off on all courses");
  });
});
