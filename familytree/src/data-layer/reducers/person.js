import initialState from "../initial-state/person";

export default function (state = initialState, action) {
    if (action.type === 'RENAME') {
        return state;
    } else if (action.type === 'ADD') {
        return state;
    } else if (action.type === 'REMOVE') {
        return state;
    } else if (action.type === 'ADD_PARENT') {
        return state;
    } else if (action.type === 'REMOVE_PARENT') {
        return state;
    } else if (action.type === 'ADD_SIBLING') {
        return state;
    } else if (action.type === 'REMOVE_SIBLING') {
        return state;
    } else if (action.type === 'ADD_SPOUSE') {
        return state;
    } else if (action.type === 'REMOVE_SPOUSE') {
        return state;
    } else {
        return state // In case an action is passed in we don't understand
    }
}
