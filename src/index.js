import numeral from "numeral";
import "./index.css";

const value = numeral(1000).format("$0,0.00");
console.log(`Testing an log for numeral with: ${value}`);
