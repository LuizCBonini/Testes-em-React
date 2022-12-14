import { errorState } from './../atom';
import { useRecoilValue } from "recoil"

export const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(errorState);
    return mensagem
}