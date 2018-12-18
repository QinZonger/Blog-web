export default (state = 0, action) => {
    switch (action.type) {
        case "MACK" : return action.text
        break;
        default: return state;
    }
};