const Portfolio = [{}];
const container = document.querySelector("#Portfolio-Section");

Companies.forEach((link) => {
  const html = `
  <section class="Resources-list" >
      <div class="Listitem">
        <div class="Source">
          <a
            href="${link.url}"
            class="linked"
            ><img src="../../Images/URL.png" alt="" class="link"
          /></a>
          <p class="Discript">${link.description}</p>
          <p class="free-paid" id="free">Free</p>
        </div>
        <div class="Discription-of-list">
          <p class="credits">${link.credits}</p>
        </div>
      </div>
      </section>
  `;
  container.insertAdjacentHTML("beforeend", html);
});
