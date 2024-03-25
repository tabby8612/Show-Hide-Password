const passFld = document.getElementById("password");
const eyeIcn = document.getElementById("eyeicon");


eyeIcn.addEventListener("click", (e) => {

    if (passFld.type === "password") {

        passFld.type = "text";
        eyeIcn.src = "eye-open.png";

    } else if (passFld.type === "text") {

        passFld.type = "password";
        eyeIcn.src = "eye-close.png";

    }
})