import React from 'react'

function ConditionalRendering() {
    const num = 12;
   

    if(num % 2 === 0) {
        return <div>{num}은 짝수</div>;

    } else {
        return <div>{num}은 홀수</div>;
    }
  return 
    <div></div>

}

export default ConditionalRendering