const Panel = ({ title = "", children }) => {
  return (
    <div className="panel panel-inverse">
      <div className="panel-heading">
        <h4 className="panel-title">{title}</h4>
        <div className="panel-heading-btn">
          <a
            href="javascript:;"
            className="btn btn-xs btn-icon btn-circle btn-default"
            data-click="panel-expand"
          >
            <i className="fa fa-expand"></i>
          </a>
          {/* <a
            href="javascript:;"
            className="btn btn-xs btn-icon btn-circle btn-success"
            data-click="panel-reload"
          >
            <i className="fa fa-redo"></i>
          </a>
          <a
            href="javascript:;"
            className="btn btn-xs btn-icon btn-circle btn-warning"
            data-click="panel-collapse"
          >
            <i className="fa fa-minus"></i>
          </a>
          <a
            href="javascript:;"
            className="btn btn-xs btn-icon btn-circle btn-danger"
            data-click="panel-remove"
          >
            <i className="fa fa-times"></i>
          </a> */}
        </div>
      </div>
      <div className="panel-body">{children}</div>
    </div>
  );
};

export default Panel;
