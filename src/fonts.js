import * as Font from 'expo-font'
import { DB } from './db'

export async function fonts() {
    try{
        await Font.loadAsync({
            'ranchers-regular': require('../assets/fonts/Ranchers-Regular.ttf')
        })
        await DB.init()
        console.log('Database started...')
    } catch(e) {
        console.log('Error: ', e)
    }
}