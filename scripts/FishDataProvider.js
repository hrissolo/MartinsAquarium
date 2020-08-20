const fishCollection = [
    {
        givenName: "Bart",
        species: "male beta",
        size: "2 inches", 
        diet: "crustaceans",
        harvestLocation: "beaches",
        image: "fish1.jpg",
    } , 
    {
        givenName: "Sparky",
        species: "female beta",
        size: "1.5 inches", 
        diet: "crustaceans",
        harvestLocation: "rainforest",
        image: "fish1.jpg"
    } ,
    {
		givenName: "Bart",
		size: "5 inches",
		diet: "crustaceans",
		species: "Clownfish",
        harvestLocation: "Petco",
        image: "fish1.jpg"
	},
	{
		givenName: "Big Mac",
		size: "6 feet",
		diet: "jellyfish",
		species: "Giant sunfish",
        harvestLocation: "Sam's Club Reef",
        image: "fish1.jpg"
	},
	{
		givenName: "Squigle",
		size: "2 feet",
		diet: "smaller fish",
		species: "Moray Eel",
        harvestLocation: "Ole Dan's boat wreck",
        image: "fish1.jpg"
	},
	{
		givenName: "Hammy",
		size: "4 feet",
		diet: "just about everything",
		species: "Groupers",
        harvestLocation: "Jimmy's big boi fishin' spot",
        image: "fish1.jpg"
	},
	{
		givenName: "Tiny",
		size: "1 inch",
		diet: "plankton",
		species: "Blue Chromis",
        harvestLocation: "Young Dan's boat wreck",
        image: "fish1.jpg"
	}
]

// this is new code. add this.
// export a function that will return a copy of the original array. 
// this uses the slice method to make the copy.

export const useFish = () => {
    return fishCollection.slice();
}