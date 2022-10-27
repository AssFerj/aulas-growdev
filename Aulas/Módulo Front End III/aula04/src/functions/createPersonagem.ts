import Personagem from "../types/personagem";

function createPersonagem(nomeEntrada: string, idadeEntrada: number, poderEntrada: string): Personagem{
    const personagem: Personagem = {
        id: Math.floor(Date.now() / 1000),
        name: nomeEntrada,
        age: idadeEntrada,
        power: poderEntrada
    };
    return personagem;
};
export default {createPersonagem};