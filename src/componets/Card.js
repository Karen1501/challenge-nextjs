import React from "react";

const Card = ({ name, catFact, picture }) => {
  return (
    <div className="flex w-full justify-center p-4 flex-col rounded-lg bg-white shadow-sm border border-slate-200 gap-4">
      <div className="flex items-center gap-4 text-slate-800">
        <img
          src={picture.thumbnail}
          alt={`${name.first} ${name.last}`}
          className="w-9 h-9 rounded-full"
        />

        <h5 className="text-sm font-bold text-center">
          {name.first} {name.last}
        </h5>
      </div>
      <div>
        <p className="text-sm text-slate-600 font-light leading-normal m-0">
          {catFact}
        </p>
      </div>
    </div>
  );
};

export default Card;
