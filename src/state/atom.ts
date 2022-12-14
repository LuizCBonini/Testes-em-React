import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const errorState = atom<String>({
    key: 'errorState',
    default: ''
})