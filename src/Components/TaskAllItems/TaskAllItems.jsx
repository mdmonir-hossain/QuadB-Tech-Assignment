
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/task/taskSlice";
const TaskAllitems = ({ task }) => {
 
  const dispatch = useDispatch();
  const handleTaskRemove = () => {
    dispatch(deleteTask({ id: task.id }));
  };
  return (
    <li 
      className="w-full bg-white/80 flex justify-between items-center gap-4 px-4 py-3 rounded-lg"
    >
      <div>
          <span>{task.text}</span>
      </div>
      <button
        onClick={handleTaskRemove}
        className="hover:bg-gray-300/20 p-2 rounded-md transition-colors duration-200"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskAllitems;
