let formEle = document.querySelector("form"),
    formInputs = formEle.querySelectorAll("input"),
    id = 0,
    students = [],
    tbody = document.querySelector("tbody"),
    validInputs = [],
    formButton = formEle.querySelector("button");

    (function (){
        if (localStorage.getItem("students") == null){
        localStorage.setItem("students" , JSON.stringify(students));
    }

    else {
        students = JSON.parse(localStorage.getItem("students"));
    }

    if (localStorage.getItem("id") == null){
        localStorage.setItem("id" , id);
    }

    else {
        id = +(localStorage.getItem("id"));
    }
    showAllStudents(students);
    })();

    


formEle.addEventListener("submit", function (e)  {
    e.preventDefault();

    if (formEle.dataset.type == "add"){
        formEle.querySelector("input:focus").blur();
    for ( let formInput of formInputs){
        if (formInput.dataset.valid === "false"){
            return 0;
        }
    }

    let newStudent = getStudent(++id);


    students.push(newStudent);

    updateLocalStorage();

    showStudent(newStudent);

    this.reset();
    }

    else if (formEle.dataset.type = "edit"){
        
    }

});

for ( let formInput of formInputs){
        formInput.addEventListener("blur",function(){
            checkInput(formInput);
        });
    }

