import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    isGoing: false,

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Campos ingresado correctamente: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        {/* */}
        <div>
          <title>Contacto</title>
          <div className="container">
            <div className="col">
              <div className="col-sm">
                <h1 id="cont">Contáctanos</h1>
              </div>
              <div className="row">
                <div className="col-sm">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, corrupti! In at sint odit accusamus esse optio aut
                    facilis eum, porro cupiditate omnis iure odio placeat
                    nostrum ad, repudiandae ex? Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Nostrum obcaecati omnis labore
                    impedit harum corporis ex quas sequi. Omnis, molestias amet.
                    Unde porro exercitationem, praesentium asperiores cum dolore
                    dolorem? Quam!
                  </p>
                  <br />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis obcaecati saepe voluptatum ut laudantium ad
                    laboriosam neque omnis, ullam nisi! Ipsa rem aliquam
                    dolores, dolorem necessitatibus voluptatibus vitae possimus
                    eos! Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Nesciunt, aliquam neque. Vero nemo debitis culpa
                    voluptas dolores? Illum veritatis vel, minima eveniet
                    molestias voluptatibus corporis? Quia sequi perspiciatis
                    facere fugit?
                  </p>
                </div>
                <div className="col-sm">
                  <div className="container" id="bcont">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
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
                          Asunto:
                          <input required type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

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
                          Su Mensaje:
                          <textarea required type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>

                        <br />

                        <label>
                          Acepto términos y condiciones
                          <input required name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                        </label>

                        <br />

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
  <FormContacto />,
  document.getElementById('root')
);