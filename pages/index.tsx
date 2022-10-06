import type { NextPage } from 'next'
import Lista from "../src/components/Lista/Lista";
import {Box} from "@mui/material";
import {Professor} from '../src/components/@types/professor';

const Home: NextPage = () => {
    const professores: Professor[] = [
        {
        id: 1,
        nome: "Harry Yazawa",
        foto: "https://github.com/harryazawa.png",
        descricao: "Professor de Inglês e Programação",
        valor_hora: 100
        }
    ]

    return (
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={professores}></Lista>
      </Box>
  )
}

export default Home
