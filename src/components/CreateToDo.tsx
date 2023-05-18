import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm {
  toDo: string;
}

function CreateTodo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValue = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      {
        text: toDo,
        id: Date.now(),
        category: "TODO",
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValue)}>
      <input
        {...register("toDo", { required: "please write a todo" })}
        placeholder="write a to do"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateTodo;
