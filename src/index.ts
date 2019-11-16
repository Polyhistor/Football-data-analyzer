import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = MatchReader.fromCSV("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
