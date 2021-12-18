import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    user: {
        "_id": "61b6d658a6239d83110e7c7d",
        "username": "balaja",
        "email": "balaja@gmail.com",
        "profilePicture": "",
        "coverPicture": "",
        "followers": [
            "61b6d663a6239d83110e7c7f"
        ],
        "followings": [
            "61b6d663a6239d83110e7c7f",
            "61b6c290686c299ec74b9cc3"
        ],
        "isAdmin": false,
        "createdAt": "2021-12-13T05:12:56.529Z",
        "__v": 0,
        "city": "New York",
        "desc": "Hey Friends!",
        "from": "Madrid"
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>

            {children}
        </AuthContext.Provider>
    )
}