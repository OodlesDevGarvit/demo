import {ADD_TO_CART, Remove_From_CART} from './constants'

const initialState = [];

const reducer = (state=initialState, action) => {
switch (action.type) {
    case ADD_TO_CART:
        return [
            ...state,
            action.data
        ];
        case Remove_From_CART:
            let result = state.filter((item)=>{
                return item.name!= action.data
            })
        return [
            ... result
        ];
    default: 
        return state; 
}
};
export default reducer;



