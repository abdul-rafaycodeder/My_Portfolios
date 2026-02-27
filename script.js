const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        document.body.style.background = "#ffffff";
        document.body.style.color = "#111";
    } else {
        document.body.style.background = "#1b002b";
        document.body.style.color = "#fff";
    }
});