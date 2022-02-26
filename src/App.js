import React from 'react';
import './App.css';
import axios from 'axios';





function App() {

  const [data, setData] = React.useState(null);
  const makeGetRequest = async() => {
    console.log('request sen');

    axios({
      url: 'https://renecorsproxyserver.herokuapp.com/http://105.179.5.176/Rapport/23870.pdf',
    method: 'GET',
    responseType: 'blob',
    })
    .then((res)=>{

      console.log('res', res);

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.pdf');
      console.log('link', link);
      setData(url);
      // document.body.appendChild(link);
      // link.click();
    }).catch((err)=>{
      console.log('err', err);

    })
    // let data = res.data;
    // console.log(data);
  }
  const sendRequest = () => {
    console.log('run');
  }
  
  // makeGetRequest();

  return (
    <div className="App">
      <header className="App-header">
        <a href={data} download="file.pdf">Download file</a>
        <button onClick={makeGetRequest}>
          get data
        </button>
      </header>


    </div>

  );
}

export default App;
