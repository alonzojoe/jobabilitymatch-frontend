import SkeletonCard from "@/components/Loaders/SkeletonCard";

const DashboardLoader = ({ isMain = true }) => {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <SkeletonCard height="135px" />
        </div>
        <div className="col-xl-3 col-md-6">
          <SkeletonCard height="135px" />
        </div>
        <div className="col-xl-3 col-md-6">
          <SkeletonCard height="135px" />
        </div>
        <div className="col-xl-3 col-md-6">
          <SkeletonCard height="135px" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-xl-6 col-md-6 mb-1">
          <SkeletonCard height="471px" />
        </div>
        <div className="col-sm-12 col-xl-6 col-md-6 mb-1">
          <SkeletonCard height="471px" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-xl-6 col-md-6 mb-2">
          <SkeletonCard height="315px" />
        </div>
        <div className="col-sm-12 col-xl-6 col-md-6 mb-2">
          <SkeletonCard height="315px" />
        </div>
        {isMain && (
          <>
            <div className="col-sm-12 col-xl-6 col-md-6 mb-2">
              <SkeletonCard height="315px" />
            </div>
            <div className="col-sm-12 col-xl-6 col-md-6 mb-2">
              <SkeletonCard height="315px" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DashboardLoader;
