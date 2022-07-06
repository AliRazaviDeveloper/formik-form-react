import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
  phoneNumber: "",
  password_confirm: "",
};

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object({
    username: yup
      .string()
      .required("نام کاربری باید وارد شود .")
      .min(6, "نام باید حداکثر ۶ کارکتر باشد ")
      .max(255, "نام نباید بیشتر از ۲۵۵ کارکتر باشد ."),
    email: yup
      .string()
      .email("فرمت ایمیل باید صحیح وارد شود .")
      .required("ایمیل باید وارد شود "),
    password: yup.string().required("پسورد باید وارد شود ."),
    phoneNumber: yup
      .string()
      .required("شماره موبایل باید وارد شود .")
      .matches("^(\\+98|0)?9\\d{9}$", "شماره موبایل باید صحیح وارد شود ."),
    password_confirm: yup
      .string()
      .required("تکرار پسورد باید وارد شود .")
      .oneOf([yup.ref("password"), null], "پسورد یکسان نیست ."),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="max-w-screen-lg  mx-auto mt-5">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white py-2 px-4 shadow-sm w-8/12 flex justify-center mx-auto flex-col gap-5"
      >
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="username" className="text-sm text-slate-500">
            نام کاربری
          </label>
          {/* <input
            onChange={formik.handleChange}
            placeholder="نام کاربری خود را وارد کنید ..."
            onBlur={formik.handleBlur}
            name="username"
            value={formik.values.username}
            className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
          /> */}

          <input
            {...formik.getFieldProps("username")}
            placeholder="نام کاربری خود را وارد کنید ..."
            name="username"
            className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
          />
          {formik.errors.username && formik.touched.username && (
            <p className="text-sm text-rose-500 font-extrabold">
              {formik.errors.username}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="phoneNumber" className="text-sm text-slate-500">
            شماره موبایل
          </label>
          <input
            {...formik.getFieldProps("phoneNumber")}
            type="text"
            max={11}
            name="phoneNumber"
            placeholder="شماره موبایل خود را وارد کنید ..."
            className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <p className="text-sm text-rose-500 font-extrabold">
              {formik.errors.phoneNumber}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="email" className="text-sm text-slate-500">
            ایمیل
          </label>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            name="email"
            placeholder="ایمیل خود را وارد کنید ..."
            className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-sm text-rose-500 font-extrabold">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="password" className="text-sm text-slate-500">
            رمز عبور
          </label>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            name="password"
            placeholder="رمز عبور خود را وارد کنید ..."
            className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
          />

          {formik.errors.password && formik.touched.password && (
            <p className="text-sm text-rose-500 font-extrabold">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="password_confirm" className="text-sm text-slate-500">
            تکرار رمز عبور
          </label>
          <input
            {...formik.getFieldProps("password_confirm")}
            type="password"
            name="password_confirm"
            placeholder="رمز عبور خود را دوباره وارد کنید ..."
            className="border border-solid border-slate-100 text-sm bg-slate-100 rounded-md py-2 px-4 outline-none"
          />

          {formik.errors.password_confirm &&
            formik.touched.password_confirm && (
              <p className="text-sm text-rose-500 font-extrabold">
                {formik.errors.password_confirm}
              </p>
            )}
        </div>
        <div className="flex flex-col gap-3 w-full mb-3">
          <button
            type="submit"
            disabled={!formik.isValid}
            className="text-sm text-white bg-purple-500 rounded-md py-2 px-4 disabled:bg-slate-300 "
          >
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
