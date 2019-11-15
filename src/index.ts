import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";

// create an object that satisfies data reader interface
const csvFileReader = new CSVFileReader("football.csv");

// create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
