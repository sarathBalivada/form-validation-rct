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
                {/* Phone */}
                <p className="input-label">Phone</p>
              <input
                className="input"
                type="phone"
                placeholder="PhoneNumber"
                {...register("phone", {
                  pattern:   /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                })}
              />
              {errors.phone && 
                <span className="error">"Invalid phone number"</span>
              }
                {/* Messege */}
                <p className="input-label">Messege *</p>
              <input
                className="input"
                type="message"
                placeholder="Share your message"
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && 
                <span className="error">"This field is required"</span>
              }
              {/* Submit */}
              <div>
                <input className="submit" type="submit" value="Send Message" />
              </div> 
            </form>
          </div>
        </div>
        {/* Image column */}
        <div className="column">
          <img 
          src="https://images.unsplash.com/photo-1676049938075-5abc627ab292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="travel experiance"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
