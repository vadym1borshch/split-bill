import { FC, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import {
  addUserAction,
  clearSelectedUserAction,
} from '../../../store/SplitBillSlice'
import { v4 as uuidv4 } from 'uuid'
import { addUserContainerStyle } from '../SplitBillStyles'

interface IAddUserProps {}

export const AddUser: FC<IAddUserProps> = () => {
  const [userName, setUserName] = useState('')
  const [avatarURL, setAvatarURL] = useState(`https://i.pravatar.cc/300`)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const addUserHandler = () => {
    if (userName) {
      dispatch(
        addUserAction({
          id: uuidv4(),
          name: userName,
          urlImage: avatarURL,
          money: 0
        }),
      )
      if (isOpen) {
        dispatch(clearSelectedUserAction())
      }
    }
    setAvatarURL(avatarURL)
    setUserName('')
    setIsOpen(!isOpen)
  }

  const buttonText = (): string => {
    if (isOpen && userName) return 'Add User'
    if (isOpen && !userName) return 'Close'
    return 'Add User'
  }

  return (
    <Box sx={addUserContainerStyle}>
      {isOpen && (
        <Box
          className="formContainer"
          sx={{ backgroundColor: isOpen ? 'white' : 'transparent' }}
        >
          <form onChange={(e) => e.preventDefault()}>
            <Box className="inputContainer">
              <span>Name: </span>
              <TextField
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
              />
            </Box>
            <Box className="inputContainer">
              <span>Image URL: </span>
              <TextField
                className="input"
                value={avatarURL}
                onChange={(e) => setAvatarURL(e.currentTarget.value)}
              />
            </Box>
          </form>
        </Box>
      )}
      <Box className="buttonContainer">
        <Button onClick={addUserHandler}>{buttonText()}</Button>
      </Box>
    </Box>
  )
}
