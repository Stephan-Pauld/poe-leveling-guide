import React from "react";

function ActSelect({ setActSelect }) {
  const acts = [
    "act1",
    "act2",
    "act3",
    "act4",
    "act5",
    "act6",
    "act7",
    "act8",
    "act9",
    "act10",
  ];

  return (
    <>
      <div className="flex justify-center">
        {acts.map((act) => (
          <div
            key={act}
            onClick={() => setActSelect(act)}
            className="p-[30px] bg-black m-[9px] rounded-xl text-[#d59928] my-[70px] cursor-pointer"
          >
            <h3>{act}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default ActSelect;
