import * as chai from "chai";
const assert = chai.assert;
import {isPangram} from "./detectPangram.js"

chai.config.truncateThreshold=0;

describe("Tests", () => {
    it("test1", () => {
        var string = "The quick brown fox jumps over the lazy dog."
        assert.strictEqual(isPangram(string), true)
    })
    it("test2", () => {
        var string = "This is not a pangram."
        assert.strictEqual(isPangram(string), false)
    });
});