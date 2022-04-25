export const getUserInfos = (email, firstName, lastName, id) => ({
    type: 'getUserInfos',
    payload: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        id: id,
    }
})

export const logout = () => ({
    type: 'logout'
})

export const clearStorage = () => ({
    type: 'clearStorage'
})

export const getStatus = (status) => ({
    type: 'getStatus',
    payload : status
})

export const getToken = (payload) => ({
    type: 'getToken',
    payload
})

export const editName = (firstName, lastName) => ({
    type: 'editName',
    payload: {
        firstName,
        lastName
    }
})

export const getErrorForm = (password, username, invalid) => ({
    type: 'getErrorForm',
    payload: {
        password,
        username,
        invalid
    }
})

export const successLogin = () => ({
    type: 'successLogin'
})