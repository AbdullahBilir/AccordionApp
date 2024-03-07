import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function Question({ eleman }) {
  const [showinfo, setinfo] = useState(false);
  return (
    <div className="question">
      <header className="question-flex">
        <h5>{eleman.title}</h5>
        <button
          className="btn-plus"
          onClick={() => {
            setinfo(!showinfo);
          }}
        >
          {showinfo ? <FaCircleMinus /> : <FaCirclePlus />}
        </button>
      </header>
      {showinfo ? <p>{eleman.info}</p> : ""}
    </div>
  );
}

export default Question;
