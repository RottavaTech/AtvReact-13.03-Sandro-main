import { useState } from "react";
import Botao from "./Botao";
import "./App.css";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
      if (!novaTarefa.trim()) return;
    
    const tarefaObj = {
      id: crypto.randomUUID(), 
      texto: novaTarefa,
      feita: false,
    }
    
    setTarefas([...tarefas, tarefaObj]);
    setNovaTarefa("");
  }

  const alternarStatus = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, feita: !tarefa.feita } : tarefa
      )
    )
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>Minhas Tarefas</h1>
        
        <div className="input-group">
          <input
            type="text"
            placeholder="oque precisa ser feito?????"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <Botao onClick={adicionarTarefa}>Adicionar</Botao>
        </div>

        <ul className="todo-list">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className={tarefa.feita ? "feita" : ""}>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={tarefa.feita}
                  onChange={() => alternarStatus(tarefa.id)}
                />
              </label>
              
              <span className="texto-tarefa">{tarefa.texto}</span>
              
              <Botao 
                onClick={() => removerTarefa(tarefa.id)} 
                className="btn-remover"
              >
                Remover
              </Botao>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}