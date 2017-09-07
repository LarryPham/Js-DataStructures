/**
 * @function  header
 * @param     text        Text to be printed.
 * @description
 * Text wil be printed as a Header in Blocks along with trailing and leading line-break
 */
var header = function(text) {
  var length = text.length + 6;
  var counter;
  var headerBreak = "";
  
  for (counter = 1; counter <= length; counter++) {
    headerBreak += "=";
  }
  console.log("\n" + headerBreak);
  console.log("||" + text + " ||");
  console.log(headerBreak + "\n");
};

/**
 * @function      SubHeader
 * @param         text        Text to be printed.
 * @description
 * Text will be printed as a Sub-Header as Underlined, with trailing and leading line-break.
 */
var subHeader = function(text) {
  var length = text.length;
  var counter;
  var subHeaderBreak = "";
  
  for (counter = 1; counter < length; counter++) {
    subHeaderBreak += "-";
  }
  console.log("\n" + text);
  console.log(subHeaderBreak);
};
// Add all the functions to module.exports
module.exports.header       = header;
module.exports.subHeader    = subHeader;