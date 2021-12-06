import React, { useState } from "react";

import "./form.scss";

export default function form(props) {
  const [showtext, setshowtext] = useState(false);
  const [id, setId] = useState('GET');
  const [tag, setTag] = useState();


  // const onClick=(e)=>{

  //   crud(e)
  // }

  const crud = (e) => {
    if(tag){
      tag.classList.remove("clickedSpan");
    }
    let onClickID=e.target.id
    setTag(document.getElementById(onClickID))
    let tagone=document.getElementById(onClickID)
    tagone.classList.add("clickedSpan");
    setId(onClickID);
    console.log(onClickID);
    if (onClickID === "POST" || onClickID === "PUT") {
      setshowtext(true);
    } else {
      setshowtext(false);
    }
  };
  const handleSubmit = (e) => {
    console.log(id);
    let urlSend="testing purposes"
    if(e.target.url){
       urlSend=e.target.url.value;
    }
    e.preventDefault();
    const formData = {
      method: id,
      url: urlSend,
    };
    let textArea='';
    if (id === "POST" || id === "PUT") {
      textArea=e.target.textArea.value;
    }
    props.showLoading();
    props.handleApiCall(formData,textArea);
    props.hideLoading();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input  name="url" type="text" />
          <button data-testid='goBtn' type="submit">GO!</button>
        </label>
        <label className="methods" defaultValue="GET">
          <span id="GET" onClick={crud}>
            GET
          </span>
          <span id="POST" onClick={crud}>
            POST
          </span>
          <span id="PUT" onClick={crud}>
            PUT
          </span>
          <span id="DELETE" onClick={crud}>
            DELETE
          </span>
        </label>
        {showtext ? <input id="textArea" /> : null}
      </form>
    </>
  );
}

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;
