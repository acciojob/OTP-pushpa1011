//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// Focus first input on load
codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input
    if (value && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (!code.value && index > 0) {
        codes[index - 1].focus();
      }
      code.value = "";
    }
  });
});