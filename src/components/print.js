const jq = require("jquery");

jq(function(){
    console.log("---- ------");
});

export default function printMe() {
    console.log('I get called from print.js!');
    console.error('I get called from print.js!');
    console.info('I get called from print.js!');
}
