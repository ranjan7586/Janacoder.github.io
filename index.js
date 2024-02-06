const container = document.querySelector(".container");
const edit_optn = document.querySelector(".edit_optn");
const heading = document.querySelector(".heading h1");
const name = document.querySelector("#name");
const phone_number = document.querySelector("#phone_number");
const img = document.querySelector("#img");
const email = document.querySelector("#email");
const edit = document.querySelector("#edit");
const delete_field = document.querySelector("#delete");

let handleEditListener = null;  // To store the reference to the handleEdit function

edit.addEventListener('click', () => {
    console.log(heading);
    container.style.visibility = "hidden";
    heading.innerHTML = "Select which field you want to edit";
    edit_optn.style.display = 'block';
    
    // Remove the existing event listener before adding a new one
    if (handleEditListener) {
        edit_list.forEach(item => {
            item.removeEventListener('click', handleEditListener);
        });
    }
    
    handleEditListener = handleEdit();  // Store the reference to the new event listener
});

function handleEdit() {
    console.log("handleedit");
    
    const edit_list = document.querySelectorAll('.edit_optn p');
    console.log(edit_list);

    return function handleClick(e) {
        console.log(e.target);
        const targetItem = e.target.className;
        console.log("event enter");
        handleNewValue(e.target);
    };
}

function handleNewValue(targetItem) {
    console.log("enter");
    
    let prompt_value = null;
    prompt_value = prompt(`Please enter new ${targetItem.innerHTML}`);
    console.log(prompt_value);
    
    if (prompt_value) {
        if (targetItem.className == 'sel_name') {
            name.innerHTML = prompt_value;
        } else if (targetItem.className == 'sel_ph') {
            phone_number.innerHTML = prompt_value;
        } else if (targetItem.className == 'sel_email') {
            email.innerHTML = prompt_value;
        }
        alert("Successful");
        edit_optn.style.display = 'none';
        container.style.visibility = "visible";
    } else {
        edit_optn.style.display = 'none';
        container.style.visibility = "visible";
    }
}
