import { FC } from 'react'
import { captalize } from 'utils/util'
import { Input } from './formComponentsInterface'

const InputNumber: FC<Input> = ({ register, errors, name, required = true }) => {

  return (
    <>
      <label htmlFor={name}>{name && captalize(name)}</label>
      <input
        type='text'
        name={name}
        ref={
          register({
            required: { value: required, message: 'Required' },
            validate: {
              mustBeNumber: (value: any) => parseInt(value, 10).toString() === value,
              mustBePositive: (value: any) => parseInt(value, 10) > 0
            }
          })
        }
      />
      {errors && errors[`${name}`] && (
        <div className='default-form-warn'> {'Must be number and positive'}</div>
      )}
    </>
  )
}

export default InputNumber
