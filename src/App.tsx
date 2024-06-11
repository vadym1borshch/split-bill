import React from 'react'
import { SplitBill } from './components/SplitBill/SplitBill'
import { Box } from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(270deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
      }}
    >
      <SplitBill />
    </Box>
  )
}

export default App
