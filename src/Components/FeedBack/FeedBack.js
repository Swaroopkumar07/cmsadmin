import React, { useContext, useState } from 'react';
import './FeedBack.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { MainContext } from '../../ContextStore/MainContext';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function FeedBack() {
  const { feedBackMsg, setFeedBackMsg } = useContext(MainContext);
  const [showModal, setShowModal] = useState(false);
  const [toAddress, setToAddress] = useState('');
  const [replyMsg, setReplyMsg] = useState('');

  const handleFeedBackMsg = (event) => {
    setFeedBackMsg(event.target.value);
  };

  const handleSendButton = () => {
    if (feedBackMsg) {
      toast.success('FeedBack Has Sent Successfully');
    } else {
      toast.error('Please Enter Your Feedback');
    }
  };

  const handleReply = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setToAddress('');
    setReplyMsg('');
  };

  const handleSendReply = () => {
    // Handle sending reply logic here
    handleCloseModal();
  };

  return (
    <div className='feedback_container'>
      <h3 style={{ textAlign: 'center' }}>FeedBacks</h3>
      <div className='feedBack_msg'>
        <p>
          <span>From:</span> 20131a05h0@gvpce.ac.in
        </p>
        <p>hello sir, could you please suggest me the best course</p>
        <div className='button_send'>
          <Button variant='contained' endIcon={<SendIcon />} onClick={handleReply}>
            Reply
          </Button>
        </div>
      </div>

      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

{showModal && (
  <div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={handleCloseModal}>
        &times;
      </span>
      <h2>Reply to Feedback</h2>
      <div className='input-container'>
      <p><span>To:</span>20131a05h0@gvpce.ac.in</p>
      </div>
      <div className='input-container'>
        <label htmlFor='replyMessage'>Reply:</label>
        <textarea
          id='replyMessage'
          placeholder='Type your reply here...'
          value={replyMsg}
          onChange={(e) => setReplyMsg(e.target.value)}
        ></textarea>
      </div>
      <div className='button_send'>
        <Button variant='contained' endIcon={<SendIcon />} onClick={handleSendReply}>
          Send
        </Button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
