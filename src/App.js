import React from "react";
import logo from "./Screenshot 2021-07-30 140806.png";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// console.log(logo); // /logo.84287d09.png
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
}));

// function Header() {
//   // Import result is the URL of your image

// }

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <img src={logo} alt="Logo" />;
      <div className="one">
        <form>
          <label className="text">
            <h1 className="head">Web Development Task</h1>
            <label className="two">Welcome to FundingX!</label>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <label className="two">
              To become a part of our Web Development Team, please complete the
              task before the deadline mentioned.
            </label>
            <br></br>
            <br></br>

            <label className="two">
              No task submissions will be entertained after the deadline
            </label>
            <br></br>

            <br></br>
            <label className="two">TASK -</label>
            <br></br>
            <br></br>

            <label className="two">
              {" "}
              Replicate this Google form which you are looking at.
            </label>
            <br></br>
            <br></br>

            <label className="two">
              You may use HTML,CSS or ReactJs. Preference will be given to one
              using ReactJs and able to send JSON file to a URL.
            </label>
            <br></br>
            <br></br>

            <label className="two">
              {" "}
              If you like, you may enhance the looks of the page according to
              you.
            </label>
            <br></br>
            <br></br>

            <label className="two">
              Host this page on GitHub pages or any hosting service you like and
              paste link in the form.
            </label>
            <br></br>
            <br></br>

            <label className="two">
              {" "}
              The tasks given are for understanding how well you are equipped
              with the skills.
            </label>
            <br></br>
            <br></br>

            <label className="two">
              {" "}
              Deadline for submission- July 31, 4:00 p.m.
            </label>
            <br></br>
            <br></br>
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
      {/* <div classname="third"> */}
      <div className="one">
        <form className={classes.root} noValidate autoComplete="off">
          <label>Name</label>
          <div className="textfield">

          <TextField required id="standard-required" label="Your Answer" />
          </div>
        </form>
      </div>
      <div className="one">
        <form className={classes.root} noValidate autoComplete="off">
          <label>Email id</label>
          <div className="textfield">

          <TextField required id="standard-required" label="Your Answer" />
          </div>
        </form>
      </div>
      <div className="one">
        <form className={classes.root} noValidate autoComplete="off">
          <label>Phone No.</label>
          <div className="textfield"> 
          <TextField required id="standard-required" label="Your Answer" />
          </div>
        </form>
      </div>
      <div className="one">
        <form className={classes.root} noValidate autoComplete="off">
          <label>Page URL</label>
          <div className="textfield">
            <TextField required id="standard-required" label="Your Answer" />
          </div>
        </form>
      </div>
      <div className="one">
        <form className={classes.root} noValidate autoComplete="off">
          <label>What is FundingX about?</label>
          <div className="textfield">
            <TextField required id="standard-required" label="Your Answer" />
          </div>
        </form>
      </div>
      <div className="button">
        <Button variant="contained" color="secondary">
          Submit
        </Button>
      </div>
    </div>
    // </div>
  );
}

export default App;
