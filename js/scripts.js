  function runningCount1() {
    const l1 = document.getElementById("l1").value;
    const c1 = document.getElementById("c1").value;
    const runningCount1 = 0;
    if (l1 === true) {
      runningCount1 = -1;
    } else if (c1 === true) {
      runningCount1 = 1;
    } else {
      runningCount1 = 0;
    }
    return runningCount1;
    }

  function runningCount2() {
    const l2 = document.getElementById("l2").value;
    const c2 = document.getElementById("c2").value;
    const runningCount2 = 0;
    if (l2 === true) {
      runningCount1 = -1;
    } else if (c2 === true) {
      runningCount2 = 1;
    } else {
      runningCount2 = 0;
    }
    return runningCount2;
    }
    
  function runningCount3() {
    const l3 = document.getElementById("l3").value;
    const c3 = document.getElementById("c3").value;
    const runningCount3 = 0;
    if (l3 === true) {
      runningCount3 = -1;
    } else if (c3 === true) {
      runningCount3 = 1;
    } else {
      runningCount3 = 0;
    }
    return runningCount3;
    }

function yourParty() {
  const count1 = runningCount1();
  const count2 = runningCount2();
  const count3 = runningCount3();
  const l = document.querySelector("div#l");
  const m = document.querySelector("div#m");
  const c = document.querySelector("div#c");
  const trueRunningCount = count1 + count2 + count3;
  if (trueRunningCount === 0) {
    m.removeAttribute("class");
  } else if (trueRunningCount < 0) {
    l.removeAttribute("class");
  } else {
    c.removeAttribute("class");
  }
}

window.onload = function() {
  const form = document.querySelectorAll("form#f");
  form.onsubmit = function(event) {
    event.preventDefault();
    yourParty();
  }
}
const l = document.querySelector("div#l");
const m = document.querySelector("div#m");
const c = document.querySelector("div#c");

const l1 = document.getElementById("l1").value;
const l2 = document.getElementById("l2").value;
const l3 = document.getElementById("l3").value;

const c1 = document.getElementById("c1").value;
const c2 = document.getElementById("c2").value;
const c3 = document.getElementById("c3").value;

const m1 = document.getElementById("m1").value;
const m2 = document.getElementById("m2").value;
const m3 = document.getElementById("m3").value;

function xx() {
  const runningCount = 0;
  if (l1 && l2 && l3 === true) {
    l.removeAttribute("class");
  } else if (c1 && c2 && c3 === true) {
    c.removeAttribute("class");
  } else if (m1 && m2 && m3 === true) {
    m.removeAttribute("class");
  } else if (l1 && l2 === true || l2 && l3 === true || l1 && l3 === true) {
    l.removeAttribute("class");
  } else if (c1 && c2 === true || c2 && c3 === true || c1 && c3 === true) {
    c.removeAttribute("class");
  } else if (m1 && m2 === true || m2 && m3 === true || m1 && m3 === true) {
    c.removeAttribute("class");
  }
}