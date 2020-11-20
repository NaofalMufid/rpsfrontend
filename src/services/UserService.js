export async function getAllUsers() {
    const response = await fetch('/api/v1/players')
    return await response.json()
}

export async function fetchSearchUsers(keyword) {
    const response = await fetch(`/api/v1/players?username=${keyword}`)
    return await response.json()
}

export async function createUser(data) {
    const response = await fetch(`/api/v1/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json()
}