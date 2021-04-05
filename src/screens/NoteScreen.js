import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { 
    View, 
    TextInput, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Keyboard, 
    TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeBody, changeImp } from '../redux/actions/note'

export const NoteScreen = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const noteId = route.params?.noteId
    const note = useSelector(({note}) => note.allNotes.find(n => n.id === noteId))
    const noteBody = note.body
    const [value, onChangeText] = React.useState(noteBody)

    const handleChangeBody = () => {
        dispatch(changeBody(note, value))
        navigation.navigate('Main')
    }

    const toggleChangeImp = () => {
        dispatch(changeImp(note))
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                const iconName = note.imp ? 'star' : 'star-outline'

                return(
                    <TouchableOpacity onPress={toggleChangeImp} >
                        <Ionicons name={iconName} size={27} color='orange' style={{marginRight: 15}} />
                    </TouchableOpacity>
                )
            }
        })
    },[navigation])

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.back}>
                <View style={styles.container}>
                    <TextInput 
                        style={styles.input} 
                        multiline 
                        value={value} 
                        onChangeText={text => onChangeText(text)} 
                        placeholder='Введите текст...'  
                    />
                    <TouchableOpacity style={styles.add} activeOpacity={0.4} onPress={handleChangeBody}>
                        <Ionicons name='checkmark-circle' size={35} color='orange'/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start', 
        margin: 20,
    },
    back: {
        flex: 1,
        backgroundColor: '#f5deb3'
    },
    input: {
        padding: 10,
        marginBottom: 10
    },
    add:{
        justifyContent:'center',
        alignItems: 'center'
    }
})