import "./Form.css";
import React, { useState, useRef } from "react";




function Form() {
    // hooks
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const imageRef = useRef(null);
    const profRef = useRef(null);
    const workRef = useRef(null);
    const [message1, setmessage1] = useState("");
    const [message2, setmessage2] = useState("");
    const [message3, setmessage3] = useState("");
    const [message4, setmessage4] = useState("");
    const [message5, setmessage5] = useState("");

    // validation 
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [profError, setProfError] = useState("");
    const [workError, setWorkError] = useState("");


    const handleSubmit = event => {
        console.log("handle");
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;
        const prof = profRef.current.value;
        const work = workRef.current.value;

        // Validate Name
        if (!name) {
            setNameError("Name is required");
        } else {
            setNameError("");
        }

        // Validate Email
        if (!email) {
            setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }

        // Validate Number
        if (!number) {
            setNumberError("Number is required");

        } else {
            setNumberError("");
        }

        // Validate Profession
        if (!prof) {
            setProfError("Profession is required");
        } else {
            setProfError("");
        }

        // Validate Work
        if (!work) {
            setWorkError("Company name is required");
        } else {
            setWorkError("");
        }


        console.log("name", nameRef.current.value);
        console.log("email", emailRef.current.value);
        console.log("number", numberRef.current.value);
        console.log("image", imageRef.current.value);
        console.log("prof", profRef.current.value);
        console.log("work", workRef.current.value);

        setmessage1(
            `${nameRef.current.value}          
        `
        )
        setmessage2(
            `${emailRef.current.value}`
        );

        setmessage3(
            `${numberRef.current.value}`
        );

        setmessage4(
            `${profRef.current.value}`
        );

        setmessage5(
            ` ${workRef.current.value}`
        )

        event.target.reset();
    }
    // image hook
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
      <>
            <div className="container">
                <div className="text-center display-3 fw-medium text mt-5">Registration Form</div>
                <div className="container">

                    <div className="row mt-5">
                        <div className="col-md-6 border">

                            <h2 className="Text-start text-white fs-1">Fill This Form</h2>
                            <p></p>

                            <form onSubmit={handleSubmit}>

                                {nameError && <div className="error-message">{nameError}</div>}
                                <div className={`input-group mb-3 mt-4 ${nameError ? "has-error" : ""}`}>


                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="bi bi-person-circle"></i>
                                    </span>
                                    <input
                                        type="text"
                                        ref={nameRef}
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                    />

                                </div>
                                {emailError && <div className="error-message">{emailError}</div>}
                                <div className={`input-group mb-3 mt-4 ${emailError ? "has-error" : ""}`}>


                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope"></i></span>
                                    <input type="email"
                                        ref={emailRef}
                                        className="form-control"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                    />


                                </div>

                                {numberError && <div className="error-message">{numberError}</div>}
                                <div className={`input-group mb-3 mt-4 ${numberError ? "has-error" : ""}`}>


                                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-pass-fill"></i></span>
                                    <input type="number"
                                        ref={numberRef}
                                        className="form-control"
                                        maxLength={12}
                                        id="number"
                                        placeholder="Contact Number"
                                        name="number"
                                    />



                                </div>

                                {profError && <div className="error-message">{profError}</div>}
                                <div className={`input-group mb-3 mt-4 ${profError ? "has-error" : ""}`}>


                                    <span className="input-group-text" id="basic-addon1"><i class="bi bi-award"></i></span>
                                    <input type="text"
                                        ref={profRef}
                                        className="form-control"

                                        id="prof"
                                        placeholder="Profession"
                                        name="prof"
                                    />



                                </div>

                                {workError && <div className="error-message">{workError}</div>}
                                <div className={`input-group mb-3 mt-4 ${workError ? "has-error" : ""}`}>


                                    <span className="input-group-text" id="basic-addon1"><i class="bi bi-building-check"></i></span>
                                    <input type="text"
                                        ref={workRef}
                                        className="form-control"

                                        id="work"
                                        placeholder="Company Name"
                                        name="work"
                                    />


                                </div>
                                <div className="input-group mb-3 mt-4">
                                    <input type="file" className="form-control border-0"
                                        id="inputGroupFile02"
                                        onChange={handleChange}
                                        ref={imageRef} />
                                    <label className="input-group-text" htmlFor="inputGroupFile02">Image</label>
                                </div>

                                <div className="mt-3 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-color mt-4">Submit</button>
                                </div>

                            </form>

                        </div>
                        <div className="col-md-6">
                            <div className="mainbox">
                                <p className="idcard">ID CARD</p>
                                <div className="circle">
                                    <img src={file} alt="" />
                                </div>
                                <div className="content text-center">
                                    <p>Name:</p>
                                    <h5>{message1}</h5>

                                    <p>Email:</p>

                                    <h5>{message2}</h5>
                                    <p>Contact Number:</p>

                                    <h5>{message3}</h5>
                                    <p>Profession:</p>

                                    <h5> {message4}</h5>
                                    <p>Company:</p>

                                    <h5> {message5}</h5>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;