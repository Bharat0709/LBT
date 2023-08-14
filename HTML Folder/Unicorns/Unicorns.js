const Unicorns = [{}];
const container = document.querySelector("#Unicorns-Section");

Unicorns.forEach((link) => {
  const html = `
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
  container.insertAdjacentHTML("beforeend", html);
});
