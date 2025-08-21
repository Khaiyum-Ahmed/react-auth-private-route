import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('register successfull', name, email, password)

    }
    return (
        <div className="my-12">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <h1 className="text-3xl font-bold">Register now!</h1>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input name="name" type="text" className="input" placeholder="User-Name" />
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <p>Already have an Account? Please <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;