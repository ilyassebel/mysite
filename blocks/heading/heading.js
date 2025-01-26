export default function decorate(block) {
  const classNames = ["title", "subtitle", "description"];

  [...block.children].forEach((row, r) => {
    row.classList.add(classNames[r]);
  });
}
