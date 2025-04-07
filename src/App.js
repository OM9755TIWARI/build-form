import "./styles.css";
import { React, useState } from "react";

export default function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailid, setEmailid] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstname,
      lastname,
      emailid,
      contact,
      gender,
      subject,
      resume,
      url,
      selectedOption,
      about
    );
  };
  const handleSubjectChanges = (sub) => {
    setSubject((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  const handleReset = () => {
    setFirstname("");
    setLastname("");
    setEmailid("");
    setContact("");
    setGender("male");
    setSubject({ english: true, maths: false, physics: false });
    setResume("");
    setUrl();
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <h1>FORM IN REACT</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="emailid">Enter Email*</label>
          <input
            type="text"
            placeholder="Enter Email"
            name="emailid"
            id="emailid"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Man
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Woman
          <input
            type="radio"
            id="other"
            name="other"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Others
          <label htmlFor="lab">Your best subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subject.english == true}
            onChange={(e) => handleSubjectChanges("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subject.maths == true}
            onChange={(e) => handleSubjectChanges("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subject.physics == true}
            onChange={(e) => handleSubjectChanges("physics")}
          />
          Physics
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload Resume"
            required
            onChange={(e) => setResume(e.target.files[0])}
          />
          <label htmlFor="url">Enter URL</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Enter URL"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Select your Choice</label>
          <select name="select" id="select">
            <option value="" disabled checked={selectedOption === ""}>
              Select your answer
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Nodejs</option>
              <option value="6">Express</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            rows="10"
            cols="30"
            placeholder="About your self"
            required
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}
