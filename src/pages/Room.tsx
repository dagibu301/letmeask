import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button';

import '../styles/room.scss';

export const Room = () => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <div>Code</div>
        </div>
      </header>

      <main className='content'>
        <div className="room-title">
          <h1>React Room</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea
            placeholder='What would you like to ask?'
          />

          <div className="form-footer">
            <span>To be able to send a question, <button>Log in first</button>.</span>
            <Button type='submit'>Send question</Button>
          </div>
        </form>
      </main>
    </div>
    );
};
