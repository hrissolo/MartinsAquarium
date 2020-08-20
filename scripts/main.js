import { useFish } from './FishDataProvider.js';
import { useTips } from './tips/TipDataProvider.js'

// Import the FishList here
import { FishList } from './FishList.js'
import { TipList } from './tips/TipList.js';

const allTheFish = useFish();
console.log("all the fish", allTheFish); 

const allTheTips = useTips();
console.log("all the tips", allTheTips)


FishList();
TipList();
