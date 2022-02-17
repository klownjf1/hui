import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {
            'API-KEY': '042614c5-759a-4e8d-950e-8e989a1338dc'
        }
})

export const usersAPI =
    {
        getUsers: (currentPage = 1, pageSize = 10) => {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            })
        },

        /*getUserProfile: (userId) => {
            console.warn('use profileAPI')
            return profileAPI.getUserProfile(userId)

        },*/


        deleteFollowUser: (id) => {
            return instance.delete(`follow/${id}`).then(response => {
                return response.data
            })
        },

        postFollowUser: (id) => {
            return instance.post(`follow/${id}`, null).then(response => {
                return response.data
            })
        },

    }

export const profileAPI =
    {
        getUserProfile: (userId) => {
            return instance.get(`profile/` + userId)
        },
        getStatus: (userId) => {
            return instance.get(`profile/status/` + userId)
        },
        updateStatus: (status) => {
            return instance.put(`profile/status` , {status: status})
        }



    }

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }


}






