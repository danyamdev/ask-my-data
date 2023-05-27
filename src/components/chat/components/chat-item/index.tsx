import React from 'react';

import { TAsk } from '../../../../api/types/ask';

import './styles.scss';

type TProps = {
  ask: TAsk;
  index: number;
};

const ChatItem: React.FC<TProps> = ({ index, ask }) => {
  return (
    <div className="chat-item">
      <div className="chat-item-inner">
        {index} -
        <span dangerouslySetInnerHTML={{ __html: ask as any }} />
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
};

export default ChatItem;
