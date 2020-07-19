function reloadContent(div, link) {
    var z = document.getElementById(div);
    z.setAttribute("w3-include-html", link);

    // Prevent automatic roll
    z.addEventListener("click", function(event){
        event.preventDefault()
    });
    z.removeEventListener("click", function(event){
        event.preventDefault()
    });

    // Refresh content in div
    includeHTML();
}
