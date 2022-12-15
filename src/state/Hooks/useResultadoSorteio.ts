import { resultadoDoAmigoSecreto } from './../atom';
import { useRecoilValue } from 'recoil';
export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoDoAmigoSecreto)
}