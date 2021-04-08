
import { atom } from "recoil"

// export a piece of state representing a user
export const userState = atom({
  key: 'userState',
  default: null
})