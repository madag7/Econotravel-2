import React, { useState } from "react";
import { FlexColumn, InputForm, LabelForm, Form1 } from "../styles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../servicios/auth.service";

export default function RegisterForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { nombre:name, email: email, password: password, rol:" ", permisos:" "};
        console.log(user)
        authService
          .register(user)
          .then((res) => {
            console.log(res.data);
            navigation("/login", { replace: true });
          })
          .catch(() => setError("Hubo un error"));
      };

    return(
        <Form1>
            <FlexColumn>
                <LabelForm>Nombre de usuario</LabelForm>
                <InputForm id='nombre' placeholder="Ingrese un nombre" type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <FlexColumn>
                <LabelForm>Correo electrónico</LabelForm>
                <InputForm id='email' placeholder="Ingrese un correo electrónico" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>

            <FlexColumn>
                <LabelForm>Contraseña</LabelForm>
                <InputForm id= 'contraseña' placeholder="Ingrese una contraseña" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn>
            
            <FlexColumn>
                <LabelForm>Confirme su contraseña</LabelForm>
                <InputForm id= 'chequearcontraseña' placeholder="Ingrese nuevamente su contraseña" type="password"/>
                <LabelForm>Texto de ayuda (opcional)</LabelForm>
            </FlexColumn> 
                <button onClick={handleSubmit}>Register</button>

                <p>Haz click <Link to='/login' className="link">aquí</Link>, si ya te has resgistrado</p>
        </Form1>
    )
}
