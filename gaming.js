function toggleIP() {
    var ipElement = document.getElementById("teamspeak-ip");
    var linkElement = document.getElementById("toggle-link");

    // Wenn die IP aktuell angezeigt wird, verstecke sie mit der DropUp-Animation
    if (ipElement.style.maxHeight) {
        ipElement.style.maxHeight = null; // Verstecke das IP-Element
        linkElement.textContent = "Klicke hier, um die Teamspeak-IP anzuzeigen";
    } else {
        // Andernfalls zeige die IP mit der Dropdown-Animation
        ipElement.style.maxHeight = ipElement.scrollHeight + "px"; // Scrollhöhe des Elements, um es vollständig anzuzeigen
        linkElement.textContent = "Klicke hier, um die IP wieder zu verstecken";
    }
}

