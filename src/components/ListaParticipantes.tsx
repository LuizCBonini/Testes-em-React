import React from 'react'
import { useListaDeParticipantes } from '../state/Hooks/useListaDeParticipantes'

const ListaParticipantes = () => {

    const participantes: string[] = useListaDeParticipantes()
  return (
        <ul>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}

export default ListaParticipantes