import React,{ useState } from "react";

function ToDoList(){

    const [tasks,settasks] = useState([]);
    const [newtask,setnewtask] = useState();

    function addtask(){
        if(newtask.trim()!=""){
            settasks(tasks => [...tasks,newtask])
            setnewtask("");
        }
    }
    function deletetask(index){
        const updatedtasks = tasks.filter((element,i)=> i!=index)
        settasks(updatedtasks)
    }
    function moveup(index){
        if(index>0){
                const updatetask = [...tasks];
                [updatetask[index],updatetask[index-1]]=[updatetask[index-1],updatetask[index]];
                settasks(updatetask)
        }
            }
    function movedown(index){
        if(index <tasks.length-1){
            const updatetask = [...tasks];
            [updatetask[index],updatetask[index+1]]=[updatetask[index+1],updatetask[index]]
            settasks(updatetask)
        }

    }
    function handletext(event){
        setnewtask(event.target.value);
    }
    return(
        <div className="todolist">
                <p>   .</p>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" className="input" placeholder="Enter task" value={newtask} onChange={handletext}/>
                <button className="add-button" onClick={addtask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deletetask(index)} >Delete</button>
                        <button className="up-button" onClick={() => moveup(index)} >👆</button>
                        <button className="down-button" onClick={() => movedown(index)} >👇</button>


                    </li>
                )}
            </ol>
            
        </div>
    );

}
export default ToDoList