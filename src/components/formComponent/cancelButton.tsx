import { FC } from 'react'
import { Button } from './formComponentsInterface'

const CancelButton: FC<Button> = ({ triggerAction }) => (
  <button
    type='reset'
    className='cancel-button'
    onClick={() => {
      if (triggerAction) triggerAction()
    }}
  >
    Cancel
  </button>
)

export default CancelButton
