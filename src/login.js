import _ from 'lodash';
import "bulma/css/bulma.min.css";
import './css/index.css';
import printMe from "./components/print.js";
const jq = require("jquery");

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'this is ' ,'webpack'], ' ');
  element.classList.add("hello");
  element.classList.add("item");
  element.onclick = printMe;

  return element;
}


jq(function(){
    document.body.appendChild(component());
});
