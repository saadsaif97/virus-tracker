import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { AppBar } from '@material-ui/core'

const Header = () => {
  return (
    <>
      <AppBar position='fixed' color='default'>
        <Toolbar>
          <Typography variant='h5' style={{ fontWeight: 'bolder' }}>
            Covid Tracker By saad saif
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
