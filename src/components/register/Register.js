import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup';
const Register = () => {
    return (
        <Formik
            initialValues={
                {
                    firstname:'',
                    lastname:'',
                    email:'',
                    password:'',
                    confirmpassword:'',
                    gender:''
                }
            }
            validationSchema={Yup.object({
                firstname: Yup.string().required('Firstname is required').min(3,"Enter min 3 characters").max(7,"Enter Maximum 7 characters"),
                lastname: Yup.string().required('Lastname is required'),
                password: Yup.string().required('Password is required'),
                confirmpassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')],"Password didnot match")
            })}
            onSubmit={(values)=>{
                console.log(values);
            }}
        >
            <Form>
                <div>
                    <Field type="text" name="firstname" placeholder="Enter First name"/>
                    <ErrorMessage name="firstname"/>
                </div>
                <div>
                    <Field type="text" name="lastname" placeholder="Enter Last name"/>
                    <ErrorMessage name="lastname">
                        {(error) => <span style={{color:'red'}}>{error}</span>}
                    </ErrorMessage>
                </div>
                <div>
                    <Field type="email" name="email" placeholder="Enter Email"/>
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Enter Password"/>
                    <ErrorMessage name="password"/>
                </div>
                <div>
                    <Field type="password" name="confirmpassword" placeholder="Enter Confirm Password"/>
                    <ErrorMessage name="confirmpassword"/>
                </div>
                <div>
                    <div>
                        Select Gender
                    </div>
                    Male: <Field type="radio" name="gender" value="M"/>
                    Female: <Field type="radio" name="gender" value="F"/>


                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}
export default Register;