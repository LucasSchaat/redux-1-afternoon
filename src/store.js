import { createStore } from 'redux'

const initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST'
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const RESET_FORM = 'RESET_FORM'
export const DELETE_RECIPE = 'DELETE_RECIPE'

function reducer( state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_NAME:
            return { ...state, recipeName: payload } 
        case UPDATE_CATEGORY:
            return { ...state, recipeCategory: payload }
        case UPDATE_AUTHOR_FIRST:
            return { ...state, authorFirst: payload}
        case UPDATE_AUTHOR_LAST:
            return { ...state, authorLast: payload}
        case ADD_INGREDIENT:
            return { ...state, ingredients: [ ...state.ingredients, payload]}
        case ADD_INSTRUCTION:
            return { ...state, instructions: [ ...state.instructions, payload]}
        case CREATE_RECIPE:
            const { recipeName, recipeCategory, authorFirst, authorLast, ingredients, instructions } = state
            const recipe = { recipeName, recipeCategory, authorFirst, authorLast, ingredients, instructions}
            const newRecipes = [ ...state.recipes, recipe]
            return {...state, recipes: newRecipes   }
        case RESET_FORM:
            return {
                recipeName: '',
                recipeCategory: '',
                authorFirst: '',
                authorLast: '',
                ingredients: [],
                instructions: [],
                recipes: state.recipes
            }
        case DELETE_RECIPE:
            return { ...state, recipes: payload}
        default:
            return state
    }
}

export default createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
