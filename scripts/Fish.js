export const Fish = (fishObj) => {
    return `
    <div class="fish-card">
    <div class="card-image">
        <img class="fish-image" src="images/${fishObj.image}" alt="${fishObj.species}">
        </div>
        <ul>
            <li>Given Name: ${fishObj.givenName}</li>
            <li>Species: ${fishObj.species}</li>
            <li>Length: ${fishObj.size}</li>
            <li>Diet: ${fishObj.diet}</li>
            <li>Harvest Location: ${fishObj.harvestLocation}</li>
        </ul></div>
    `
}
