const email = document.querySelector(".email1")
const error = document.querySelector(".error")
const email2 = document.querySelector(".email2")
const error2 = document.querySelector(".error2")

const validate = (input, err) => {
    if (input.value === "") {
        err.style.display = "none";
        input.style.border = "1px solid #07043B";
    }
    else if (!input.value.includes("@") || !input.value.includes(".")) {
        err.style.display = "block";
        input.style.border = "1px solid #EF4877";
    }
    else {
        err.style.display = "none";
        input.style.border = "1px solid #07043B";
    }
}

email.addEventListener("input", () => {
    validate(email, error);
});

email2.addEventListener("input", () => {
    validate(email2, error2);
});