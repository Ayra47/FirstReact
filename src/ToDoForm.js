import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    // Если нажать, то перечеркивается (вроде)
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    // Если нажать ентер, то handleSubmit (он ниже)
    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    // Кнопка сохранения
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение..."
                className='subtitle'
            />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm