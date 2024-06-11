import React, { FC, useState } from 'react'
import { Box, Button, MenuItem, Select, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { changeUserCredentialsAction } from '../../../store/SplitBillSlice'

interface ISplitBillWithUserProps {}

export const SplitBillWithUser: FC<ISplitBillWithUserProps> = () => {
  const user = useSelector((state: RootState) => state.splitBill.selectedUser)

  const [billValue, setBillValue] = useState('')
  const [ownExpense, setOwnExpense] = useState('')
  const [userExpense, setUserExpense] = useState('')
  const [billPayer, setBillPayer] = useState('')

  const dispatch = useDispatch()

  const onlyNumbersQuery = (value: string) => {
    return value.replace(/[^0-9]/g, '')
  }

  const splitBillHandler = (id: string) => {
    dispatch(
      changeUserCredentialsAction({
        billValue: +billValue,
        ownExpense: +userExpense,
        userExpense: +ownExpense,
        id,
        payer: billPayer,
      }),
    )
    setBillValue('')
    setOwnExpense('')
    setUserExpense('')
    setBillPayer('')
  }

  return (
    <Box className="formContainer">
      <form className="form" onChange={(e) => e.preventDefault()}>
        <Box className="formField">
          <Box className="description">Bill value: </Box>
          <Box className="inputContainer">
            <TextField
              className="input"
              value={billValue}
              onChange={(e) =>
                setBillValue(onlyNumbersQuery(e.currentTarget.value))
              }
            />
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description">Your expense: </Box>
          <Box className="inputContainer">
            <TextField
              className="input"
              value={ownExpense}
              onChange={(e) => {
                if (Number(e.currentTarget.value) >= Number(billValue)) return
                setOwnExpense(onlyNumbersQuery(e.currentTarget.value))
              }}
            />
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description">{user && user.name} expanse:</Box>
          <Box className="inputContainer">
            <TextField
              className="input"
              value={(Number(billValue) - Number(ownExpense)).toString()}
              disabled
            />
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description">Who is pay the bill?:</Box>
          <Box className="inputContainer">
            <Select
              className="input"
              value={billPayer}
              onChange={(e) => setBillPayer(e.target.value)}
            >
              <MenuItem value="you">You</MenuItem>
              <MenuItem value="user">{user && user.name}</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box className="formField">
          <Box className="description" />
          <Button
            onClick={() => splitBillHandler(user!.id || '')}
            disabled={!billPayer || !billValue}
          >
            split
          </Button>
        </Box>
      </form>
    </Box>
  )
}
