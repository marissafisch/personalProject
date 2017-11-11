import axios from 'axios';

const initialState = {
    partyName: '',
    partyDescription: '',
    partyDate: '',
    partyLocation: '',
    partyAddress: '',
    partyDecorations: [],
    partySupplies: [],
    partyFood: [],
    partyGuests: [],
    partyInvite: '',
    user: {},
    userId: '',
    password: '',
    loginStatus: false,
    partyId: '',
    partyList: [],
    partyTasks: []
}

const UPDATE_PARTY_NAME = 'UPDATE_PARTY_NAME';
const UPDATE_PARTY_DESCRIPTION = 'UPDATE_PARTY_DESCRIPTION';
const UPDATE_PARTY_DATE = 'UPDATE_PARTY_DATE';
const UPDATE_PARTY_LOCATION = 'UPDATE_PARTY_LOCATION';
const UPDATE_PARTY_ADDRESS = 'UPDATE_PARTY_ADDRESS';
const UPDATE_PARTY_DECORATIONS = 'UPDATE_PARTY_DECORATIONS';
const UPDATE_PARTY_SUPPLIES = 'UPDATE_PARTY_SUPPLIES';
const UPDATE_PARTY_FOOD = 'UPDATE_PARTY_FOOD';
const UPDATE_PARTY_GUESTS = 'UPDATE_PARTY_GUESTS';
const UPDATE_PARTY_INVITE = 'UPDATE_PARTY_INVITE';
const GET_ALL_PARTIES = 'GET_ALL_PARTIES';
const GET_ALL_TASKS = 'GET_ALL_TASKS';
const GET_ALL_GUESTS = 'GET_ALL_GUESTS';
const DELETE_PARTY_TASK = 'DELETE_PARTY_TASK';
const ACCEPT_PARTY_INVITE = 'ACCEPT_PARTY_INVITE';
const DELETE_PARTY_INVITE = 'DELETE_PARTY_INVITE';
const SET_PARTY_ID = 'SET_PARTY_ID';

//AUTH COMPONENTS//
const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';


function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PARTY_NAME:
            return Object.assign({}, state, { partyName: action.payload })
        case UPDATE_PARTY_DESCRIPTION:
            return Object.assign({}, state, { partyDescription: action.payload })
        case UPDATE_PARTY_DATE:
            return Object.assign({}, state, { partyDate: action.payload })
        case UPDATE_PARTY_LOCATION:
            return Object.assign({}, state, { partyLocation: action.payload })
        case UPDATE_PARTY_ADDRESS:
            return Object.assign({}, state, { partyAddress: action.payload })
        case UPDATE_PARTY_DECORATIONS:
            return Object.assign({}, state, { partyDecorations: action.payload })
        case UPDATE_PARTY_SUPPLIES:
            return Object.assign({}, state, { partySupplies: action.payload })
        case UPDATE_PARTY_FOOD:
            return Object.assign({}, state, { partyFood: action.payload })
        case UPDATE_PARTY_GUESTS:
            return Object.assign({}, state, { partyGuests: action.payload })
        case GET_ALL_PARTIES + "_FULFILLED":
            console.log(action.payload)
            return Object.assign({}, state, { partyList: action.payload })
        case GET_ALL_TASKS + "_FULFILLED":
            return Object.assign({}, state, { partyTask : action.payload })
        case GET_ALL_GUESTS + "_FULFILLED":
            return Object.assign({}, state, { userId: action.payload })
        case DELETE_PARTY_TASK:
            return Object.assign({}, state, {
                partyTask:
                state.partyTask.splice(state.partyTask.indexOf(action.payload, 1))
            });
        case ACCEPT_PARTY_INVITE:
            return Object.assign({}, state, { partyInvite: action.payload })
        case DELETE_PARTY_INVITE:
            return Object.assign({}, state, {
                partyInvite:
                state.partyInvite.splice(state.partyInvite.indexOf(action.payload, 1))
            });
        case UPDATE_PARTY_INVITE:
            return Object.assign({}, state, { partyInvite: action.payload })
        case UPDATE_LOGIN_STATUS:
            return Object.assign({}, state, { login: action.payload })
        case LOGOUT:
            return Object.assign({}, initialState)
        case GET_USER + "_FULFILLED" :
            return Object.assign({}, state, { user: action.payload })
        case SET_PARTY_ID:
            return Object.assign({}, state, {partyId: action.payload})
        default:
            return state
    }
}

export function getUser(){
    var userInfo = axios.get(`${process.env.BASE_URL}/auth/me`).then(response => {
        console.log(response)
        return response.data
        })
    return {
        type: GET_USER,
        payload: userInfo
    }
}

export function updateLoginStatus(user, password) {
    let loginStatus = false;

    if (user === 'user' && password === 'password') {
        loginStatus = true;
    }
    return {
        type: UPDATE_LOGIN_STATUS,
        payload: loginStatus
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: axios.get('auth/logout').then(response => response)
    }
}

export function updatePartyName(partyName) {
    return {
        type: UPDATE_PARTY_NAME,
        payload: partyName
    }
}

export function updatePartyDescription(partyDescription) {
    return {
        type: UPDATE_PARTY_DESCRIPTION,
        payload: partyDescription
    }
}

export function updatePartyDate(partyDate) {
    return {
        type: UPDATE_PARTY_DATE,
        payload: partyDate
    }
}

export function updatePartyLocation(partyLocation) {
    return {
        type: UPDATE_PARTY_LOCATION,
        payload: partyLocation
    }
}

export function updatePartyAddress(partyAddress) {
    return {
        type: UPDATE_PARTY_ADDRESS,
        payload: partyAddress
    }
}

export function updatePartyDecorations(partyDecorations) {
    return {
        type: UPDATE_PARTY_DECORATIONS,
        payload: partyDecorations
    }
}

export function updatePartySupplies(partySupplies) {
    return {
        type: UPDATE_PARTY_SUPPLIES,
        payload: partySupplies
    }
}

export function updatePartyFood(partyFood) {
    return {
        type: UPDATE_PARTY_FOOD,
        payload: partyFood
    }
}

export function updatePartyGuests(partyGuests) {
    return {
        type: UPDATE_PARTY_GUESTS,
        payload: partyGuests
    }
}


export function getAllParties() {
    return {
        type: GET_ALL_PARTIES,
        payload: axios.get('/api/getAllParties/').then(response => {
            return response.data
        })
    }
}

export function getAllTasks() {
    return {
        type: GET_ALL_TASKS,
        payload: axios.get(('/api/getAllTasks')).then(response => {
            return response.data
        })
    }
}

export function getAllGuests(partyId) {
    return {
        type: GET_ALL_GUESTS,
        payload: axios.get('/getAllGuests').then(response => {
            return response
        })
    }
}

export function acceptPartyInvite(partyInvite) {
    return {
        type: ACCEPT_PARTY_INVITE,
        payload: axios.put('/acceptPartyInvite').then(response => {
            return response
        })
    }
}

export function setPartyId(id) {
    return {
        type: SET_PARTY_ID,
        payload: id
    }
}



export default reducer;