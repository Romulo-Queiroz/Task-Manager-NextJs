import Link from "next/link"
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { ListTaskDoneService } from "../../Services/list-task-done.service";

const ListTasks = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const listTaskDoneService = new ListTaskDoneService();
    const subscription = listTaskDoneService.listTaskDone().subscribe(
      data => setTaskList(data),
      error => console.error(error)
    );
  
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  

  return (
    <Layout title="Tarefas Concluídas">
      <Navbar />
      <div className="container bg-light vh-100">
        <h2 className="text-center p-3">Tarefas Concluídas</h2>
        <div className="p-2">
          <ul className="myUl mb-3 card bg-transparent">
            {taskList.map(data => (
              <li key={data.id} className="m-3">
                <p className="id">#{data.taskId}</p>
                <h4 className="tittle">{data.taskTitle}</h4>
                <p className="description"><strong>Description:</strong> {data.taskDescription}</p>
                <p className="category"><strong>Categoria:</strong> {data.categoryName}</p>
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

export default ListTasks;
