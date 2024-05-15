import { OPEN_HAMBURGER, CLOSE_HAMBURGER, INCREASE_WORK_TIMER, DECREASE_WORK_TIMER, INCREASE_BREAK_TIMER, DECREASE_BREAK_TIMER, ADD_WORK_TIME, SUBTRACT_WORK_TIME, ADD_BREAK_TIME, SUBTRACT_BREAK_TIME, RESET, HANDLE_INPUTS, ADD_TASK, HANDLE_EDIT, DELETE_TASK, LETS_EDIT, OPEN_MODAL, CLOSE_MODAL, HANDLE_INPUT,ADD_MOVIE, DELETE_MOVIE, DELETE_AGAIN } from "./types"
import { v4 as uuid } from "uuid"

export const openHamburger = () => {
    return {
        type: OPEN_HAMBURGER
    }
}
export const closeHamburger = () => {
    return {
        type: CLOSE_HAMBURGER
    }
}
//for pomodoro

export const handleInput = (input) => {
    return {
        type: HANDLE_INPUT,
        payload: input
    }
}

export const increaseWorkTimer = () => {
    return {
        type: INCREASE_WORK_TIMER
    }
}
export const decreaseWorkTimer = () => {
    return {
        type: DECREASE_WORK_TIMER
    }
}
export const increaseBreakTimer = () => {
    return {
        type: INCREASE_BREAK_TIMER
    }
}
export const decreaseBreakTimer = () => {
    return {
        type: DECREASE_BREAK_TIMER
    }
}
export const addWorkTime = () => {

    return {
        type: ADD_WORK_TIME
    }
}
export const subtractWorkTime = () => {
    return {
        type: SUBTRACT_WORK_TIME
    }
}
export const addBreakTime = () => {
    return {
        type: ADD_BREAK_TIME
    }
}
export const subtractBreakTime = () => {
    return {
        type: SUBTRACT_BREAK_TIME
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}
//for todos
export const handleInputs = (input) => {
    return {
        type: HANDLE_INPUTS,
        payload: input
    }
}
export const addTask = () => {
    let todo = {}
    todo.id = uuid()
    return {
        type: ADD_TASK,
        payload: todo
    }
}
export const deleteTask = (todo) => {
    return {
        type: DELETE_TASK,
        payload: todo.id
    }
}
export const prepareToEdit = (todo) => {
    return {
        type: LETS_EDIT,
        payload: todo
    }
}
export const handleEdit = () => {
    return {
        type: HANDLE_EDIT
    }
}
export const handleOpenModal = () => {
    return {
        type: OPEN_MODAL
    }
}
export const handleCloseModal = () => {
    return {
        type: CLOSE_MODAL
    }
}
//for movies
export const addMovie = () => {
    //let movie = {}
    return {
        type: ADD_MOVIE,
    }
}
export const deleteMovie = (movie) => {
    return {
        type: DELETE_MOVIE,
        payload: movie.id
    }
}
export const deleteAgain = (movie) => {
    return {
        type: DELETE_AGAIN,
        payload: movie.id
    }
}