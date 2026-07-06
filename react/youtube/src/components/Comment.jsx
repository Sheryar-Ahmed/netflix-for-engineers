import React from "react";
import { useForm } from "react-hook-form";

const Comment = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitComment = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitComment)} className="flex flex-col gap-4 max-w-1/3 bg-amber-100 text-black">
      <input
      className="border"
        placeholder="yourname"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <textarea
            className="border"

        placeholder="Add a comment..."
        {...register("comment", {
          required: "Comment cannot be empty",
          minLength: { value: 3, message: "Too short" },
        })}
      />
      {errors.comment && <p>{errors.name.comment}</p>}
      <button className="bg-amber-300" type="submit">Comment</button>
    </form>
  );
};

export default Comment;
