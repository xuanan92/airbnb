import {
  Apple,
  Facebook,
  MailOutline,
  Google,
  Close,
  PhoneAndroid,
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const Login = ({ handleSignUpClose }) => {
  const [switchForm, setSwitchForm] = useState(true);
  const handleSwitchForm = () => {
    setSwitchForm(!switchForm);
  };
  return (
    <>
      <div
        onClick={handleSignUpClose}
        className="fixed inset-0 z-50 bg-black bg-opacity-50 transition duration-200 ease-in"
      ></div>
      <div
        className={`flex h-3/4 fixed inset-0 flex-col m-auto w-1/3 text-black bg-white rounded-xl z-[60]`}
      >
        <Grid className="py-4" container direction="row" alignItems="center">
          <Close
            onClick={handleSignUpClose}
            className="absolute left-4 p-1 scale-125 hover:bg-gray-100 hover:rounded-full"
          />
          <h4 className="w-full text-center">Log in or sign up</h4>
        </Grid>
        <hr />
        <div className="flex flex-col p-4">
          <h4 className="py-4">Login to your Airbnb account</h4>
          <form className="flex flex-col gap-4 w-full h-auto">
            {!switchForm && (
              <>
                <div className="flex flex-col w-full rounded-lg border">
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
            )}
            {switchForm && (
              <>
                <input
                  className="py-4 px-2 w-full rounded-lg border"
                  type="text"
                  autoFocus
                  placeholder="Email"
                />
                <input
                  className="py-4 px-2 w-full rounded-lg border"
                  type="text"
                  placeholder="Password"
                />
              </>
            )}
            <button
              type="button"
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
          <p className="text-xs italic">
            Phone, Facebook, Google, and Apple is temporary not working
          </p>
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
            <Grid
              className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95"
              container
              direction="row"
              alignItems="center"
            >
              <Google className="absolute left-8" />
              <h6 className="flex-auto text-center">Continue with Goolge</h6>
            </Grid>
            <Grid
              className="py-4 rounded-lg border transition-all cursor-pointer active:scale-95"
              container
              direction="row"
              alignItems="center"
            >
              <Apple className="absolute left-8" />
              <h6 className="flex-auto text-center">Continue with Apple</h6>
            </Grid>
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
