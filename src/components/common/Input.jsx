import PropsType from "prop-types";
const Input = (props) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label htmlFor={props.label} className="text-sm text-slate-500">
        {props.children}
      </label>
      <input
        {...props.formik.getFieldProps(props.label)}
        type={props.type}
        name={props.label}
        className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
        placeholder={props.placeholder}
      />
      {props.formik.errors[props.label] &&
        props.formik.touched[props.label] && (
          <p className="text-sm text-rose-500 font-extrabold">
            {props.formik.errors[props.label]}
          </p>
        )}
    </div>
  );
};

Input.PropsType = {
  label: PropsType.string.isRequired,
  type: "text",
  formik: PropsType.object,
  placeholder: PropsType.string.isRequired,
};

export default Input;
