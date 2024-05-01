const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "Clear") {
            display.value = "";
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            display.value += value; 
        }
    });
});
