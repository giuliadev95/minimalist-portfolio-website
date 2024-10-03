// Protoype function to load templates, this app.js file will be pasted at the bottom of each page body that needs it
function loadTemplate(url, target) {
    fetch(`${url}?v=${new Date().getTime()}`)
        .then(response => response.text())
        .then(data => {
            document.querySelector(target).innerHTML = data;
        })
        .catch(error => console.error("Error loading template: ", error));
    }
// Actual functions to load the 3 single template files
loadTemplate("./templates/header.html", "#header");
loadTemplate("./templates/main.html", "#main");
loadTemplate("./templates/footer.html", "#footer");