// import MMKV from 'react-native-mmkv'
// import {Storage} from 'redux-persist'
// const storage =new MMKV  ();

// // export const token_storage = new MMKV({
// //     id: 'user_storage',
// //     encryptionKey: "RSA KEY"
// // })

// const reduxStorage: Storage ={
//     setItem: (key, val) => {
//         storage.set(key, val)
//         return Promise.resolve(true)
//     },
//     getItem: (key) => {
//         const value = storage.getString(key)
//         return Promise.resolve(value)
//     },
//     removeItem: (key) => {
//         storage.delete(key)
//         return Promise.resolve()
//     }
// }
// export default reduxStorage




// import { MMKV } from 'react-native-mmkv'
// import { MMKV } from 'react-native-mmkv'
// const { MMKV } = require('react-native-mmkv')
// import {Storage} from 'redux-persist'

// const mmkv = new MMKV()

// const reduxStorage = {
//   setItem: (key: string, value: string) => {
//     mmkv.set(key, value)
//     return Promise.resolve()
//   },

//   getItem: (key: string) => {
//     const value = mmkv.getString(key)
//     return Promise.resolve(value ?? null)
//   },

//   removeItem: (key: string) => {
//     mmkv.delete(key)
//     return Promise.resolve()
//   },
// }

// export default reduxStorage
