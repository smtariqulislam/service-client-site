import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result =>{
            const user= result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
      <div>
        <div className="w-full p-8 rounded-xl grid justify-center mb-2 mt-2">
          <div className="grid justify-center max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Register</h1>
              <p className="text-sm text-gray-400">Register for new account</p>
            </div>
            <form
             
              onSubmit={handleSignUp}
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label for="text" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="text"
                    placeholder="name"
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  />
                </div>

                <div>
                  <label for="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="gmail.com"
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 hover:bg-violet-800 text-gray-900">
                    Register
                  </button>
                </div>
                <p className="px-6 text-sm text-center mx-2 text-gray-400">
                  Have an account?
                  <Link to="/login" className="hover:underline text-violet-400">
                    login
                  </Link>
                  .
                </p>
              </div>
            </form>
            <button
              //   onClick={handleGoogleSignIn}
              className="px-8 py-3 font-semibold border rounded dark:border-gray-100 hover:bg-gray-500 dark:text-gray-100"
            >
              {" "}
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Register;