import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = ({ count = 1, height = "220px" }) => {
  return (
    <SkeletonTheme baseColor="#E8EAED" highlightColor="#D2D5DB">
      <p>
        <Skeleton height={height} className="sekeleton-class" count={count} />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
