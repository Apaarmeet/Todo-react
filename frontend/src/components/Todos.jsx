 
function Todos({todos}){
  return (
    <div>
        {todos.map((todos)=>{
            return <div>
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <button>{todos.complete ==true ? "Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
  )
}

export default Todos 