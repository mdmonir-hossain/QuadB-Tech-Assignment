import { useState } from "react";
import { addTask } from "../../features/task/taskSlice";
import { useDispatch } from "react-redux";
const TaskInput = () => {
const [formText, setFormText] = useState("");
    const dispatch = useDispatch();

const handleTaskSubmit = (e) => {
  e.preventDefault();
  if (formText.trim() === "") return;
  console.log(formText.trim());
dispatch(addTask(formText.trim()));
  formText("");
};

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleTaskSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Task Title"
                  className="input input-bordered"
                  onChange={(e) => setFormText(e.target.value)}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
