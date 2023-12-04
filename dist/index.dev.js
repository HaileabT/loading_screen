"use strict";

for (var i = 1; i < 9; ++i) {
  document.querySelector(".one".concat(i)).style.borderColor = "rgb(".concat(275 - i * 30, ", ").concat(45 + i * 1.5, ", ").concat(-10 + i * 35, ")");
  document.querySelector(".one".concat(i)).style.outlineColor = "rgb(".concat(315 - i * 30, ", ").concat(55 + i * 1.5, ", ").concat(10 + i * 35, ")");
  document.querySelector(".one".concat(i)).style.width = "".concat(25 * i, "px");
  document.querySelector(".one".concat(i)).style.height = "".concat(25 * i, "px");
  document.querySelector(".one".concat(i)).style.zIndex = "".concat(100 + 10 * i);
  document.querySelector(".one".concat(i)).style.animation = "anim 2s ".concat(0.1 * i, "s cubic-bezier(0.69, 0.07, 0.29, 0.95) infinite");
  document.querySelector(".one".concat(i)).style.filter = "blur(".concat(-0.2 + 0.2 * i, "px)");
}