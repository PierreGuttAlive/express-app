
var actualForm = document.getElementsByClassName("form")[0];
var submit = document.getElementsByClassName("form-submit")[0];
var body = document.getElementsByTagName("body");
var wrapper = document.getElementsByClassName("wrapper")[0];
var coments = document.getElementsByClassName("coments")[0];

document.addEventListener("DOMContentLoaded", checkComents);

function checkComents() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/blog/uploadcoments", true);
    xhr.send();
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            var data = xhr.response;
            var db = JSON.parse(data);
            
            for (var coment in db) {
                var newLine = document.createElement("div");
                newLine.innerHTML = db[coment].message;
                newLine.className = "newLine";
                wrapper.appendChild(newLine);
                 if (!coments.firstChild) {
                coments.appendChild(newLine);
                } else {
                    coments.insertBefore(newLine, coments.firstChild);
                };
                                
            };
        };
    };

    
};

submit.onclick = () => {
    addReq(actualForm);
};

function addReq(form) {

    var input = form.input.value;
    if (input == ""){
        alert("Ты ничего не ввел >:c");
        return false;
    };

    var preDate = new Date();
    var date = preDate.getHours()+":"+preDate.getMinutes()+" "+preDate.getDate()+"."+preDate.getMonth() + 1+"."+preDate.getFullYear();
    
    var request = {
        message: input,
        time: date
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/blog/addcoment", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(request));

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            var newLine = document.createElement("div");
            newLine.innerHTML = input;
            newLine.className = "newLine";
            if (!coments.firstChild) {
                coments.appendChild(newLine);
            } else {
                coments.insertBefore(newLine, coments.firstChild);
            };
            
            form.input.value = '';
        };
    };

    
};



