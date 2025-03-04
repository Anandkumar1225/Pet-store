document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    console.log(
      "Signing up with new username:",
      newUsername,
      "and password:",
      newPassword
    );
  });
