const PageHeader = ({ title }) => {
  return (
    <h1 className="page-header bg-custom d-inline-block rounded-custom pd-1 pdx-3 text-white">
      {title}
    </h1>
  );
};

export default PageHeader;
