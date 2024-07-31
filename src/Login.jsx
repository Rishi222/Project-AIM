import { useEffect, useState } from 'react';
import './Login.css';
import Logo from './Logo';'./Logo.jsx';
// import axios from 'axios';

function Login(){

                                                          // ( JS ) logic Part here.

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    // new code 
    useEffect(()=>{
      if(localStorage.getItem("user-info")){
        window.location.href("/add");
      }
    },[])

    async function login(){
      setLoading(true);
      setResponse(null);
      setError(null);                                  

      // console.log(username, password);
      // console.log(`?x=${encodeURI("test@abc.com")}`);
      // let username = `rajababusharma7124@gmail.com`;
      // let password = `123456`;

      console.warn(username,password)
       const corsProxy = "https://cors-anywhere.herokuapp.com/";
       const url = `${corsProxy}https://anichedigital.in/api/home/Login?username=${encodeURIComponent(
         username
       )}&password=${encodeURIComponent(password)}`;
      try {
        let result = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        }
        //second parse of data.
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        window.location.href("/add");
      } catch (error) {
        setError(error.message);
        console.error("Error:", error);
      } 
    }


                                                        // Second logic code for login 



      // let url =`https://anichedigital.in/api/home/Login?username=${encodeURI(username)}&password=${encodeURI(password)}`
      // console.log(url);
      //   try {
      //     let res = await fetch(url);
      //     if (!res.ok) {
      //       throw new Error(`HTTP error! Status: ${res.status}`);
      //     }
      //     //    res.json();
      //     let data = await res.json();

      //     //    window.location.href = "success.html";
      //     let user_name = data.UserDetails.User_Name;
      //     if (username == user_name) {
      //       console.log("Login Successful");
      //     }
      //     //    console.log(data);
      //   } catch (e) {
      //     console.log("Error is :", e);
      //   }


      // try {
      //   const res = await axios.get(url);
      //   console.log(res);
      //   setResponse(res.data);
      // } catch (err) {
      //   console.log(err);
      //   setError(err.message);
      // } finally {
      //   setLoading(false);
      // }
    



                                                                // ( HTML Code ) 
  return (
    <div className="maindiv">
      <div className="logodivouter">
        <div className="logodivinner">
          <Logo />
        </div>
        <div className="companynamediv">
          <h4>Assets Inventory Management</h4>
        </div>
      </div>
      <div>
        <div>
          <p className="loginpara">USER LOGIN</p>
          <div className="inputdiv">
            <input
              className="username"
              type="text"
              label="username"
              id="username"
              placeholder="Username"
              // changes
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="password"
              type="password"
              label="password"
              id="password"
              placeholder="Password"
              // changes
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          {/* Change in button onclick,type */}
          <button 
          onClick={login} 
          type="submit"
           disabled={loading}
           >
           {/* Log in */}
            {loading ? "Loading..." : "Log In"}
          </button>
          <a href="#!">Forget Password ?</a>
        </div>
        <div>
          <div>
            <p>New User ?</p>
          </div>
          <div>
            <button>Register</button>
          </div>
        </div>
        {/* New Changes */}
        {response && (
          <div>
            <h3>Response:</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {error && (
          <div>
            <h3>Error:</h3>
            <pre>{error}</pre>
          </div>
        )}
        {/* New Changes */}
      </div>
    </div>
  );
}

export default Login



                                                                //Code 2 

                

// import { useState } from "react";
// import "./Login.css";
// import Logo from "./Logo";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   function login() {
//     setLoading(true);
//     setResponse(null);
//     setError(null);

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","https://anichedigital.in/api/home/Login");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = function () {
//       setLoading(false);
//       if (xhr.status === 200) {
//         setResponse(JSON.parse(xhr.responseText));
//       } else {
//         setError(`Error: ${xhr.statusText}`);
//       }
//     };
//     xhr.onerror = function () {
//       setLoading(false);
//       setError("Network Error");
//     };
//     xhr.send(JSON.stringify({ username, password }));
//   }

//   return (
//     <div className="maindiv">
//       <div className="logodivouter">
//         <div className="logodivinner">
//           <Logo />
//         </div>
//         <div className="companynamediv">
//           <h4>Assets Inventory Management</h4>
//         </div>
//       </div>
//       <div>
//         <div>
//           <p className="loginpara">USER LOGIN</p>
//           <div className="inputdiv">
//             <input
//               className="username"
//               type="text"
//               id="username"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               className="password"
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <div>
//           <button onClick={login} type="submit" disabled={loading}>
//             {loading ? "Loading..." : "Log In"}
//           </button>
//           <a href="#!">Forget Password ?</a>
//         </div>
//         <div>
//           <div>
//             <p>New User ?</p>
//           </div>
//           <div>
//             <button>Register</button>
//           </div>
//         </div>
//         {response && (
//           <div>
//             <h3>Response:</h3>
//             <pre>{JSON.stringify(response, null, 2)}</pre>
//           </div>
//         )}
//         {error && (
//           <div>
//             <h3>Error:</h3>
//             <pre>{error}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;

