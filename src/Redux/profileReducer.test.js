import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";

let initialState = {

    posts: [
        {id: 1, message: 'hiqweqwe', likesCount: 12},
        {id: 2, message: 'bye', likesCount: 0}
    ],
    newPostText: '',
    profile: null,
    status: ""
}



test('check posts length', () => {
    // test data
    let action = addPostActionCreator("ie")

    // action
    let newState = profileReducer(initialState, action)


    // expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('ie')
});


test('check posts message', () => {
    // test data
    let action = addPostActionCreator("ie")

    // action
    let newState = profileReducer(initialState, action)


    // expectation
    expect(newState.posts[2].message).toBe('ie')
});

test('check posts delete', () => {
    // test data
    let action = deletePostActionCreator(1)

    // action
    let newState = profileReducer(initialState, action)


    // expectation
    expect(newState.posts.length).toBe(1)
});
