const Input = ({ nameFa, labelName, label, formik, type = "text" }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label htmlFor={label} className="text-sm text-slate-500">
        {labelName}
      </label>
      <input
        {...formik.getFieldProps(label)}
        type={type}
        name={label}
        placeholder={nameFa}
        className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
      />
      {formik.errors[label] && formik.touched[label] && (
        <p className="text-sm text-rose-500 font-extrabold">
          {formik.errors[label]}
        </p>
      )}
    </div>
  );
};

export default Input;
