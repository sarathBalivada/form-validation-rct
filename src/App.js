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
    
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <div className="row">
        {/* form column */}
        <div className="column">
          <div className="left-half">
            <h1>COntact Us</h1>
            <p>We are open for suggestions</p>

            <form onSubmit={handleSubmit(onSubmit)} >
                {/* Name */}
                <p className="">                </p>

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
