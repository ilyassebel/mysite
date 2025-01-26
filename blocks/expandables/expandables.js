export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add("expandable-item");

    // Add expand indicator (like a downward arrow) to the row
    const expandIndicator = document.createElement("span");
    expandIndicator.classList.add("expand-indicator");
    expandIndicator.textContent = "▼"; // Or use an icon if preferred
    row.append(expandIndicator);

    row.addEventListener("click", () => {
      const textDiv = row.querySelector(".description");
      textDiv.classList.toggle("open");

      // Optionally, toggle the arrow direction to indicate the action
      expandIndicator.textContent = textDiv.classList.contains("open")
        ? "▲"
        : "▼";
    });

    [...row.children].forEach((col, c) => {
      if (c === 0) {
        col.classList.add("expand-pic");
      } else if (c === 1) {
        col.classList.add("expand-text");

        const pElements = col.querySelectorAll("p");
        const classNames = ["title", "description"];

        pElements.forEach((p, index) => {
          p.classList.add(classNames[index]);
        });
      }
    });
  });
}
