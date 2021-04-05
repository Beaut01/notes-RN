import React from 'react' 
import { View, StyleSheet, TextInput, TouchableOpacity, Modal, Pressable, Alert, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const TitleInput = ({ onAdd }) => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const [value, onChangeText] = React.useState('')
    const [valueBody, onChangeTextBody] = React.useState('')
    const [imp, setImp] = React.useState(false)
    const iconName = imp ? 'star' : 'star-outline'

    const handleAddNote = () => {
        if (value.trim()) {
            onAdd(value, valueBody, imp)
            onChangeText('')
            onChangeTextBody('')
            setImp(false)
            setModalVisible(!modalVisible)
        } else {
            Alert.alert('Задача не была введена!')
        }
    }

    return(
        <View style={styles.center}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.modalCenter}>
                    <View style={styles.modalView}>
                        <View style={styles.imp}>
                            <TouchableOpacity activeOpacity={0.4} onPress={() => setImp(!imp)} >
                                <Ionicons name={iconName} size={23} color='orange' />
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingBottom: 10}}>
                            <TextInput style={styles.input} placeholder='Введите заголовок...' value={value} onChangeText={text => onChangeText(text)}/>
                            <TextInput style={styles.input, {marginTop: 50}} placeholder='Введите задачи...' value={valueBody} onChangeText={text => onChangeTextBody(text)} multiline/>
                        </View>
                        <Pressable style={styles.buttonAdd} onPress={handleAddNote}>
                            <Ionicons name='add' color='#fff' size={20}/>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name='add' size={35} color='#fff' />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderStyle: 'solid',
        borderColor: '#000',
        borderBottomWidth: 1,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        width: 55,
        height: 55,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: 'orange'
    },
    buttonAdd:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: 'orange'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    center: {
        width: '100%',
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 22,
        flexDirection: 'row',
        paddingVertical: 20,
    },
    modalCenter: {
        marginTop: Dimensions.get('window').height / 15
    },
    imp:{
        marginBottom: 15
    }
})