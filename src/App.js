import logo from './logo.svg';
import './App.css';
import {Button, Container, FormControl, InputGroup, Table}  from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactDOM from 'react-dom'
import { VictoryAxis, VictoryBrushContainer, VictoryChart, VictoryLine, VictoryZoomContainer } from 'victory';
import Tables from './commponent/table';

function App() {
    // Объявление новой переменной состояния «count»
    const [minit, setOneinput] = useState('-12');
    const [maxit, setTwoinput] = useState('12');
    const [shagit, setTreeinput] = useState('2');

  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <p>y=x/12</p>
        <InputGroup className="mb-3">
          <FormControl
            value={minit}
            placeholder="x От"
            aria-label="x От"
            aria-describedby="basic-addon1"
            onChange={(e) => setOneinput(e.target.value)} 
          />
          <FormControl
            value={maxit}
            placeholder="x До"
            aria-label="x До"
            aria-describedby="basic-addon1"
            onChange={(e) => setTwoinput(e.target.value)} 
          />
          <FormControl
            value={shagit}
            placeholder="Шаг"
            aria-label="Шаг"
            aria-describedby="basic-addon1"
            onChange={(e) => setTreeinput(e.target.value)} 
          />
        </InputGroup>
        <Button variant="outline-info" onClick={countRabbits}>Расчитать</Button>
        </Container>
        <div id='tableu'></div>
      </header>
    </div>
  );
  function countRabbits() {
    let min=Number(minit);
    let max=Number(maxit);
    let sha=Number(shagit);
    var arrX=[];
    var arrY=[];
    const tasks = [];
    var s=min;
    var p=0;
    for (s ; s< max ; s){
      s+=sha;
      arrX.push(s);
      var tyi=s/12;
      var tyip=tyi.toFixed(2);
      arrY.push(tyip);
      tasks[p]={ x: s, y: tyip };
      p++;
    } 
    const listItemsX = arrX.map((myLists)=>{   
      return (<td>{myLists}</td>);
    });
    const listItemsY = arrY.map((myLists)=>{   
      return (<td>{myLists}</td>);
    });
    const element = (
      <div>
        <br/>
        <Table striped bordered hover variant="dark" size="sm">
          <tbody>
            <tr>
              <td>X</td>
              {listItemsX}
            </tr>
            <tr>
              <td>Y</td>
              {listItemsY}
            </tr>
          </tbody>
        </Table>
        <Tables datas={tasks}/>
      </div>
    );
    ReactDOM.render(element, document.getElementById('tableu'));
    console.log(tasks);
  }
}

export default App;