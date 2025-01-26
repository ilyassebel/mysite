export default function decorate(block) {
  const rows = [...block.children];

  [...block.children].forEach((row, r) => {
    if (r % 2 === 0) {
      row.classList.add("tile-pic-group");

      [...row.children].forEach((col, c) => {
        if (c == 0) {
          col.classList.add("tile-pic");
        }

        if (c == 1) {
          col.classList.add("tile-topics");
          const node = document.createElement("div");
          const pElements = col.querySelectorAll("p");

          pElements.forEach((p, index) => {
            let text = p.textContent;

            if (text.includes(":")) {
              p.classList.add("topic");
            } else {
              p.classList.add("description");
            }
          });
        }
      });
    } else {
      row.classList.add("tile-abstract");
    }
  });
}
