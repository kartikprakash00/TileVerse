function startGame() {
    // let choose = document.createElement("div");
    // choose.id = "mode";
    window.location.href = './choose.html';
}

function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function reload() {
    window.location.reload();
}

function login() {
    window.location.href = '../public/login.html';
}

function showOverlay() {
    document.getElementById("instructionOverlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("instructionOverlay").style.display = "none";
}