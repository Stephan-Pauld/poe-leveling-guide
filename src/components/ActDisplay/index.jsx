import { useEffect, useState } from "react";
import { acts } from "../../data/acts";
function ActDisplay({ actSelect }) {
  const [act, setAct] = useState(acts[actSelect]);

  useEffect(() => {
    const data = acts[actSelect];
    setAct(data);
  }, [actSelect]);

  const handleStepComplete = (clicked) => {
    let newAct = [...act];
    let stepObj = newAct.filter((step) => {
      return step.step === clicked.step;
    });
    let index = newAct.indexOf(clicked);
    stepObj[0].isCompleted = !stepObj[0].isCompleted;
    newAct.splice(index, 1, stepObj[0]);
    setAct(newAct);
  };
  return (
    <div className="flex items-center flex-col">
      {act.map((step) => (
        <div
          key={step.step}
          className={`flex rounded-md cursor-pointer w-[90%] bg-[grey] m-[10px] px-[50px] py-[20px] text-[#f6ffc5cf] ${
            step.isCompleted ? "opacity-10" : "opacity-100"
          }`}
          onClick={(e) => handleStepComplete(step)}
        >
          <h3
            className={`mr-[40px] ${
              step.isCompleted ? "opacity-50" : "opacity-100"
            }`}
          >
            {step.step}.
          </h3>
          <h4 className={`${step.isCompleted ? "opacity-50" : "opacity-100"}`}>
            {step.description}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ActDisplay;
