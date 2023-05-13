const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const itemList = document.getElementById("itemList");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  performSearch();
});

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  performSearch();
});

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (query === "") {
    alert("Please enter a search query");
    return;
  }

  const items = itemList.getElementsByTagName("section");
  let foundItem = null;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemText = item.textContent.trim().toLowerCase();
    if (itemText.includes(query)) {
      foundItem = item;
      break;
    }
  }

  if (foundItem) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.remove("highlight");
      item.style.boxShadow = "";
    }

    const scrollMargin = -30;
    const scrollPosition =
      foundItem.getBoundingClientRect().top + window.pageYOffset + scrollMargin;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    foundItem.classList.add("highlight");
  } else {
    alert(`Sorry, we couldn't find any items that match your search query`);
  }
}
