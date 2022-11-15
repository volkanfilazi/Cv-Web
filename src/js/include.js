function includeHTML() {
    let z, i, elmnt, file, address, xhttp;
    z = document.getElementsByTagName("component");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("is");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    elmnt.removeAttribute("is");
                    includeHTML();
                }
            }
            xhttp.open("GET", '/src/components/' + file, true);
            xhttp.send();
            return;
        }
    }
}

const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    document.documentElement.classList.add(currentTheme)
}