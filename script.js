const codes = document.querySelectorAll(".code");


window.onload = () => {
  document.getElementById("code-1").focus();
};

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    const value = e.target.value;

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
      } else {
        code.value = "";
      }
    }

  });

});