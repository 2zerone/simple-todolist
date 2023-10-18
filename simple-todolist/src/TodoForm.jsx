export default function TodoForm({ onSubmit, newTodo, onChangeNewTodo }) {
    return (
        <form onSubmit={onSubmit}>
            <input value={newTodo} onChange={onChangeNewTodo}/>
            <button>추가</button>
          </form>
    )
}