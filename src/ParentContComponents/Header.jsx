import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'

const StyledBox = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display:flex;
  flex-direction: row;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`

function Header() {


  return (
    <StyledBox>
      <Typography variant='h4'>Logo</Typography>
      <Stack direction='row' spacing={4}>
        <Typography variant='h6' fontSize={18}>Home</Typography>
        <Typography variant='h6' fontSize={18}>Dashboard</Typography>
        <Typography variant='h6' fontSize={18}>Profile</Typography>
        <Typography variant='h6' fontSize={18}>Logout</Typography>
      </Stack>
    </StyledBox>
  )
}

export default Header