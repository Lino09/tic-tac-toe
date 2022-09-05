import { useState } from 'react'
import { Gamer } from '../utils/types'
import CloseButton from './CloseButton';
import Input from './Input';

const LoginModal = (props: {user: Gamer; closeModal: () => void; setUserInfo: (e: EventTarget) => void}): JSX.Element => {

  const {user, closeModal, setUserInfo} = props;

  const [register, registerSet] = useState(false)

  const handleClick = (e: {target: EventTarget, currentTarget: EventTarget}):void => {
    if(e.target === e.currentTarget) closeModal() 
  }

  return (
  <div
          className="base-modal-wrapper"
          onClick={handleClick}
        >
          <div className="base-modal">
            <CloseButton position="-top-3 -right-3" handleClick={handleClick} />
              <h2 className="text-xl">  {`${register ? 'Register' : 'Log In'}`} to record your Games
            </h2>
            <form action="POST" className="w-full flex flex-col space-y-8">
              {Object.keys(user).map((field: string) => (
                <Input id={field} value={user} onChangeProp={setUserInfo}  key={field} label={field} register={register}/>
              ))}
              
              <label htmlFor="rememberme" className='flex gap-4 items-center'>
                <input type="checkbox" name="rememberme" id="rememberme" className='h-4 w-4' />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="underline"
                onClick={() => registerSet(!register)}
              >{`or ${register ? 'Log in' : 'Register'}`}</button>

              <div className='flex w-full justify-center gap-4'>
                <button type="button" className='btn-base btn-cta border-base'>{`${register ? 'Register' : 'Log in'}`}</button>
                <button type="button" className='btn-base btn-secondary border-base'>Play as guest</button>
              </div>
            </form>
          </div>
        </div>
)}

export default LoginModal
