export default function TodoItem({ item, index, onChange }) {
    return (
        <div>
            <input type="checkbox" checked={item.completed} onChange={onChange}/>
            {item.title}
        </div>
    )
}