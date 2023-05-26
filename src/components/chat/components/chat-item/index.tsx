import React from 'react';

import graphImg from '../../../../assets/images/graph.png';

import './styles.scss';

const ChatItem: React.FC = () => {
  return (
    <div className="chat-item">
      <div className="chat-item-inner">
        <div className="question">
          <span>Which industry leads to the highest number of defaults?</span>
          <span>Result | Code</span>
        </div>
        <div className="response">
          <img src={graphImg} alt="Graph-Img" />
          <span>
            <b>Insights</b>: The majority of the loans rans from $8000 to $20 000.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
