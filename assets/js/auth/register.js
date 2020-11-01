// ajax request to register user
$("#user-form").submit(function() {
    var username = $("#inputUsername").val()
    var password = $("#inputPassword").val()
    console.log('username and password', username, password)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://localhost:8080/api/register',
        data: JSON.stringify({username: username, password: password}),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d)
            window.open("login.html", "_self")
        }
    })
})