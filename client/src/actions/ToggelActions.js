import { SHOW_ROOMS, SHOW_EVENTS, SHOW_WELCOME_PAGE } from './types'


export const showRooms = () => {
    return (dispatch) => {
        dispatch({ type: SHOW_ROOMS, payload: true })
    }
}

export const showEvents = () => {
    return (dispatch) => {
        dispatch({ type: SHOW_EVENTS, payload: true })
        dispatch({ type: SHOW_ROOMS, payload: false })
        dispatch({ type: SHOW_WELCOME_PAGE, payload: false })

    }
}

export const showWelcomeProfile = () => {
    return (dispatch) => {
        dispatch({ type: SHOW_WELCOME_PAGE, payload: true })
        dispatch({ type: SHOW_EVENTS, payload: false })
        dispatch({ type: SHOW_ROOMS, payload: false })
    }
}