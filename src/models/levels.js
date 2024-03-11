import levelFourth from "./levelFourth";
import levelThird from "./levelThird";
import levelTwo from "./levelTwo";

const levels = {
    [levelTwo.level]: levelTwo,
    [levelThird.level]: levelThird,
    [levelFourth.level]: levelFourth,
}

/** 
 * Represents models for different levels of the game
 */
export default levels;