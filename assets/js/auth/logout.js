// a function to log out
$("#logout").click(function() {
    localStorage.clear('userToken')
    window.open("login.html", "_self")
})