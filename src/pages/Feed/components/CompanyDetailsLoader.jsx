import SkeletonCard from "@/components/Loaders/SkeletonCard";

const CompanyDetailsLoader = () => {
  return (
    <div className="cmp-container">
      <SkeletonCard height="80px" width="50%" />
      <div className="mt-3">
        <SkeletonCard height="32.59px" width="15%" />
      </div>
      <div className="cmp-details-container mt-5">
        <SkeletonCard height="32.59px" width="30%" />
        <SkeletonCard height="32.59px" width="30%" />
      </div>
      <div className="cmp-details-container">
        <SkeletonCard height="70.59px" width="90%" />
        <SkeletonCard height="70.59px" width="90%" />
      </div>
      <div className="mt-3">
        <SkeletonCard height="32.59px" width="15%" />
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <div className="company-job-container">
            <SkeletonCard height="200px " width="300px" />
            <SkeletonCard height="200px " width="300px" />
            <SkeletonCard height="200px " width="300px" />
            <SkeletonCard height="200px " width="300px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsLoader;
