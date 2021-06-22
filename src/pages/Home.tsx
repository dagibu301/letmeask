import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export const Home = () => {
  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt='Illustration questions and answers' />
        <strong>Create rooms of live Q&amp;A </strong>
        <p>Solve doubts of your audience in real time</p>
      </aside>
      <main>
        <div className='main-content'> 
          <img src={logoImg} alt='letmeask' />
          <button className='create-room'>
            <img src={googleIconImg} alt="Google Icon" />
            Create your room with Google</button>
          <div className='separator'>Or join a room</div>
          <form>
            <input
              placeholder='Enter the code of your room'
              type='text'
              name=''
              id=''
            />
            <Button type='submit'>Join the room</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
