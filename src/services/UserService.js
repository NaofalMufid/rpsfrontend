import http from "./http-common"

class UserDataService{
    getAllUsers() {
        return http.get('/players')
    }

    getOneUser(id){
        return http.get(`/player/${id}`)
    }
    
    searchUsers(keyword) {
        return http.get(`/searchplayer?keyword=${keyword}`)
    }
    
    createUser(data) {
        return http.post(`/register`, data)
    }

    updateUser(id, data) {
        return http.put(`/players/${id}`, data)
    }
}

export default new UserDataService()