import PageHeader from "@/components/General/PageHeader";
import Panel from "@/components/UI/Panel";
const DisabilityTypes = () => {
  return (
    <>
      <PageHeader title="Disability Types" />
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
                <thead>
                  <tr>
                    <th className="text-center font-weight-bold">ID</th>
                    <th className="text-center font-weight-bold">
                      Disablity Type
                    </th>
                    <th className="text-center font-weight-bold">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1.</td>
                    <td className="text-center">Hearing Impairment</td>
                    <td className="text-center">Win 95+</td>
                  </tr>
                  <tr>
                    <td className="text-center">2.</td>
                    <td className="text-center">Hearing Impairment</td>
                    <td className="text-center">Win 95+</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-2 pagination-container m-0 p-3 d-flex justify-content-between align-items-center">
                <div className="fs-7">Total Pages: 0</div>
                <div className="fs-7">
                  Page <span>0 of 0</span>
                </div>
                <div>
                  <ul className="pagination" style={{ marginBottom: "0" }}>
                    <li className="paginate_button page-item previous disabled">
                      <a href="#" className="page-link">
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="paginate_button page-item">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="paginate_button page-item">
                      <a href="#" className="page-link">
                        4
                      </a>
                    </li>
                    <li className="paginate_button page-item">
                      <a href="#" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="paginate_button page-item next">
                      <a href="#" className="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
};

export default DisabilityTypes;
