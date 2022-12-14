import React, { useRef, useState } from 'react'
import { useAdicionaParticipante } from '../state/Hooks/useAdicionarParticipante'
import { useMensagemDeErro } from '../state/Hooks/useMensagemDeErro'

const Formulario = () => {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionaParticipante()

  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
        <input 
          ref={inputRef}
          value={nome}
          onChange={evento => setNome(evento.target.value)}
          type="text" 
          placeholder='Insira os nomes dos participantes'
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
    </form>
  )
}

export default Formulario