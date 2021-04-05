import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../redux/actions/note'

export const Note = ({ note, onOpen }) => {
    const dispatch = useDispatch()

    const removeNote = () => {
        Alert.alert(
            "Удаление заметки.",
            "Вы точно хотите удалить эту заметку?",
            [
                {
                    text: "Закрыть",
                    style: "cancel"
                },
                {
                    text: "Да, удалить",
                    style: 'destructive',
                    onPress() {
                        dispatch(deleteNote(note.id))
                    }
                }
            ],
            {cancelable: true}
        )
    }

    return(
        <TouchableOpacity activeOpacity={0.4} onPress={() => onOpen(note)} onLongPress={removeNote}>
            <View style={styles.note}>
                <Text style={{textAlign: 'center'}}>{note.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    note:{
        borderStyle: 'solid', 
        borderColor: '#000',
        borderRadius: 20,
        borderWidth: 2,
        padding: 10,
        width: '90%',
        marginHorizontal: 20,
        marginTop: 20,
    }
})