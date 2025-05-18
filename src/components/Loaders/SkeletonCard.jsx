import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = ({ count = 1, height = "220px", width = "100%" }) => {
  return (
    <SkeletonTheme baseColor="#E8EAED" highlightColor="#D2D5DB">
      <Skeleton
        height={height}
        width={width}
        className="sekeleton-class"
        count={count}
        containerClassName="flex-1"
      />
    </SkeletonTheme>
  );
};

export default SkeletonCard;
