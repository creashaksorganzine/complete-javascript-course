"use strict";

document.querySelector("input").addEventListener("input", function () {
  document.querySelector("output").textContent = this.value;
});
