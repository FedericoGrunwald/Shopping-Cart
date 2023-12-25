import { v4 as uuidv4 } from "uuid";

const Rating = ({ value, text, color, backgroundColor }) => {
  return (
    <div className='bg-slate-200'>
      {[1, 2, 3, 4, 5].map((rate) => (
        <span className="bg-slate-200" key={uuidv4()}>
          <i
            style={{ color, backgroundColor}}
            className={ 
              value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span className="bg-slate-200 font-bold">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFA41C",
  backgroundColor: "rgb(226 232 240)"
};

export default Rating;