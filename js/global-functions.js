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
    tbody.innerHTML += `<tr>
                                <th scope="row">${student.id}</th>
                                <td>${student.firstName}</td>
                                <td>${student.lastName}</td>
                                <td>${student.email}</td>
                                <td>${student.age}</td>
                                <td>${student.phone}</td>
                                <td>
                                    <button class="btn btn-info text-light me-2">
                                        Edit
                                    </button>
                                    <button class="btn btn-danger text-light">
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

    if (inputName == "firstName" ||inputName == "lastName") {
        regex = /^[A-Za-z]{3,}$/;
    }

    else if ( inputName == "email"){
        regex = /^[A-Za-z]+[0-9_\-\.]*@(gmail|yahoo)\.(com|org)$/;
    }

    else if (inputName == "age"){
        regex = /^[1 - 9]{1}[0-9]?$/;
    }

    else if (inputName == "phone"){
        regex = /^(02)?01(0|1|2|5)[0-9]{8}$/;
    }

    if (inputValue == "") {
        inputAlert.textContent = "This Field is Required";
    }

    else if (!regex.test(inputValue)) {
        inputAlert.textContent = "Invalid Field";
        inputAlert.classList.remove("d-none");
    }

    else {
        inputAlert.classList.add("d-none");
    }

}