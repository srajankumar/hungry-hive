// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";
// // hook used to navigate to any pages

// const auth = () => {
//   return (
//     // <div className="bg-green-500 h-screen flex justify-center items-center">
//     //   <Login />
//     //   <Register />
//     // </div>
//     <div>
//       {/* <section class="text-gray-600 h-screen body-font relative">
//         <div class="container px-5 py-24 mx-auto flex">
//           <div class="w-[30rem] bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
//             <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
//               Feedback
//             </h2>
//             <p class="leading-relaxed mb-5 text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <div class="relative mb-4">
//               <label for="email" class="leading-7 text-sm text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div class="relative mb-4">
//               <label for="message" class="leading-7 text-sm text-gray-600">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Button
//             </button>
//             <p class="text-xs text-gray-500 mt-3">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section> */}
//       <Login />
//     </div>
//   );
// };

// export default auth;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [_, setCookies] = useCookies(["access_token"]);

//   const navigate = useNavigate();

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/auth/login", {
//         username,
//         password,
//       });

//       setCookies("access_token", response.data.token);
//       window.localStorage.setItem("userID", response.data.userID);
//       // save the token id in localstorage

//       navigate("/");
//       // navigates to home page after logging in
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Form
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       label="Login"
//       onSubmit={onSubmit}
//     />
//   );
// };

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault(); // wont reftresh the page
//     try {
//       await axios.post("http://localhost:3001/auth/register", {
//         username,
//         password,
//       });
//       alert("Registration completed. Login to continue");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Form
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       label="Register"
//       onSubmit={onSubmit}
//     />
//   );
// };

// const Form = ({
//   username,
//   setUsername,
//   password,
//   setPassword,
//   label,
//   onSubmit,
// }) => {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <form onSubmit={onSubmit}>
//         <div class="w-[30rem] backdrop-blur-md bg-[#00000035] rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
//           <h2 class="text-gray-100 text-2xl mb-5 font-bold title-font">
//             {label}
//           </h2>
//           <div class="relative mb-4">
//             <label htmlFor="username" class="leading-7 text-sm text-gray-300">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <div class="relative mb-4">
//             <label for="email" class="leading-7 text-sm text-gray-300">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <button
//             type="submit"
//             class="text-white my-5 bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg"
//           >
//             {label}
//           </button>
//           <div class="text-sm text-gray-200 mt-3">
//             Do not have an account? Register
//           </div>
//         </div>
//       </form>
//       {/* <form onSubmit={onSubmit}>
//         <h2>{label}</h2>
//         <div>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <button type="submit">{label}</button>
//       </form> */}
//     </div>
//   );
// };
