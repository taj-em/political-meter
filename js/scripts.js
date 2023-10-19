function runningCount() {
  
  const l = document.getElementById("l");
  const m = document.getElementById("m");
  const c = document.getElementById("c");
  const error = document.getElementById("error");

  const l1 = document.getElementById("l1").parseInt().value;
  const l2 = document.getElementById("l2").parseInt().value;
  const l3 = document.getElementById("l3").parseInt().value;

  const c1 = document.getElementById("c1").parseInt().value;
  const c2 = document.getElementById("c2").parseInt().value;
  const c3 = document.getElementById("c3").parseInt().value;

  const m1 = document.getElementById("m1").parseInt().value;
  const m2 = document.getElementById("m2").parseInt().value;
  const m3 = document.getElementById("m3").parseInt().value;

  const runningCount = 0;
  if (l1 === true || l2 === true || l3 === true) {
    runningCount -= 1
  } else if (c1 === true || c2 === true || c3 === true) {
    runningCount += 1
  } else if (m1 === true || m2 === true || m3 === true) {
    runningCount = runningCount;
  }
  return runningCount;
  }

runningCount();
function countCheck() {
  if (runningCount >= -3 && runningCount < 0) {
    l.removeAttribute("class");
  } else if (runningCount <= 3 && runningCount > 0) {
    c.removeAttribute("class");
  } else if (runningCount === 0) {
    m.removeAttribute("class");
  }
}



window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
  }
  runningCount();
  countCheck();
}




// else if (l1 === true && l2 === true || l2 === true && l3 === true || l1 === true && l3 === true) {
//   l.removeAttribute("class");
// } else if (c1 === true && c2 === true || c2 === true && c3 === true || c1 === true && c3 === true) {
//   c.removeAttribute("class");
// } else if (m1 === true && m2 === true || m2 === true && m3 === true || m1 === true && m3 === true) {
//   m.removeAttribute("class");
// } else if (l1 === true && m2 === true && c3 === true || l2 === true && m1 === true && c3 === true || l2 === true && m3 === true && c1 === true || l3 === true && m2 === true && c1 === true) {
//   m.removeAttribute("class");
// } else {
//   error.removeAttribute("class");
// }
