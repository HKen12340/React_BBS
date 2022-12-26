import { useLocation, useParams } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

export function Thread(){

  const [searchParams] = useSearchParams();
  const threadId = searchParams.get("id");
  const thread_title = searchParams.get("title");
  console.log(thread_title);
  const [message,setmessage] = useState([""]); 
  
  fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/"+threadId+"/posts")
  .then((res)=>{
    return(res.json());
  })
  .then((data)=>{
    setmessage(data.posts);
  });
  
  let messages;
  if(message != null){
    messages =  message.map((breed) =>
    <div className="message">
      <p>{breed.post}</p>  
    </div>
  );
  }
  
  const postFetch = () =>{
    let formData =  document.getElementById("messge_form").value;
    
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/"+threadId+"/posts",{
      
      method:'POST',
      body:JSON.stringify({"post":formData}),
      })
    .then((response)=>{   
      if(response.ok){   
        console.log("POST OK!")
      }
    })
  };
  return (
  <div>

     <div className='header'>
        <h1 id='title'>掲示板</h1>
        <div id='CreateThread'>
          <a href='/New'>スレッド作成</a>
        </div>
      </div>
      
    <div className="main_area">
      <div className="mes_area">
      <h2>{thread_title}</h2>
        {messages}
      </div>
      <div className="Form_area">
        <form id="fetchForm">
          <textarea id="messge_form" rows="7" cols="50" placeholder="投稿しよう！"/><br></br>
          <input type="button" className="button" name="title" value="投稿" onClick={postFetch}/>
        </form>
      </div>
    </div>
  </div>
  );
};
