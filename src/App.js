import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log("errors", errors);

  return (
    <div className="container">
      <div className="row">
        {/* form column */}
        <div className="column">
          <div className="left-half">
            <h1>Contact Us</h1>
            <p>We are open for inputs and suggestions</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <p className="input-label">Name *</p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 80,
                })}
              />
                 {errors.name && (
                <span className="error">
                  {errors.name.type === "required" &&
                    "This field is manditory."}
                  {errors.name.type === "maxLength" && "Less than 15 char"}
                </span>
              )}


              {/* E-mail */}
              <p className="input-label">Email *</p>
              <input
                className="input"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <span className="error">
                  {errors.email.type === "required" &&
                    "This field is manditory."}
                  {errors.email.type === "pattern" && "Invalid Email Address"}
                </span>
              )}

              {/* Submit */}
              <div>
                <input className="submit" type="submit" value="send Message" />
              </div>
            </form>
          </div>
        </div>

        {/* Image column */}
        <div className="column"></div>
      </div>
    </div>
  );
};

export default App;
