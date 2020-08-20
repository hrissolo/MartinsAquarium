const tipCollection = [
     "Feed your fish daily", "Talk to your fish", "Give your fish gifts"
    
]

// this is new code. add this.
// export a function that will return a copy of the original array. 
// this uses the slice method to make the copy.

export const useTips = () => {
    return tipCollection.slice();
}