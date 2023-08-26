import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
