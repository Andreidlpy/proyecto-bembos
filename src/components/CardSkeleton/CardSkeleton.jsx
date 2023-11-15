
import "./card-skeleton.css";
import Skeleton from "react-loading-skeleton";

export const CardSkeleton = ({ cardsSkeleton }) => {
  
  return Array(cardsSkeleton)
    .fill(0)
    .map((_ , index) => (
      <div className="card-skeleton" key={index}>
        <div className="top-col">
          <Skeleton height={250} />
        </div>
        <div className="title-col">
          <Skeleton width={120} height={30} />
        </div>
        <div className="medium-col">
          <Skeleton width={80} height={30} />
          <Skeleton width={50} height={20} />
        </div>
        <div className="card-skeleton__button">
          <Skeleton width={200} height={40} />
        </div>
      </div>
    ));
};
