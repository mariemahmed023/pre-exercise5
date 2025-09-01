let formEle = document.querySelector("form"),
    formInputs = formEle.querySelectorAll("input"),
    id = 0,
    students = [],
    tbody = document.querySelector("tbody"),
    validInputs = [],
    formButton = formEle.querySelector("button");

(function () {
    if (localStorage.getItem("students") == null) {
        localStorage.setItem("students", JSON.stringify(students));
    }

    else {
        students = JSON.parse(localStorage.getItem("students"));
    }

    if (localStorage.getItem("id") == null) {
        localStorage.setItem("id", id);
    }

    else {
        id = +(localStorage.getItem("id"));
    }
    showAllStudents(students);
})();




formEle.addEventListener("submit", function (e) {
    e.preventDefault();

    if (formEle.dataset.type == "add") {

        addStudent();

    }

    else if (formEle.dataset.type == "edit") {
        editStudent();
    }

});

for (let formInput of formInputs) {
    formInput.addEventListener("blur", function () {
        checkInput(formInput);
    });
}

