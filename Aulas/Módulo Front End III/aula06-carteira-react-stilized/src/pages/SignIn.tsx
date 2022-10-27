import React from 'react';

const SignIn: React.FC = () => {
    return (
        <div>
            <form>
                <div>
                    <h1>Bem vindo!</h1>
                    <h3>Acesse sua conta</h3>
                </div>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" id="email-log" required/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="pasword" id="password-log" required/>
                </div>
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;