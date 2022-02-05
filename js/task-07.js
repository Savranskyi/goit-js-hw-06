const inputControlEl = document.querySelector("#font-size-control");
const spanFontSizeEl = document.querySelector("#text");

inputControlEl.addEventListener(
  "input",
  (event) => (spanFontSizeEl.style.fontSize = `${event.currentTarget.value}px`)
);

inputControlEl.addEventListener(
  "input",
  (fontColor) =>
    (spanFontSizeEl.style.color = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`)
);
