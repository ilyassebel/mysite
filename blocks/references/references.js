export default function decorate(block) {
  const classNames = ["year", "title", "authors", "conference", "link"];

  [...block.children].forEach((row) => {
    row.classList.add("reference-container");

    [...row.children].forEach((col) => {
      col.classList.add("reference-item");

      const pElements = col.querySelectorAll("p");
      pElements.forEach((p, index) => {
        if (index < classNames.length) {
          p.classList.add(classNames[index]);
        }
      });
    });
  });
}
