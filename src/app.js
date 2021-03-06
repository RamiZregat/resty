import React, { useEffect, useReducer, useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
import History from './components/history/history';



const initialState = {
  history: [],
};

function historyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD-TO-HISTORY':
      const history = [...state.history, payload.history];
      return { history };
    default:
      return state;
  }
}

function historyAction(history) {
  return {
    type: 'ADD-TO-HISTORY',
    payload: { history },
  };
}


export default function App(props){
const [data,setData]=useState(null);
const [requestParams,setRequestParams]=useState({});
const [requestBody,setRequestBody]=useState({});
const [loading,setLoading]=useState(false);
const [state, dispatch] = useReducer(historyReducer, initialState);




useEffect(async () => {
  if (requestParams.url) {
    if (requestBody) {
      const data = await axios[requestParams.method.toLowerCase()](requestParams.url, JSON.parse(requestBody));
      setData(data);
      dispatch(historyAction(requestParams));


    } else {
      const data = await axios[requestParams.method.toLowerCase()](requestParams.url);
      setData(data);
      dispatch(historyAction(requestParams));


    }
  }
  setLoading(false);
}, [requestParams]);




const callApi=(requestParams,requestBody)=>{
  const data = {
    count: 2,
    results: [
      {name: 'fake thing 1', url: 'http://fakethings.com/1'},
      {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    ],
  };
  setData(data);
  setRequestBody(requestBody);
  setRequestParams(requestParams);

}
const showLoading=()=>{
  setLoading(true);
}
const hideLoading=()=>{
  setLoading(false);
}

return (
  <React.Fragment>
    <Header />
    {loading?(
      <>
     <div class="spinner"></div>
      </>
    ):(
      <>
    <div data-testid='request'>Request Method: {requestParams.method}</div>
    <div data-testid='urlText'>URL: {requestParams.url}</div>
    <Form handleApiCall={callApi} showLoading={showLoading} hideLoading={hideLoading}/>
    {state.history.length ? <History history={state.history} /> : null}
    <Results data={data} />
    </>
    )}
    <Footer />
  </React.Fragment>
);
}


// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
