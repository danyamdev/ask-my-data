import React from 'react';

import './styles.scss';

type TProps = {
  answer: string;
};

const ChatItem: React.FC<TProps> = ({ answer }) => (
  <div className="chat-item">
    <div className="chat-item-inner">
      <span dangerouslySetInnerHTML={{ __html: answer }} />
      {/*<div className="question">*/}
      {/*  <span>Which industry leads to the highest number of defaults?</span>*/}
      {/*  <span>Result | Code</span>*/}
      {/*</div>*/}
      {/*<div className="response">*/}
      {/*  <img src={graphImg} alt="Graph-Img" />*/}
      {/*  <span>*/}
      {/*    <b>Insights</b>: The majority of the loans rans from $8000 to $20 000.*/}
      {/*  </span>*/}
      {/*</div>*/}
    </div>
  </div>
);

export default ChatItem;
