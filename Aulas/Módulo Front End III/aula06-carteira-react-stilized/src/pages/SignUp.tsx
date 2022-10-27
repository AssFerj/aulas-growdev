import React from 'react';

const SignUp: React.FC = () => {
    return (
        <div>
            <form>
                <div>
                    <h1>Bem vindo!</h1>
                    <h3>Crie sua conta</h3>
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
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp;