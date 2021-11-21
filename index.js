const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", (el) => {
    inputStyleVar = el.target.dataset.stylevar;
    inputPrefix = el.target.dataset.prefix || "";
    inputValue = el.target.value;
    document.documentElement.style.setProperty(
      inputStyleVar,
      inputValue + inputPrefix
    );
  });
});
