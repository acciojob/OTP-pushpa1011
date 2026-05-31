const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    let value = e.target.value;

    // Only numbers allowed
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move forward
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {

      if (code.value === "" && index > 0) {
        codes[index - 1].focus();
      }

      code.value = "";
    }
  });

});