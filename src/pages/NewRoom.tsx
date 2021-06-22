import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../App';

export const NewRoom = () => {
  const { user } = useContext(AuthContext);

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
          <h1>{user?.name}</h1>
          <h2>Create a new room</h2>
          <form>
            <input
              placeholder='Name of the room'
              type='text'
              name=''
              id=''
            />
            <Button type='submit'>Create room</Button>
          </form>
          <p>
            Do you want to join an existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
};
