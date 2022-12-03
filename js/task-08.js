const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(email.value, password.value);
  e.currentTarget.reset();
});

