import { FC } from 'react'
import { Button } from './formComponentsInterface'

const SubmitButton: FC<Button> = ({ triggerAction, name }) => (
  <button
    type='submit'
    className='send-button'
    onClick={() => {
      if (triggerAction) triggerAction()
    }}
  >
    {name ? name : 'Submit'}
  </button>
)

export default SubmitButton
