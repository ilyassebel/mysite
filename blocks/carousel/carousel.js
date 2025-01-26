import { createOptimizedPicture } from "../../scripts/aem.js";

export default function decorate(block) {
  const rows = [...block.children];
  const slides = [];

  rows.forEach((row, r) => {
    const isFirst = r === 0;
    const isLast = r === rows.length - 1;

    if (isFirst || isLast) {
      const btn = document.createElement("button");
      btn.classList.add("btn", isFirst ? "btn-next" : "btn-prev");
      btn.textContent = row.textContent;
      row.replaceWith(btn);
    } else {
      row.classList.add("slide");
      [...row.children].forEach((col, c) => {
        if (c === 0) {
          col.classList.add("slide-pic");
          const img = col.querySelector("picture > img");
          if (img) {
            img
              .closest("picture")
              .replaceWith(
                createOptimizedPicture(img.src, img.alt, false, [
                  { width: "750" },
                ])
              );
          }
        }
        if (c === 1) {
          col.classList.add("slide-text");
        }
      });
      slides.push(row);
    }
  });

  // Set each slide's transform property
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  const [nextSlide, prevSlide] = [
    document.querySelector(".btn-next"),
    document.querySelector(".btn-prev"),
  ];
  let curSlide = 0;
  const maxSlide = slides.length - 1;

  function updateSlides() {
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  }

  nextSlide.addEventListener("click", () => {
    curSlide = curSlide === maxSlide ? 0 : curSlide + 1;
    updateSlides();
  });

  prevSlide.addEventListener("click", () => {
    curSlide = curSlide === 0 ? maxSlide : curSlide - 1;
    updateSlides();
  });
}
