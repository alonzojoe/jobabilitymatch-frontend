import { useState, forwardRef, useImperativeHandle } from "react";
import ReactQuill from "react-quill-new";

const JobDescriptionEditor = forwardRef(({ error, jdDescription }, ref) => {
  const [description, setDescription] = useState(() => jdDescription ?? "");

  useImperativeHandle(ref, () => ({
    getDescription: () => description,
  }));

  const handleEditorChange = (content) => {
    setDescription(content);
  };

  return (
    <div
      className={`mb-2 fv-plugins-icon-container ${
        error.description ? "group-invalid" : ""
      }`}
    >
      <label htmlFor="title" className="form-label font-weight-bold fs-6">
        Job Description <span className="text-danger">*</span>
      </label>
      <ReactQuill
        theme="snow"
        value={description}
        onChange={handleEditorChange}
        style={{ height: "200px", width: "100%" }}
      />
      <div className="mt-5 font-weight-bold text-validation">
        {error.description}
      </div>
    </div>
  );
});

export default JobDescriptionEditor;
