let isLightOn = false;

const bulb = document.querySelector("#bulb");
const toggleButton = document.querySelector("#toggleButton");
const statusText = document.querySelector("#status");

function toggleLight() {

    isLightOn = !isLightOn;

    if (isLightOn) {

        bulb.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        bulb.alt = "Light bulb on";
        toggleButton.textContent = "Turn off";
        statusText.textContent = "The light is on.";
        document.body.classList.add("light-on");
        toggleButton.classList.add("light-on");

    } else {

        bulb.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        bulb.alt = "Light bulb off";
        toggleButton.textContent = "Turn on";
        statusText.textContent = "The light is off.";
        document.body.classList.remove("light-on");
        toggleButton.classList.remove("light-on");

    }
}

toggleButton.addEventListener("click", toggleLight);