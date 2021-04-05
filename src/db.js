import * as SQlite from 'expo-sqlite'

const db = SQlite.openDatabase('note.db')

export class DB{
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, body TEXT, imp INTEGER)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getNotes() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM notes',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static createNote ({title, body, imp}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO notes (title, body, imp) VALUES (?, ?, ?)`,
                    [title, body, imp],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error) 
                )
            })
        })
    }

    static updateBody (note, newBody) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE notes SET body = ? WHERE id = ?',
                    [note.body = newBody, note.id],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static updateImp (note) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE notes SET imp = ? WHERE id = ?',
                    [note.imp ? 0 : 1, note.id],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static deleteNote (id) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM notes WHERE id = ?',
                    [id],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }
}