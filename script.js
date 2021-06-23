const btn = document.querySelector("button");
const main = document.querySelector("main");
const input = document.querySelector("input");
const para = document.createElement("p");

function telephoneCheck(str) {
  const validPatterns = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ]
  return validPatterns.some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");
console.log(telephoneCheck("5555555555"));

telephoneCheck("555-555-5555");
// console.log(telephoneCheck("5555555555"));





function checkWord () {
  if (telephoneCheck(input.value) === true) {
  para.innerText = `Yes! :)`;
  }
  else {para.innerText = `No :(`}
  main.appendChild(para);
}
