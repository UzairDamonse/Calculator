let sum = "";
function getSum(char) {
  sum += char;
  document.getElementById(`Output`).innerHTML = sum;
}
function answer() {
  sum = eval(sum);
  document.getElementById(`Output`).innerHTML = sum;
}
function Reset() {
  document.getElementById(`Output`).innerHTML = "0";
  sum = "";
}

// text color changers
function red() {
  document.getElementById(`Output`).style.color = "rgb(188, 12, 12)";
}
function green() {
  document.getElementById(`Output`).style.color = "rgb(61, 210, 28)";
}
function blue() {
  document.getElementById(`Output`).style.color = "rgba(92, 92, 208, 0.662)";
}
