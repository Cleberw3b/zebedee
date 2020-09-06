import React, { FC, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import QRCode from 'qrcode.react'

// QRCode Dialog function to import in any component, it will have its own alert context
export default function useQRCodeDialog() {
  const [open, setOpen] = useState(false)

  const openQRCodeDialog = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const QRCodeAlert: FC<{ qrcodeString: string }> = ({ qrcodeString }) => (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <QRCode value={qrcodeString} size={300} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

  return { openQRCodeDialog, QRCodeAlert }
}
