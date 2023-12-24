import Link from "next/link";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { ListTaskToDoService } from "../../Services/list-task-to-do.service";

const ListTasksToDo = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const listTaskDoneService = new ListTaskToDoService();
    const subscription = listTaskDoneService.listTaskToDo().subscribe(
      (data) => setTaskList(data),
      (error) => console.error(error)
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Layout title="Tarefas Concluidas">
      <Navbar />
      <div className="container bg-light vh-100 ">
        <h2 className="text-center p-3">Tarefas a serem feitas</h2>
        <div className="p-2">
          <button className="btn btn-primary mb-5">Criar Tarefa</button>
          <ul className="myUl mb-3 card bg-transparent">
            {taskList.map((data) => (
              <li key={data.id} className="m-3">
                <p className="id">#{data.taskId}</p>
                <h4 className="tittle">{data.taskTitle}</h4>
                <p className="description">
                  <strong>Description:</strong> {data.taskDescription}
                </p>
                <p className="category">
                  <strong>Categoria:</strong> {data.categoryName}
                </p>
                <div className="button-group">
                  <button className="btn btn-success">Feito</button>
                  <button className="btn btn-warning">Editar</button>
                  <button className="btn btn-danger">Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ListTasksToDo;
