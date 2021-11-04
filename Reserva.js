import React, { Component } from "react";
import ReactDOM from "react-dom";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const [startDate, setStartDate] = useState(new Date());

class FormReserva extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    isGoing: false
    numPersonas: 1

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Reserva realizada: " + this.state.value);
    event.preventDefault();
  }
  

  render() {
    return (
      <>
        {/* */}
        <div>
          <title>Reservaciones</title>
          <div className="container">
            <div className="col">
              <div className="col-sm">
                <h1 id="cont">Reservaciones</h1>
              </div>
              <div className="row">
                <div className="col-sm">
                  <p>
                    Si tienes alguna duda por favor háznoslo saber llenando el formulario 
                    a continuación:
                    <br />
                  </p>
                </div>
                <div className="col-sm">
                  <div className="container" id="bcont">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">

                        <label>
                          Nombre Completo:
                          <input required type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

                        <label>
                          Correo Electronico:
                          <input required type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

                        <label>
                          Telefono:
                          <input required type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

                        <label>
                          Asunto:
                          <input  required type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

                        <label>
                          Seleccione el servicio:
                          <select required value={this.state.value} onChange={this.handleChange}>            
                            <option value="aniversario">Aniversario</option>
                            <option value="cenaAmigos">Cena con Amigos</option>
                            <option value="celebracionCumpleaños">Celebracion de Cumpleaños</option>
                            <option value="declaracionPropuesta">Declaraciones o Propuestas</option>
                            <option value="despedida">Despedidas</option>
                            <option value="fiestaInfantil">Fiestas Infantiles</option>
                          </select>
                        </label>

                        <br />
                        
                        <label>
                          Numero de personas:
                          <input required name="numPersonas" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                        </label>

                        <br />

                        <label>
                          Fecha:
                          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>

                        <br />

                        <label>
                          Indicaiones especiales:
                          <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

                        <label>
                          Acepto términos y condiciones
                          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                        </label>

                        <input type="submit" value="Enviar" />

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <FormReserva />,
  document.getElementById('root')
);