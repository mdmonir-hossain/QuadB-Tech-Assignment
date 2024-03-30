
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TaskAllitems from "../TaskAllItems/TaskAllItems";

function TaskList() {

  const tasks = useSelector((state) => {
    return state.tasks;
  });

  return (
    <div className="w-[90%] md:w-[60%] p-2">
      <ul className="flex flex-col gap-3 my-3 ">
        {tasks.map((task) => (
            
            <TaskAllitems key={task.id} task={task} />
            
        ))}
      </ul>
    </div>
  );
}
export default TaskList;