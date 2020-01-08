import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    }
  };

  evento(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      this.setState({
        lista: this.state.lista.concat(e.target.value)
      });
      e.target.value="";
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className= "text-center" >TO DO LIST</h1>
            <input type="text" className="form-control" placeholder="Ingrese Tarea" onKeyDown={e => this.evento(e)} />
            <br />
            <ul className="list-group">
              {
                this.state.lista.length > 0 &&
                this.state.lista.map((lista, i) => {
                  return (
                    <li key={i} className="list-group-item- d-flex justify-content-between">
                      {lista}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
} export default App;
