import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"



let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hiqweqwe', likesCount: 12},
                {id: 2, message: 'bye', likesCount: 0}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'qweeqwe'},
                {id: 2, name: 'fasdasd'},
                {id: 3, name: 'zxcvmqweqwvz'},
                {id: 4, name: 'qwvvk'}
            ],

            messagesData: [
                {id: 1, message: "hi"},
                {id: 2, message: "bye"},
                {id: 3, message: "my"}
            ],
            newMessageText: 'ццу'
        }

    },

    getState() {
        return this.State
    },

    callSubscriber() {
        console.log('State was changed')
    },


    subscribe (observer) {
        this.callSubscriber = observer
    },



    dispatch (action) {

        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
        this.callSubscriber(this.State)
    }



}















export default store;
