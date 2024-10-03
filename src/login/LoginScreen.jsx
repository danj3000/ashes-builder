// LoginScreen.js
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../services/ashteki';

const LoginScreen = () => {
  const { register, handleSubmit } = useForm()
  const [login] = useLoginMutation()

  const submitForm = (data) => {
    console.log(data.email)
    login({ username: data.email, password: data.password });
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button'>
        Login
      </button>
    </form>
  )
}
export default LoginScreen