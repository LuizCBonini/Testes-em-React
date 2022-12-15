import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../state/Hooks/useListaDeParticipantes';
import { useResultadoSorteio } from '../state/Hooks/useResultadoSorteio';
import Sorteio from './Sorteio';
jest.mock('../state/Hooks/useListaDeParticipantes.ts', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
jest.mock('../state/Hooks/useResultadoSorteio.ts', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})
describe('Na pagina de sorteio:', () => {
    const participantes = [
        'Ana',
        'Catarina',
        'Jorel'
    ]

    const resultado = new Map([
        ['Ana', 'Jorel'],
        ['Jorel', 'Catarina'],
        ['Catarina', 'Ana']
    ])
    
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
    })
    test('Todos os participantes podem exibir seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio/>
            </RecoilRoot>
        )
        
        const opcoes = screen.queryAllByRole('option')
        
        expect(opcoes).toHaveLength(participantes.length)
    })
    test('O amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sorteio/>
            </RecoilRoot>
        )
        const select = screen.getByPlaceholderText('Selecione o seu nome')
        expect(select).toBeRequired()
        fireEvent.change(select, {
            target: {
                value: participantes[0]
            }
        })
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        const amigoSecreto = screen.getByRole('alert')
        expect(amigoSecreto).toBeInTheDocument()
    })
})