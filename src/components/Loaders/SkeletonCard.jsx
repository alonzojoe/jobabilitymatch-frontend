import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = ({ count = 1 }) => {
  return (
    <SkeletonTheme baseColor="#E8EAED" highlightColor="#D2D5DB">
      <p>
        <Skeleton height={`220px`} className="sekeleton-class" count={count} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
