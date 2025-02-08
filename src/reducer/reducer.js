import actionTypes from "./actionTypes" 
import { initGameState } from "../helper";
 
 export const reducer = (state, action) => {
    switch (action.type){
        case actionTypes.SET_COLOR : {
            return {
                ...state,
                currentColor : action.payload,
            };
        }
        case actionTypes.SET_SLOT : {
            const row = [...state.rows[state.currentRow]];
            row[action.payload] = state.currentColor;
            state.rows[state.currentRow] = [...row];
            
            return {
                ...state
            }
        }
        case actionTypes.CHECK_ROW : {
            let {currentRow,hints} = state
            hints[currentRow] = [...action.payload]
            return{
                ...state,
                currentRow : state.currentRow + 1,
                hints
            }
        }
        case actionTypes.SET_GAME_STATE : {
            return{
                ...state,
                gameState : action.payload,
            }
        }
        case actionTypes.NEW_GAME : {
            return{
                ...initGameState(),  
            }
        }

        default : 
            return state
    }
}