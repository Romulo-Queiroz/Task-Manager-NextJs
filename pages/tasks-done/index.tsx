import Link from "next/link"
import Layout from "../../components/Layout"
import List from "../../components/List"
import Navbar from "../../components/Navbar"

const ListTasks = () => {
    
    return (      
    <Layout title="Tarefas Concluidas">
        <Navbar />
        <div className="container bg-light vh-100 ">
            <h2 className="text-center p-3">Tarefas Concluídas</h2>
            <div className="p-2">
                <ul className="myUl mb-3 card bg-transparent">
                    <li className="m-3">  
                        <p className="id"># ID</p>
                        <h4 className="tittle">Título</h4>
                        <p className="description"><strong>Description:</strong> Descrição</p>
                        <p className="category"><strong>Categoria:</strong> Categoria</p>
                        <div className="button-group">
                        <button className="btn btn-success">Feito</button>
                        <button className="btn  btn-warning">Editar</button>
                        <button className="btn btn-danger">Excluir</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </Layout>
    )
}

export default ListTasks