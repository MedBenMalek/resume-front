import Triangle from '../../assets/triangle.png';
import './Message.scss';

const Message = () => {
  return (
    <div className="messages-container">
      <div className="messages">
        Hello, My name is mohamed ben malek
      </div>
      <img src={Triangle} className="triangle" alt="triangle" />
    </div>
  );
}

export default Message;