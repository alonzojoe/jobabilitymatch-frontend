import PageHeader from "@/components/Global/PageHeader";
const PwdForm = () => {
  return (
    <div>
      <PageHeader title="Personal Information" />
      <form className="mt-4 mb-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-8">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="lname" className="form-label fs-6">
                    Last Name
                  </label>
                  <input name="lname" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="fname" className="form-label fs-6">
                    First Name
                  </label>
                  <input name="fname" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="mname" className="form-label fs-6">
                    Middle Name
                  </label>
                  <input name="mname" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="bday" className="form-label fs-6">
                    Birthdate
                  </label>
                  <input name="bday" type="date" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="gender" className="form-label fs-6">
                    Gender
                  </label>
                  <select name="gender" className="form-control">
                    <option value="">Please Select</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="role" className="form-label fs-6">
                    Role
                  </label>
                  <select name="role" className="form-control">
                    <option value="">Please Select</option>
                    <option value={2}>PWD</option>
                    <option value={3}>EMPLOYER</option>
                  </select>
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="phone" className="form-label fs-6">
                    Phone
                  </label>
                  <input name="phone" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="mname" className="form-label fs-6">
                    PWD ID No.
                  </label>
                  <input name="mname" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-sm-12 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="address" className="form-label fs-6">
                    Address
                  </label>
                  <textarea
                    name="mname"
                    type="text"
                    className="form-control"
                    rows={2}
                  ></textarea>
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="row">
              <div className="col-12 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="lname" className="form-label fs-6">
                    Email
                  </label>
                  <input name="lname" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="password" className="form-label fs-6">
                    Password
                  </label>
                  <input name="password" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="mb-2 fv-plugins-icon-container">
                  <label htmlFor="password" className="form-label fs-6">
                    Confirm Password
                  </label>
                  <input name="password" type="text" className="form-control" />
                  <div className="mt-1 font-weight-bold text-validation"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="lname" className="form-label fs-6">
                Last Name
              </label>
              <input name="lname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="fname" className="form-label fs-6">
                First Name
              </label>
              <input name="fname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="mname" className="form-label fs-6">
                Middle Name
              </label>
              <input name="mname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="bday" className="form-label fs-6">
                Birthdate
              </label>
              <input name="bday" type="date" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="gender" className="form-label fs-6">
                Gender
              </label>
              <select name="gender" className="form-control">
                <option value="">Please Select</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="role" className="form-label fs-6">
                Role
              </label>
              <select name="role" className="form-control">
                <option value="">Please Select</option>
                <option value={2}>PWD</option>
                <option value={3}>EMPLOYER</option>
              </select>
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="phone" className="form-label fs-6">
                Phone
              </label>
              <input name="phone" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="mname" className="form-label fs-6">
                PWD ID No.
              </label>
              <input name="mname" type="text" className="form-control" />
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
          <div className="col-sm-12 mb-2">
            <div className="mb-2 fv-plugins-icon-container">
              <label htmlFor="address" className="form-label fs-6">
                Address
              </label>
              <textarea
                name="mname"
                type="text"
                className="form-control"
                rows={2}
              ></textarea>
              <div className="mt-1 font-weight-bold text-validation"></div>
            </div>
          </div>
        </div> */}

        <div className="mb-4"></div>

        <button
          type="button"
          className="btn btn-custom d-grid w-100 waves-effect waves-light"
        >
          Sign in
        </button>

        <input type="hidden" data-has-listeners="true" />
      </form>
    </div>
  );
};

export default PwdForm;
