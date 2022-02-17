const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    
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

  
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type){
        case ADD_MESSAGE: {

            let body = action.newMessageText

            return {
                ...state,
                messagesData: [...state.messagesData, {id: 8, message: body}]

            }
        }
        /*case UPDATE_NEW_MESSAGE_TEXT: {

            return {
                ...state,
                newMessageText: action.newBody
            }
        }*/
        default: {
            return state
        }
    }   


}
export const addMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}

/*export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newBody: text
    }
}*/


   
export default dialogsReducer