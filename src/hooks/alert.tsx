import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// Alert function to import in any component, it will have its own alert context
export default function useAlertDialog(executeOnAgree?: (...data: any) => any) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const openDialog = (_title: string, _text: string) => {
    setTitle(_title)
    setText(_text)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAgree = () => {
    if (executeOnAgree) executeOnAgree()
    setOpen(false)
  }

  const Alert = () => (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle id='alert-dialog-title'>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAgree} autoFocus>
            Acknowledge
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

  return { openDialog, Alert }
}
