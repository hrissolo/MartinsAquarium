
import { useTips } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tiplist")
    const allTheTips = useTips()

    let tipHTMLRepresentation = "";
    for (const tip of allTheTips) {
        tipHTMLRepresentation += Tip(tip);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            ${tipHTMLRepresentation}
    `
}