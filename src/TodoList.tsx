import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  toDo: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      return setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server offline" });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "email is required",
            minLength: { value: 5, message: "your email is too short" },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver email",
            },
          })}
          placeholder="write a email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: { value: 5, message: "your password is too short" },
          })}
          placeholder="write a password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "password1 is required",
            minLength: { value: 5, message: "your password1 is too short" },
          })}
          placeholder="write a password1"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("userName", {
            required: "userName is required",
            minLength: { value: 5, message: "your userName is too short" },
            validate: (value) =>
              value.includes("nico") ? "no nicos allowed" : true,
          })}
          placeholder="write a userName"
        />
        <span>{errors?.userName?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
