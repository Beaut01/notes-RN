const initialState = {
    allNotes: [],
    impNotes: []
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_NOTES':
            return {
                ...state, 
                allNotes: action.payload,
                impNotes: action.payload.filter(note => note.imp)
            }
        case 'ADD_NOTE':
            return{
                ...state,
                allNotes: [{...action.payload}, ...state.allNotes]
            }
        case 'CHANGE_BODY':{
            const allNotes = state.allNotes.map(note => {
                if (note.id === action.payload.id) {
                    note.body = action.payload.body
                }
                return note
            })

            return{
                ...state,
                allNotes,
                impNotes: allNotes.filter(note => note.imp)
            }
        }
        case 'DELETE_NOTE': 
        return{
            ...state,
            allNotes: state.allNotes.filter(note => note.id !== action.payload),
            impNotes: state.impNotes.filter(note => note.id !== action.payload)
        }
        case 'CHANGE_IMP': {
            const allNotes = state.allNotes.map(note => {
                if (note.id === action.payload) {
                    note.imp = !note.imp
                }
                return note
            })

            return {
                ...state, 
                allNotes,
                impNotes: allNotes.filter(note => note.imp)
            }
        }
        default: 
            return state
    }
}