import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './components/Boton'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const nombreFooter = "@Leonardo-Villagrán" ;
  const email ="mailto:leonardovillagran@yahoo.com";
  const titulo ="Desafío Estado de los componentes y eventos";

  const validarInputs = (event) => {
    //Validación;
    event.preventDefault();
    if (nombre === 'ADL' && contrasena === '252525') {
      setAlertType("success");
      setAlertMessage("Usted a ingresado al sitio correctamente.");
      setMostrar(true);
      setNombre("");
      setContrasena("");
    }
    else {
      setAlertType("danger");
      setAlertMessage("Los datos son incorrectos!");
      setMostrar(true);
      setNombre("");
      setContrasena("");
    }
  };

  return (
    <div className="App">
      <Header titulo={titulo}/>
      <div className="col-12 d-flex justify-content-center">
        <div className="card text-bg-light mb-3">
          <div className="card-body">
            <Form onSubmit={validarInputs}>
              <div className='container d-block m-3'>
                <Alert className='m-2' show={mostrar} variant={alertType}>
                  {alertMessage}
                </Alert>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <input className="form-control" type="text" name="nombre" placeholder="Ingrese su nombre"
                    onChange={(e) => setNombre(e.target.value)} value={nombre} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <input className="form-control" type="password" name="contraseña" placeholder="Password"
                    onChange={(e) => setContrasena(e.target.value)} value={contrasena} />
                </Form.Group>
                <Boton nombre={nombre} contrasena={contrasena} botonNombre="Iniciar sesión" />
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer nombreFooter={nombreFooter} email={email} />
    </div>
  );
}

export default App;
