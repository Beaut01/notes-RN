import React from 'react'
import { View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { TitleInput } from '../components/TitleInput'
import { Note } from '../components/Note'
import { loadNotes, addNote } from '../redux/actions/note'

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const allNotes = useSelector(({note}) => note.allNotes)

    const openNote = note => {
        navigation.navigate('Note', {
            noteId: note.id,
            noteName: note.title,
            noteBody: note.body,
            noteImp: note.imp,
        })
    }

    const handleAddNote = (title, body, imp) => {
        const note = {
            title: title,
            body: body,
            imp: imp,
        }
        dispatch(addNote(note))
    }

    React.useEffect(() => {
        dispatch(loadNotes())
    },[dispatch]) 
 
    return(
        <View>
            <View>
                <TitleInput onAdd={handleAddNote}/>
                <FlatList 
                    data={allNotes}
                    renderItem={({item}) => <Note note={item} onOpen={openNote} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
        
    )
}
