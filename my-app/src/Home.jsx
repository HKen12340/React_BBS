import React, { useState } from 'react';

export const Home = () => {
  const [Thread,setThread] = useState(["スレッドがありません"]); 
  
  fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?limit=10")
  .then((res)=>{
    return(res.json());
  })
  .then((json)=>{
     setThread(json)
  })
  .catch(
    console.log("error")
  );
  const Items = Thread.map((breed) =>
      <div>
        <tr>
          <td>
            <a href={'/Thread?id=' + breed.id+"&title="+breed.title}>{breed.title}</a>
          </td>
        </tr>
      </div>
  );
  
  return (
    <div>
      <div className='header'>
        <h1 id='title'>掲示板</h1>
        <div id='CreateThread'>
          <a href='/New'>スレッド作成</a>
        </div>
      </div>
      <table>
      <h2>新着スレッド</h2>
      <div className='Items'>
        {Items}
      </div>
      </table>
    </div>
  );
};
