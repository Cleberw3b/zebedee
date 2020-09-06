import { FC } from 'react'
import { Input } from './formComponentsInterface'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const InputEmail: FC<Input> = ({ register, errors, placeholder }) => (
  <>
    <label htmlFor='email'>Email</label>
    <input
      type='email'
      name='email'
      placeholder={placeholder}
      ref={register({
        required: { value: true, message: 'Required' },
        pattern: {
          value: EMAIL_REGEX,
          message: 'Invalid e-mail'
        }
      })}
    />
    {errors.email && (
      <div className='default-form-warn'> {errors.email.message}</div>
    )}
  </>
)

export default InputEmail
