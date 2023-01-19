//components/Boton.jsx
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Botón que recibe props 

const Boton = (props) => {
    const nombre = props.nombre;
    const contrasena = props.contrasena;
    const botonNombre = props.botonNombre;

    //Si el nombre y la contraseña no son vacíos se activa el botón, en caso contrario queda desactivado.

    if(nombre!=="" && contrasena!==""){
        return (
            <><Button variant="dark" type="submit">
                {botonNombre}
            </Button><Form.Text className="text-muted p-2">
                    Presione el botón para ingresar.
                </Form.Text></>
        );
    }
    else{
        return (
            <><Button variant="danger" type="submit" disabled>
                Desactivado
            </Button><Form.Text className="text-muted p-2">
                    Ingrese datos para activar botón.
                </Form.Text></>
        );

    }

    
}

export default Boton;