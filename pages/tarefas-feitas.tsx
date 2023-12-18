import Link from "next/link"
import Layout from "../components/Layout"
import List from "../components/List"
import Navbar from "../components/Navbar"

const TarefasFeitas = () => {
    
    return (      
    <Layout title="Bem vindo">
      <Navbar />
      <h1>Tarefas Concluídas</h1>
      <p>Veja as tarefas que você já concluiu.</p>
    </Layout>
 
    )
}

export default TarefasFeitas