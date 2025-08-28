let formEle = document.querySelector("form"),
    formInputs = formEle.querySelectorAll("input"),
    id = 0,
    students = [],
    tbody = document.querySelector("tbody");

    

formEle.addEventListener("submit", function (e)  {
    e.preventDefault();

    

    let newStudent = getStudent(++id);


    students.push(newStudent);

    showStudent(newStudent);

    this.reset();

});

for ( let formInput of formInputs){
        checkInput(formInput);
    }