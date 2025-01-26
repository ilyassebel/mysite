export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add("showcase-header");
    } else {
      row.classList.add("showcase-item");

      [...row.children].forEach((col, c) => {
        if (c === 0) {
          col.classList.add("showcase-title");
        } else if (c === 1) {
          col.classList.add("showcase-text");

          const pElements = col.querySelectorAll("p");
          pElements.forEach((p) => {
            const text = p.textContent;
            p.classList.add(text.includes(":") ? "subtitle" : "description");
          });
        }
      });
    }
  });
}
