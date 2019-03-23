import { SHOW_ROOMS, SHOW_EVENTS, SHOW_WELCOME_PAGE } from '../actions/types'

const initialState = {
    showRooms: false,
    showEvents: false,
    showWelcomePage: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_ROOMS:
            return {
                ...state,
                showRooms: action.payload
            }

        case SHOW_EVENTS:
            return {
                ...state,
                showEvents: action.payload
            }

        case SHOW_WELCOME_PAGE:
            return {
                ...state,
                showWelcomePage: action.payload
            }

        default:
            return state
    }
}