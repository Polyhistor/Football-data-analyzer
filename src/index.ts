import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// create an object that satisfies data reader interface
const csvFileReader = new CSVFileReader("football.csv");

// create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
