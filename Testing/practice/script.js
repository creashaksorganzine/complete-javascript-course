/* accept url input in text box with submit button that feeds into var xhr = new XMLHttpRequest(); */
var url = document.createElement("input");
url.type = "text";
url.id = "url";
url.placeholder = "Enter URL";
document.body.appendChild(url);
var submit = document.createElement("input");
submit.type = "submit";
submit.id = "submit";
submit.value = "Submit";
document.body.appendChild(submit);
var xhr = new XMLHttpRequest();
submit.addEventListener("click", function () {
  xhr.open("GET", url.value, true);
  xhr.send();
});
/* xhr.open("GET", "http://www.google.com", true); */
/* xhr.onreadystatechange = function () { */
xhr.onreadystatechange = function () {
  /* if (xhr.readyState == 4) { */
  if (xhr.readyState == 4) {
    /* var html = xhr.responseText; */
    var html = xhr.responseText;
    /* } */
  }
  /* }; */
};
/* xhr.send(); */
