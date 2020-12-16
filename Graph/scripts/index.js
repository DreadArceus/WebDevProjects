const array = [10, 11, 1, 5, 20, 15, 13, 9];
var maxNum = 0;
for (const x of array) {
  if (x > maxNum) {
    maxNum = x;
  }
}

const body = document.querySelector("body");
const heading = document.createElement("h1");
heading.textContent = `${array.join(", ")}`;
body.append(heading);
delete heading;
delete body;

const graph = document.querySelector(".graph");
const maxH = 490;
for (var i = 0; i < array.length; i++) {
  const bar_cont = document.createElement("div");
  bar_cont.className = "bar-container";
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.maxHeight = `${maxH}px`;
  bar_cont.append(bar);
  graph.append(bar_cont);
}
delete graph;

const bars = document.getElementsByClassName("bar");
for (var i = 0; i < bars.length; i++) {
  bars[i].style.height = `${(maxH * array[i]) / maxNum}px`;
}
