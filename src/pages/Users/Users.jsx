import PageHeader from "@/components/Global/PageHeader";
import Panel from "@/components/UI/Panel";
import { FaSearch, FaRegSave, FaTrashAlt, FaEdit } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import useToggle from "@/hooks/useToggle";
import ModalSm from "@/components/UI/ModalSm";
import Pagination from "@/components/UI/Pagination";

const Users = () => {
  const [showModal, toggleShowModal] = useToggle(false);
  return (
    <>
      {showModal && (
        <ModalSm onClose={() => toggleShowModal(false)}>
          <>
            <PageHeader title="Disability Type Details" />
            <form className="mb-3">
              <div className="mb-3 fv-plugins-icon-container">
                <label
                  htmlFor="email"
                  className="form-label font-weight-bold fs-6"
                >
                  Disability Type
                </label>
                <input name="d-type" type="text" className="form-control" />
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
              </div>

              <div className="mb-3"></div>

              <button
                type="button"
                className="btn btn-custom w-100 font-weight-bold fs-7 d-flex align-items-center justify-content-center gap-1"
              >
                <FaRegSave className="fs-5" /> Save
              </button>

              <input type="hidden" data-has-listeners="true" />
            </form>
          </>
        </ModalSm>
      )}
      <PageHeader title="Users" />
      <Panel title="Search">
        <form className="pd-2">
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm custom-font"
                  // value={form.name}
                  // onChange={updateParams}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm custom-font"
                  // value={form.name}
                  // onChange={updateParams}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm custom-font"
                  // value={form.name}
                  // onChange={updateParams}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm custom-font"
                  // value={form.name}
                  // onChange={updateParams}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">Role</label>

                <select className="form-control form-control-sm custom-font">
                  <option value="">Please Select</option>
                  <option value={1}>Admin</option>
                  <option value={2}>PWD</option>
                  <option value={3}>Employer</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div
                className="d-flex gap-2 align-items-center"
                style={{
                  marginTop: "1.7rem",
                }}
              >
                <button
                  className="btn btn-custom d-flex align-items-center gap-1"
                  type="submit"
                >
                  <FaSearch className="fs-6" /> Search
                </button>
                <button
                  className="btn btn-pink"
                  // onClick={() => {
                  //   notif.custom(`data has been inserted`);
                  // }}
                  // onClick={handleRefresh}
                  type="button"
                >
                  <LuRefreshCcw className="fs-6" /> Refresh
                </button>
              </div>
            </div>
          </div>
        </form>
      </Panel>
      <div className="my-2 d-flex align-items-center justify-content-end">
        <button
          className="btn btn-primary btn-md d-flex align-items-center gap-1"
          onClick={() => toggleShowModal(true)}
        >
          <FaPlus className="fs-6" /> Add New
        </button>
      </div>
      <Panel>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-td-valign-middle dataTable no-footer dtr-inline collapsed">
                <thead>
                  <tr>
                    <th className="text-center font-weight-bold fs-7">ID</th>
                    <th className="text-center font-weight-bold fs-7">
                      Full Name
                    </th>
                    <th className="text-center font-weight-bold fs-7">Role</th>
                    <th className="text-center font-weight-bold fs-7">Email</th>
                    <th className="text-center font-weight-bold fs-7">
                      Birthdate
                    </th>
                    <th className="text-center font-weight-bold fs-7">
                      Gender
                    </th>
                    <th className="text-center font-weight-bold fs-7">
                      Phone No.
                    </th>
                    <th className="text-center font-weight-bold fs-7">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center font-weight-bold">2.</td>
                    <td className="text-center font-weight-bold">
                      DELA CRUZ, JUAN GONZALES
                    </td>
                    <td className="text-center font-weight-bold">PWD</td>
                    <td className="text-center font-weight-bold">
                      delacruzjuan@gmail.com
                    </td>
                    <td className="text-center font-weight-bold">
                      January 1, 2000
                    </td>
                    <td className="text-center font-weight-bold">MALE</td>
                    <td className="text-center font-weight-bold">
                      09051234567
                    </td>
                    <td className="text-center font-weight-bold">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          className="btn btn-warning"
                          // onClick={}
                          type="button"
                        >
                          <FaEdit className="fs-6" /> Update
                        </button>
                        <button
                          className="btn btn-danger"
                          // onClick={}
                          type="button"
                        >
                          <FaTrashAlt className="fs-6" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center font-weight-bold">1.</td>
                    <td className="text-center font-weight-bold">
                      DOE, JANE FIN
                    </td>
                    <td className="text-center font-weight-bold">Employer</td>
                    <td className="text-center font-weight-bold">
                      doejane12@gmail.com
                    </td>
                    <td className="text-center font-weight-bold">
                      February 12, 1999
                    </td>
                    <td className="text-center font-weight-bold">FEMALE</td>
                    <td className="text-center font-weight-bold">
                      09138940398
                    </td>
                    <td className="text-center font-weight-bold">
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          className="btn btn-warning"
                          // onClick={}
                          type="button"
                        >
                          <FaEdit className="fs-6" /> Update
                        </button>
                        <button
                          className="btn btn-danger"
                          // onClick={}
                          type="button"
                        >
                          <FaTrashAlt className="fs-6" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination />
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
};

export default Users;
