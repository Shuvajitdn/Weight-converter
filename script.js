document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weightForm");
    const input = document.getElementById("weight-input");
    const convertedWeight = document.getElementById("convertedWeight");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let kgValue = parseFloat(input.value);

        if (isNaN(kgValue) || kgValue <= 0) {
            convertedWeight.classList.add("error");
            convertedWeight.textContent = "Please enter a valid number!";
            
            setTimeout(() => {
                convertedWeight.textContent = "";
                convertedWeight.classList.remove("error");
            }, 2500);

            input.value = "";
        } else {
            let kgToPounds = (kgValue * 2.20462).toFixed(2);
            convertedWeight.classList.add("successful");
            convertedWeight.textContent = `${kgToPounds} lbs`;

            setTimeout(() => {
                convertedWeight.textContent = "";
                convertedWeight.classList.remove("successful");
                input.value = "";
            }, 20000);
        }
    });
});
