import React from 'react'
import { View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Note } from '../components/Note'
import { loadNotes } from '../redux/actions/note'

export const ImpScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const impNotes = useSelector(({note}) => note.impNotes)

    const openNote = note => {
        navigation.navigate('Note', {
            noteId: note.id,
            noteName: note.title,
            noteBody: note.body,
            noteImp: note.imp,
        })
    }

    React.useEffect(() => {
        dispatch(loadNotes())
    },[dispatch]) 
 
    return(
        <View>
            <View>
                <FlatList 
                    data={impNotes}
                    renderItem={({item}) => <Note note={item} onOpen={openNote} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
        
    )
}
