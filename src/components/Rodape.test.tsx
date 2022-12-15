import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../state/Hooks/useListaDeParticipantes';
import Rodape from './Rodape';

jest.mock('../state/Hooks/useListaDeParticipantes.ts', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})
jest.mock('../state/Hooks/useSorteador.ts', () => {
    return {
        useSorteador: () => mockSorteio
    }
})


describe('Onde não existem participantes suficientes', () => {
    // const participantes = ['Ana', 'Catarina'];
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('A brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('Quando existem participantes suficiente', () => {
    const participantes = ['Ana', 'Catarina', 'Lily'];
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('A brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        )
        
        const botao = screen.getByRole('button')
        
        expect(botao).not.toBeDisabled()
    })
    
    test('A brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        )
    
        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})
