import { Link } from "react-router-dom";

const Login = () => {
    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('log me in', email, password)
    }
    return (
        <div className="my-12">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                   
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                          <form onSubmit={handleLogIn}>
                              <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                          </form>
                          <p>Don't have an Account? Please <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;