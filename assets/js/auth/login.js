// ajax request to login
$("#user-form").submit(function() {
    var username = $("#inputUsername").val()
    var password = $("#inputPassword").val()
    console.log('username and password', username, password)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://localhost:8080/api/login',
        data: JSON.stringify({username: username, password: password}),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d.token)
            localStorage.setItem('userToken', d.token)
            window.open("game.html", "_self")
        }
    })
})