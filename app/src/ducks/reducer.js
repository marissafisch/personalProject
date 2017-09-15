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
    password: '',
    loginStatus: false,

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
const UPDATE_PARTY_NAME = 'UPDATE_PARTY_INVITE';
const GET_ALL_PARTIES = 'GET_ALL_PARTIES';
const GET_ALL_TASKS = 'GET_ALL_TASKS';
const GET_ALL_GUESTS = 'GET_ALL_GUESTS';
// const UPDATE_PARTY_TASK = 'UPDATE_PARTY_TASK';
// const DELETE_PARTY_TASK = 'DELETE_PARTY_TASK';
const SEND_PARTY_INVITE = 'SEND_PARTY_INVITE';
const ACCEPT_PARTY_INVITE = 'ACCEPT_PARTY_INVITE';
const DELETE_PARTY_INVITE = 'DELETE_PARTY_INVITE';
//AUTH COMPONENTS//
const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
const LOGOUT_USER = 'LOGOUT USER';


function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PARTY_NAME:
            return Object.assign({}, state, {partyName: action.payload})
        case UPDATE_PARTY_DESCRIPTION:
            return Object.assign({}, state, {partyDescription: action.payload})
        case UPDATE_PARTY_DATE:
            return Object.assign({}, state, {partyDate: action.payload})
        case UPDATE_PARTY_LOCATION:
            return Object.assign({}, state, {partyLocation: action.payload})
        case UPDATE_PARTY_ADDRESS:
            return Object.assign({}, state, {partyAddress: action.payload})
        case UPDATE_PARTY_DECORATIONS:
            return Object.assign({}, state, {partyDecorations: action.payload})
        case UPDATE_PARTY_SUPPLIES:
            return Object.assign({}, state, {partySupplies: action.payload})
        case UPDATE_PARTY_FOOD:
            return Object.assign({}, state, {partyFood: action.payload})
        case UPDATE_PARTY_GUESTS:
            return Object.assign({}, state, {partyGuests: action.payload})
        case UPDATE_PARTY_NAME:
            return Object.assign({}, state, {partyFood: action.payload})
        case GET_ALL_PARTIES:
            return Object.assign({}, state, {partyId: action.payload})
        case GET_ALL_TASKS:
            return Object.assign({}, state, {taskId: action.payload})
        case GET_ALL_GUESTS:
            return Object.assign({}, state, {userId: action.payload})
        case UPDATE_PARTY_TASK:
            return Object.assign({}, state, {partyTask: action.payload})
        case DELETE_PARTY_TASK:
            return Object.assign({}, state, {partyTask: 
            state.partyTask.splice(state.partyTask.indexOf(action.payload, 1)) });
        case SEND_PARTY_INVITE:
            return Object.assign({}, state, {partyInvite: action.payload})
        case ACCEPT_PARTY_INVITE:
            return Object.assign({}, state, {partyInvite: action.payload})
        case DELETE_PARTY_INVITE:
            return Object.assign({}, state, {partyInvite: 
            state.partyInvite.splice(state.partyInvite.indexOf(action.payload, 1)) });
        case UPDATE_LOGIN_STATUS:
            return Object.assign({}, state, {login: action.payload})
        case LOGOUT_USER:
            return Object.assign({}, initialState)
        
        }
}

export function updateLoginStatus(user, password) {
   let loginStatus = false;
  
   if (username === 'user' && password === 'password') {
       loginStatus = true;       
   }
   return {
       type: UPDATE_LOGIN_STATUS,
       payload: loginStatus
   }

export function logoutUser(loginStatus) {
   return {
       type: UPDATE_LOGIN_STATUS,
       payload: loginStatus
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

export function updatePartyName(partyName) {
   return {
       type: UPDATE_PARTY_NAME,
       payload: partyName
   }
}

export function getAllParties(partyId) {
   return {
       type: GET_ALL_PARTIES,
       payload: partyId
   }
}

export function getAllTasks(taskId) {
   return {
       type: GET_ALL_TASKS,
       payload: taskId
   }
}

export function getAllGuests(userId) {
   return {
       type: GET_ALL_GUESTS,
       payload: taskId
   }
}

export function updatePartyTask(partyTask) {
   return {
       type: UPDATE_PARTY_NAME,
       payload: partyName
   }
}

export function sendPartyInvite(partyInvite) {
   return {
       type: SEND_PARTY_INVITE,
       payload: partyInvite
   }
}

export function acceptPartyInvite(partyInvite) {
   return {
       type: ACCEPT_PARTY_INVITE,
       payload: partyInvite
   }
}

}

export default reducer;