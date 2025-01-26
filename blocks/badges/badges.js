export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add("badge-item");

    [...row.children].forEach((col, c) => {
      if (c === 0) {
        col.classList.add("badge-title");
      } else if (c === 1) {
        col.classList.add("badge-text");

        const node = document.createElement("div");
        const pElements = col.querySelectorAll("p");

        const ul = document.createElement("ul");
        ul.classList.add("description");

        pElements.forEach((p, index) => {
          if (index === 0) {
            p.classList.add("icon");
            node.append(p);
          } else {
            const li = document.createElement("li");
            li.append(p);
            ul.append(li);
          }
        });

        node.append(ul);
        col.replaceWith(node);
      }
    });
  });
}
