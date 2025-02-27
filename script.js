const onScreen = document.getElementById("display");

function display(value) {
  onScreen.value += value;
}

function clearDisplay() {
  onScreen.value = "";
}

function calculate() {
  try {
    onScreen.value = eval(onScreen.value);
  } catch (error) {
    onScreen.value = "Error";
  }
}
