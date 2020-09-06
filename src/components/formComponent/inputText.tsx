import { FC } from 'react'
import { captalize } from 'utils/util'
import { Input } from './formComponentsInterface'

const InputText: FC<Input> = ({ register, errors, name, required = true }) => (
  <>
    {required}
    <label htmlFor={name}>{name && captalize(name)}</label>
    <input
      type='text'
      name={name}
      ref={register({
        required: { value: required, message: 'Required' },
        minLength: {
          value: 3,
          message: 'Should have at least 3 characters'
        },
        maxlength: {
          value: 50,
          message: 'Should have less than 50 characters'
        }
      })}
    />
    {errors.name && (
      <div className='default-form-warn'> {errors.name.message}</div>
    )}
  </>
)

export default InputText
