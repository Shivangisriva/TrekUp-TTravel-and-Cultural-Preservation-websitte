function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Add any form validation or logic here

    // Redirect after form is validated
    window.location.href = "index.html"; // Replace with your target page
});
