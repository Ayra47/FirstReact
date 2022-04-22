import Modal from 'react-modal';
import { useRef, useState } from "react";

// модальное окно. По стандарту фолс


function ToDo({ todo, toggleTask, removeTask }) {

    let [modalActive, setModalActive] = useState(false);
    let deletefunc = useRef(null);

    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            {/* Удаление элементов */}
            <div className="item-delete">

                <div onClick={
                () => { setModalActive(true);
                        deletefunc.current = () => {
                            removeTask(todo.id);
                        }
                      }
                }>x</div>
            </div>

            <Modal 
				isOpen={modalActive} 
				onRequestClose={() => setModalActive(false)}>
					Вы уверены?
					<button onClick={() => {
                        if(deletefunc.current) {
                            deletefunc.current();
                        }
                    } }>Да</button>
					<button onClick={() => setModalActive(false)}>Нет</button>
			</Modal>
        </div>
    )
}

export default ToDo