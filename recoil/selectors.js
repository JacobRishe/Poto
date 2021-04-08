import { selector } from 'recoil'
import { userState } from './atoms'

export const loggedInState = selector({
  key: 'loggedInState',
  get: ({ get }) => {
    // get user state
    const user = get(userState);
    if (user) return true
    return false
  }
})