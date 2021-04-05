import { DB } from '../../db'
import * as FileSystem from 'expo-file-system'
 
export const loadNotes = () => {
    return async dispatch => {
        const notes = await DB.getNotes()

        dispatch({
            type: 'LOAD_NOTES',
            payload: notes
        })
    }
}

export const addNote = note => async dispatch => {
    const object = {...note}
    const id = await DB.createNote(note)
    object.id = id
    
    dispatch({
        type: 'ADD_NOTE',
        payload: object
    })
}

export const changeBody = (note, body) => async dispatch => {
    await DB.updateBody(note, body)

    const id = note.id

    dispatch({
        type: 'CHANGE_BODY',
        payload: {
            id,
            body}
        })

}

export const deleteNote = id => async dispatch => {
    await DB.deleteNote(id)

    dispatch({
        type: 'DELETE_NOTE',
        payload: id
    })
}

export const changeImp = note => async dispatch => {
    await DB.updateImp(note)

    dispatch({
        type: 'CHANGE_IMP',
        payload: note.id
    })
    
}