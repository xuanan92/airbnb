import {
  Apple,
  Facebook,
  MailOutline,
  Close,
  PhoneAndroid,
  Google,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRef, useState } from "react";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import { useDispatch } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
/* eslint-disable-next-line */
const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [switchForm, setSwitchForm] = useState(true);
  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => console.log(credentialResponse),
  });
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const handleSwitchForm = () => {
    setSwitchForm(!switchForm);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setEmail("");
      setPassword("");
      handleLogin();
      navigate("/account-settings");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };
  const errClass = errMsg ? "errmsg" : "offscreen";
  if (isLoading) return <PulseLoader color={"#FFF"} />;
  return (
    <>
      <div
        onClick={handleLogin}
        className="fixed inset-0 z-50 bg-black bg-opacity-50 transition duration-200 ease-in"
      ></div>
      <div
        className={`flex h-5/6 fixed inset-0 flex-col m-auto w-1/3 text-black bg-white rounded-xl z-[60]`}
      >
        <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p>
        <Grid className="py-4" container direction="row" alignItems="center">
          <Close
            onClick={handleLogin}
            className="absolute left-4 p-1 scale-125 cursor-pointer hover:bg-gray-100 hover:rounded-full"
          />
          <h4 className="w-full text-center">Log in</h4>
        </Grid>
        <hr />
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <h4 className="py-4">Login to your Airbnb account</h4>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center w-full h-auto"
          >
            {!switchForm ? (
              <>
                <div className="flex flex-col w-full rounded-xl border">
                  <select
                    className="py-4 px-2 bg-white rounded-t-lg border focus:rounded-lg before:content-[attr('Country/Region')]"
                    value="35"
                  >
                    <option value="1">Afghanistan (+93)</option>
                    <option value="2">Aland Islands (+358)</option>
                    <option value="3">Albania (+355)</option>
                    <option value="4">Algeria (+213)</option>
                    <option value="5">American Samoa (+1)</option>
                    <option value="6">Andorra (+376)</option>
                    <option value="7">Angola (+244)</option>
                    <option value="8">Anguilla (+1)</option>
                    <option value="9">Antigua & Barbuda (+1)</option>
                    <option value="10">Argentina (+54)</option>
                    <option value="11">Armenia (+374)</option>
                    <option value="12">Aruba (+297)</option>
                    <option value="13">Australia (+61)</option>
                    <option value="14">Austria (+43)</option>
                    <option value="15">Azerbaijan (+994)</option>
                    <option value="16">Bahamas (+1)</option>
                    <option value="17">Bahrain (+973)</option>
                    <option value="18">Bangladesh (+880)</option>
                    <option value="19">Barbados (+1)</option>
                    <option value="20">Belarus (+375)</option>
                    <option value="21">Belgium (+32)</option>
                    <option value="22">Belize (+501)</option>
                    <option value="23">Benin (+229)</option>
                    <option value="24">Bermuda (+1)</option>
                    <option value="25">Bhutan (+975)</option>
                    <option value="26">Bolivia (+591)</option>
                    <option value="27">
                      Bonaire, Sint Eustatius and Saba (+599)
                    </option>
                    <option value="28">Bosnia & Herzegovina (+387)</option>
                    <option value="29">Botswana (+267)</option>
                    <option value="30">Brazil (+55)</option>
                    <option value="31">
                      British Indian Ocean Territory (+246)
                    </option>
                    <option value="32">British Virgin Islands (+1)</option>
                    <option value="33">China (+86)</option>
                    <option value="34">Cuba (+53)</option>
                    <option value="35">Vietnam (+84)</option>
                    <option value="36">Laos (+856)</option>
                  </select>
                  <input
                    className="py-4 px-2 w-full rounded-b-lg border"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
                <p className="w-full text-gray-700">
                  We&apos;ll call or text you to confirm your number. Standard
                  message and data rates apply.{" "}
                  <span className="font-bold underline">Privacy Policy</span>
                </p>
              </>
            ) : (
              <>
                <input
                  className="py-4 px-2 w-full rounded-lg border"
                  type="text"
                  autoFocus
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  className="py-4 px-2 w-full rounded-lg border"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </>
            )}
            <button
              type="submit"
              className="py-4 w-full text-white bg-red-600 rounded-lg border"
            >
              Continue
            </button>
          </form>
          <div className="flex flex-row items-center mt-4 h-8 divide-solid">
            <div className="flex-grow pr-4">
              <hr />
            </div>
            <p>or</p>
            <div className="flex-grow pl-4">
              <hr />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Grid
              className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95"
              container
              direction="row"
              alignItems="center"
            >
              <Facebook color="primary" className="absolute left-8" />
              <h6 className="flex-auto text-center">Continue with Facebook</h6>
            </Grid>
            <button onClick={googleLogin}>
              <Grid
                className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95"
                container
                direction="row"
                alignItems="center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                  className="absolute left-8"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <h6 className="flex-auto text-center">Continue with Google</h6>
              </Grid>
            </button>
            {/* <Grid */}
            {/*   className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95" */}
            {/*   container */}
            {/*   direction="row" */}
            {/*   alignItems="center" */}
            {/* > */}
            {/*   <Apple className="absolute left-8" /> */}
            {/*   <h6 className="flex-auto text-center">Continue with Apple</h6> */}
            {/* </Grid> */}
            {!switchForm && (
              <Grid
                className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95"
                container
                direction="row"
                alignItems="center"
                onClick={handleSwitchForm}
              >
                <MailOutline className="absolute left-8" />
                <h6 className="flex-auto text-center">Continue with email</h6>
              </Grid>
            )}
            {switchForm && (
              <Grid
                className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95"
                container
                direction="row"
                alignItems="center"
                onClick={handleSwitchForm}
              >
                <PhoneAndroid className="absolute left-8" />
                <h6 className="flex-auto text-center">Continue with phone</h6>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
