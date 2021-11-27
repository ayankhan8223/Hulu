import Thumnail from "./Thumnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {results.map((data) => (
        <Thumnail key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Results;
