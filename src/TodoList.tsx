import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValue = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValue)}>
        <input
          {...register("toDo", { required: "please write a todo" })}
          placeholder="write a to do"
        />
        <button>Add</button>
      </form>
      <p>{errors?.toDo?.message}</p>
    </div>
  );
}

export default ToDoList;
