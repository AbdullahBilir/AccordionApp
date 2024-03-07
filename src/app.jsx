import { useState } from "react";
import questions from "./data";
import Question from "./Question";

function AppJs() {
  const [quest, newquest] = useState(questions);

  return (
    <>
      <main>
        <section className="container">
          <h1 className="title">Questions</h1>
          <div className="question-div">
            {quest.map((eleman) => {
              return <Question key={eleman.id} eleman={eleman}></Question>;
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default AppJs;
