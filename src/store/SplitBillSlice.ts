import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export type UserType = {
  id?: string
  name?: string
  urlImage?: string
  sex?: 'male' | 'female' | undefined
  money?: number
}

interface IState {
  users: UserType[]
  selectedUser: UserType | null
}

const initialState: IState = {
  users: [
    {
      id: uuidv4(),
      name: 'Woman',
      urlImage: '',
      sex: 'female',
      money: 0,
    },
    {
      id: uuidv4(),
      name: 'MAN',
      urlImage: '',
      sex: 'male',
      money: 0,
    },
    {
      id: uuidv4(),
      name: 'THEY',
      urlImage: '',
      money: 0,
    },
  ],
  selectedUser: null,
}

const splitBill = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    addUserAction: (state, action: PayloadAction<UserType>) => {
      state.users = [...state.users, action.payload]
    },
    deleteUserAction: (state, action) => {},
    selectUserAction: (state, action) => {
      state.selectedUser = action.payload
    },
    clearSelectedUserAction: (state) => {
      state.selectedUser = null
    },
    changeUserCredentialsAction: (
      state,
      action: PayloadAction<{
        id: string
        payer: string
        billValue: number
        ownExpense: number
        userExpense: number
      }>,
    ) => {
      state.users = state.users.map((user) => {
        let bill = 0
        bill = action.payload.billValue - action.payload.userExpense

        if (user.id === action.payload.id) {
          return {
            ...user,
            money:
              action.payload.payer === 'you'
                ? user.money! + bill
                : user.money! - bill,
          }
        }
        return user
      })
    },
  },
})

export const {
  addUserAction,
  deleteUserAction,
  selectUserAction,
  clearSelectedUserAction,
  changeUserCredentialsAction,
} = splitBill.actions

export default splitBill.reducer
