import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function StudentAuthForm() {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Invalid email format")
            .required("Please enter your email"),
        password: yup.string().required("Password is required"),
        });
    
        const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
            resolver: yupResolver(schema),
        });
    
        const onSubmit = async (data) => {
        console.log("Form data:", data);
        };
    return ( 
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full text-left space-y-2">
                <div className="flex flex-col">
                    <label className="font-medium">Email</label>
                    <input 
                    {...register("email")}
                    placeholder="student@university.edu"
                    type="email" 
                    className="px-4 py-2 border input-glow border-blue-200 rounded-lg"/>
                    {errors.email && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.email.message}
                    </p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label className="font-medium">Password</label>
                    <input 
                    {...register("password")}
                    placeholder="••••••••"
                    type="password" 
                    className="px-4 py-2 border input-glow border-blue-200 rounded-lg"/>
                    {errors.password && (
                    <p className="text-sm text-red-500 font-light">
                        {errors.password.message}
                    </p>
                    )}
                </div>
                <button type="submit" className="py-2 hover:bg-blue-500 w-full bg-blue-600 font-medium text-white rounded-lg mt-2">Sign In</button>
            </form>
        </div>
     );
}

export default StudentAuthForm;