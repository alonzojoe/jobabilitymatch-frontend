const PageContainer = ({ children }) => {
  return (
    <div
      id="page-container"
      className="page-container fade page-without-sidebar page-header-fixed page-with-top-menu"
    >
      {children}
    </div>
  );
};

export default PageContainer;
