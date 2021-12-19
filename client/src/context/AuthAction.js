export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload:user
})

export const LoginSuccess = (error) => ({
    type: "LOGIN_FAILURE",
    Payload:error
})

export const Follow = (UserId) => ({
    type: "FOLLOW",
    Payload:UserId
})

export const UnFollow = (UserId) => ({
    type: "UNFOLLOW",
    Payload:UserId
})
