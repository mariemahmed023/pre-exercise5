function getStudent(currentid) {
    let Student = { id: currentid };

    formInputs.forEach((formInput) => {
        let inputName = formInput.name,
            inputValue = formInput.value;
        console.log(inputName, inputValue);
        Student[inputName] = inputValue;
    });

    return Student;
}

function showStudent(student) {
    tbody.innerHTML += `<tr data-student-id="${student.id}">
                                <th scope="row">${student.id}</th>
                                <td>${student.firstName}</td>
                                <td>${student.lastName}</td>
                                <td>${student.email}</td>
                                <td>${student.age}</td>
                                <td>${student.phone}</td>
                                <td>
                                    <button class="btn btn-info text-light me-2" onclick="setStudent(${student.id})">
                                        Edit
                                    </button>
                                    <button class="btn btn-danger text-light" onclick="deleteStudent(${student.id}, this)">
                                        Delete
                                    </button>
                                </td>
                            </tr>`
}

function checkInput(input) {
    let inputName = input.name,
        inputValue = input.value,
        inputAlert = input.parentElement.nextElementSibling,
        regex;

    if (inputName == "firstName" || inputName == "lastName") {
        regex = /^[A-Za-z]{3,}$/;
    }

    else if (inputName == "email") {
        regex = /^[A-Za-z]+[0-9_\-\.]*@(gmail|yahoo)\.(com|org)$/;
    }

    else if (inputName == "age") {
        regex = /^[1-9]{1}[0-9]?$/;
    }

    else if (inputName == "phone") {
        regex = /^(02)?01(0|1|2|5)[0-9]{8}$/;
    }

    if (inputValue == "") {
        inputAlert.textContent = "This Field is Required";
        inputAlert.classList.remove("d-none");
        input.setAttribute("data-valid", false);
    }

    else if (!regex.test(inputValue)) {
        inputAlert.textContent = "Invalid Field";
        inputAlert.classList.remove("d-none");
        input.setAttribute("data-valid", false);

    }

    else {
        inputAlert.classList.add("d-none");
        input.setAttribute("data-valid", true);
    }

}

function showAllStudents(currentStudents) {
    tbody.innerHTML = "";
    currentStudents.forEach((student) => {
        showStudent(student);
    });
}

function updateLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem("id", JSON.stringify(id));
}

function deleteStudent(studentId, that) {

    if (!confirm("Are You Sure")) {
        return 0;
    }

    students = students.filter((student) => { return student.id != studentId });

    updateLocalStorage();

    that.parentElement.parentElement.remove();
}

function setStudent(studentId) {

    resetForm();

    let student = students.filter((currentStudent) => { return currentStudent.id === studentId })[0];



    formInputs.forEach((formInput) => {
        formInput.value = student[formInput.name];
        formInput.dataset.valid = "true";
    });



    formEle.dataset.type = "edit";
    // formButton.querySelector("button").classList.replace("btn-success", "btn-info");
    // if (formButton && formButton.querySelector("button")) {
    //     formButton.querySelector("button").classList.replace("btn-success", "btn-info");
    // }

   // const btn = formButton.querySelector("button");
const btn = document.querySelector("button.btn-success");

    if (btn && btn.classList.contains("btn-success")){
        btn.classList.replace("btn-success", "btn-info");
    }



    formButton.textContent = "Edit";

    formEle.setAttribute("data-student-id", student.id)
}

function resetForm (){
    formEle.reset();
    formInputs.forEach(function (formInput){
        formInput.dataset.valid = "false";
        formInput.parentElement.nextElementSibling.classList.add("d-none");
    });
}

function addStudent(){
    formEle.querySelector("input:focus")?.blur();
        for (let formInput of formInputs) {
            if (formInput.dataset.valid === "false") {
                return 0;
            }
        }

        let newStudent = getStudent(++id);


        students.push(newStudent);

        updateLocalStorage();

        showStudent(newStudent);

        resetForm();
}

function editStudent(){
    formEle.querySelector("input:focus")?.blur();
        for (let formInput of formInputs) {
            if (formInput.dataset.valid === "false") {
                return 0;
            }
        }

        let idOfEditStudent = formEle.getAttribute("data-student-id");

        let updatedStudent = getStudent(idOfEditStudent);

        let indexOfEditStudent = students.findIndex((student) => {return student.id == idOfEditStudent;});

        students[indexOfEditStudent] = updatedStudent;

        updateLocalStorage();

        showAllStudents(students);

        resetForm();
    }
