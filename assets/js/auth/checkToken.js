// get info from token jwt, and verify it's a jwt token or not, if not access will b denied
function parseJwt (token) {
    try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch {
        // error which means it's not a jwt token
        window.open("../login.html", "_self");
        return false;
    }
}

// function to check token
if (localStorage.getItem('userToken') === null) {
    window.open("../login.html", "_self");
} else {
    const decoded = parseJwt(localStorage.getItem('userToken'));
    const currentTimestamp = Math.floor(Date.now()/1000);
    if (decoded.exp < currentTimestamp) {
        window.open("../login.html", "_self")
    }
}