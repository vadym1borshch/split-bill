import { FC, useState } from 'react'
import { Box, Button } from '@mui/material'
import maleImg from '../../../commonFiles/boy.jpeg'
import femaleImg from '../../../commonFiles/girl.jpeg'
import nosex from '../../../commonFiles/nosex.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserAction, UserType } from '../../../store/SplitBillSlice'
import { RootState } from '../../../store/store'

interface IUserCardProps {
  user: UserType
  onOpen: () => void
  isOpen: boolean
}

export const UserCard: FC<IUserCardProps> = ({ user, onOpen, isOpen }) => {
  const { urlImage, sex, money, name, id } = user
  const [hoveredUserId, setHoveredUserId] = useState<string | undefined>(
    undefined,
  )
  const userId = useSelector(
    (state: RootState) =>
      state.splitBill.selectedUser && state.splitBill.selectedUser.id,
  )

  let descriptions = () => {
    if (money === 0) {
      return `you and ${name} are even`
    }
    if (money! > 0) {
      return `${name} owes you ${money}$`
    }
    if (money! < 0) {
      return `you owe ${name} ${Math.abs(Number(money))}$`
    }
  }

  const dispatch = useDispatch()
  const getImage = (): string => {
    if (!urlImage) {
      if (sex === 'male') return maleImg
      if (!sex) return nosex
      return femaleImg
    }
    return urlImage
  }
  return (
    <Box
      className="mainUserBox"
      onMouseEnter={() => setHoveredUserId(id)}
      onMouseLeave={() => setHoveredUserId(undefined)}
    >
      <Box className="userBox">
        <Box className="userInfoBox">
          <img alt={name} src={getImage()} />
          <Box className="userCredsBox">
            <Box>{name}</Box>
            <Box>{descriptions()}</Box>
          </Box>
        </Box>
        <Button
          sx={{
            '&:hover': {
              backgroundColor:
                !isOpen || userId !== hoveredUserId ? 'green' : 'red',
            },
          }}
          onClick={() => {
            onOpen()
            dispatch(selectUserAction(user))
          }}
        >
          {id === userId && isOpen ? 'close' : 'select'}
        </Button>
      </Box>
    </Box>
  )
}
