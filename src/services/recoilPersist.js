// RECOILING
import { atom, } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist({
    key: 'user', // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  })

export const UserAuthState = atom({
    key: 'User',
    default: {
        token: null,
        userId: ''
    },

    effects_UNSTABLE: [persistAtom],
})


// { "id": "token",
//   "ttl": 1209600,
//   "created": "2022-12-06T09:26:43.189Z",
//   "userId": "637f5dc9506f6345649fd0a6"}
// {
//   "error": {
//     "statusCode": 401,
//     "name": "Error",
//     "message": "login failed",p0
//     "code": "LOGIN_FAILED",
    
//   }
// }