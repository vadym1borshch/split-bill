import { SxProps, Theme } from '@mui/material'

export const mainContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  flexGrow: 1,
  '& button': {
    width: '80px',
    height: '30px',
    backgroundColor: '#fda949',
    color: '#fff',
  },
}
export const contentContainerStyle: SxProps<Theme> = {
  margin: '5px',
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  '& .userContainer': {
    width: '100%',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    boxSizing: 'border-box',
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: '3px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray',
      borderRadius: '3px',
    },
    '& .mainUserBox': {
      backgroundColor: '#fff',
      width: '100%',
      minWidth: '390px',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '10px',
      borderRadius: '5px',
      '&:last-child': {
        marginBottom: '0',
      },
      '& .userBox': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        '& button': {
          marginRight: '15px',
        },
        '& .userInfoBox': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '& img': {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            justifyContent: 'space-between',
            margin: '5px',
          },
          '& .userCredsBox': {
            '& div': {
              margin: '10px',
            },
          },
        },
      },
    },
  },
  '& .formContainer': {
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  '& .formField': {
    width: 'calc(100% - 10px)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '5px',
    '& button': {
      '&:hover': {
        backgroundColor: 'darkorange',
      },
    },
    '& .description': {
      width: '50%',
    },
    '& .container': {
      width: '50%',
      justifyContent: 'end',
    },
    '& .inputContainer': {
      width: '50%',
      '& .input': {
        width: '100%',
      },
    },
  },
}

export const addUserContainerStyle: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'end',
  marginTop: '10px',
  '& .buttonContainer': {
    margin: '10px 15px 10px 0',
    '& button': {
      width: '100px',
      '&:hover': {
        backgroundColor: 'darkseagreen',
      },
    },
  },
  '& .formContainer': {
    borderRadius: '5px',
    padding: '5px 0 0 5px',
    '& .inputContainer': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 5px 5px 0',
    },
  },
}
