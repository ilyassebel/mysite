import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

/**
 * loads and decorates the masthead
 * @param {Element} block The masthead block element
 */
export default async function decorate(block) {
  // load masthead as fragment
  const mastheadMeta = getMetadata("masthead");
  const mastheadPath = mastheadMeta
    ? new URL(mastheadMeta, window.location).pathname
    : "/masthead";
  const fragment = await loadFragment(mastheadPath);

  // decorate masthead DOM
  block.textContent = "";
  const masthead = document.createElement("div");
  while (fragment.firstElementChild)
    masthead.append(fragment.firstElementChild);

  const elements = [...masthead.firstElementChild.firstElementChild.children];
  console.log(elements);
  masthead.firstElementChild.firstElementChild.className = "contentMe";

  [...masthead.firstElementChild.firstElementChild.children].forEach(
    (element, r) => {
      if (r == 0) {
        element.className = "imageMe";
      } else if (r == 1) {
        element.className = "titleMe";
      } else if (r == 2) {
        element.className = "subtitleMe";
      }
    }
  );

  block.append(masthead);
}
