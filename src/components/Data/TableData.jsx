export const LoadingRow = ({ colSpan }) => (
  <tr>
    <td
      className="text-center align-middle fw-normal p-1 m-0"
      colSpan={colSpan}
    >
      <div className="d-flex align-items-center justify-content-center my-2">
        <div className="sk-wave sk-primary">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="sk-wave-rect"></div>
          ))}
        </div>
      </div>
    </td>
  </tr>
);

export const ErrorRow = ({ colSpan }) => (
  <tr>
    <td
      className="text-center font-weight-bold fs-7 align-middle text-danger pd-2 m-0"
      colSpan={colSpan}
    >
      Something went wrong :(
    </td>
  </tr>
);

export const EmptyRow = ({ colSpan }) => (
  <tr>
    <td
      className="text-center font-weight-bold fs-7 align-middle  pd-2 m-0"
      colSpan={colSpan}
    >
      No records found.
    </td>
  </tr>
);
