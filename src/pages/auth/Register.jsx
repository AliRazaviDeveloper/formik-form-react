import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../components/common/Input";

const initialValues = {
  username: "",
  email: "",
  password: "",
  phoneNumber: "",
  password_confirm: "",
};

const Register = () => {
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
    <div className="md:max-w-screen-lg  md:mx-auto md:mt-5 w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white py-5 px-6 shadow-sm md:w-8/12 flex justify-center mx-auto flex-col gap-5 w-full"
      >
        <Input
          label="username"
          nameFa="نام کاربری را وارد کنید ..."
          labelName=" نام کاربری"
          type="text"
          formik={formik}
        />

        <Input
          label="phoneNumber"
          nameFa="شماره موبایل خود را وارد کنید ..."
          labelName="شماره موبایل"
          type="text"
          formik={formik}
        />

        <Input
          label="email"
          nameFa=" ایمیل خود را وارد کنید ..."
          labelName=" ایمیل"
          type="email"
          formik={formik}
        />

        <Input
          label="password"
          nameFa=" رمز عبور خود را وارد کنید ..."
          labelName=" رمز عبور"
          type="password"
          formik={formik}
        />

        <Input
          label="password_confirm"
          nameFa=" تکرار رمز عبور خود را وارد کنید ..."
          labelName=" تکرار رمز عبور"
          type="password"
          formik={formik}
        />

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

export default Register;
