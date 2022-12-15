import { realizarSorteio } from "./realizarSorteio"

describe('Dado um sorteio de amigo secreto', () => {
    test('Que cada participante não sorteie o próprio nome', () => {
        const participante = [
            'Ana',
            'Catarina',
            'Nico',
            'Jorel',
            'Irmão do Jorel',
            'Vovó Juju'
        ]

        const sorteio = realizarSorteio(participante)
        participante.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})