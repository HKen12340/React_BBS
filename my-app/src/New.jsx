export function New(){
  const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads";

  const postFetch = () =>{
    let formData =  document.getElementById("thread_name").value;
    fetch(url,{
      method:'POST',
      body:JSON.stringify({"title":formData}),
        })
    .then((response)=>{   
      if(response.ok){   
        window.location.href="/"
      }
    })
  };

  return (
    <div>

<div className='header'>
        <h1 id='title'>掲示板</h1>
      </div>

      
      <form className="Create_Thread">
      <h1>スレッドを作る</h1>
      <br />
        <input type="text" id="thread_name"/>
        <input type="button" className="button" name="title" value="スレッド作成" onClick={postFetch}/>
      </form>
    </div>
  );
};
