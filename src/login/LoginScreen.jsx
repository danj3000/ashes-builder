// LoginScreen.js
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../services/ashteki';
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/authSlice'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const { register, handleSubmit } = useForm()
  const [login] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const submitForm = async (data) => {
    console.log(data.email)
    try {
      const result = await login({ username: data.email, password: data.password });
      if (result.data) {
        dispatch(setCredentials(result.data));
        navigate('/decks');
      }
    } catch (err) {
      console.log(err);
    }
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