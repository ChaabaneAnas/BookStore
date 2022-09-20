const CHECKSTATUE = "redux/categories/categories/CHECKSTATUE";
const initialState = [];


export default function categoriesReducer (state = initialState, action) {
    if(action.type === "redux/categories/categories/CHECKSTATUE"){
        return action.payload;
    }
    else return state;
}



const checkStatue = () => {
    return {
        type: CHECKSTATUE,
        payload: "Under construction"
    }
}

export { checkStatue }