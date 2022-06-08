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
