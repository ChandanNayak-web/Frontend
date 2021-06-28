function checkAuth() {
    if (localStorage.getItem("uid") == null) {
        console.log("No USER")
        window.location.href = "./login.html"
    }
}

function logout() {
    localStorage.removeItem("uid");
}