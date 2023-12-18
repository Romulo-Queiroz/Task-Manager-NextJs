import Link from 'next/link'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'

const IndexPage = () => (

  <Layout>
    <Navbar />
    <h1>Olá!</h1>
    <p>Seja bem-vindo ao nosso site.</p>
    <p>
      <a href='/tarefas-feitas'>Tarefas Concluídas</a>
    </p>
  </Layout>
)

export default IndexPage
