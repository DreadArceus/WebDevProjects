var array = prompt("Enter an array:").split(" ");
for (var i = 0; i < array.length; i++) {
  array[i] = parseInt(array[i]);
}

const body = document.querySelector("body");
const heading = document.createElement("h2");
heading.textContent = `${array.join(", ")}`;
body.insertBefore(heading, body.children[1]);
body.style.visibility = "visible";
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

swap = (array, x, y) => {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

quickSort = (array, start, end) => {
  if (start >= end) {
    return;
  }
  var pivot = Math.floor(Math.random() * (end - start + 1)) + start;
  const pivot_value = array[pivot];
  swap(array, pivot, end);
  pivot = end;
  var l = start,
    r = end - 1;
  while (true) {
    while (l < end && array[l] < pivot_value) {
      l++;
    }
    while (r >= start && array[r] >= pivot_value) {
      r--;
    }
    pivot = r + 1;
    if (l >= r) {
      break;
    }
    swap(array, l, r);
    pivot = r;
  }
  swap(array, pivot, end);
  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
  return array;
};

update_graph = (array) => {
  const maxNum = max_element(array);
  const bars = document.getElementsByClassName("bar");
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.height = `${(maxH * array[i]) / maxNum}px`;
  }
};

max_element = (array) => {
  var maxNum = 0;
  for (const x of array) {
    if (x > maxNum) {
      maxNum = x;
    }
  }
  return maxNum;
};

update_graph(array);

const start_btn = document.getElementById("start_btn");
start_btn.addEventListener("click", () => {
  array = quickSort(array, 0, array.length - 1);
  update_graph(array);
});
