"use client";
import { Input, Link } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
function handleSubmission(email, password, apiURL) {
  axios
    .post(`http://127.00.1:3001/${apiURL}`, {
      Email: email,
      Password: password,
    })
    .then((response) => {
      console.log(response);
    });
  console.log(`http://127.00.1:3001/${apiURL}`);
}
function FormForAuth(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="absolute h-3/5 w-2/6 bg-black border-2 border-gray-700 rounded-lg flex flex-col justify-evenly">
      <div className="text-3xl font-bold p-2 w-full text-center">
        {props.title}
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
        <Input
          type="email"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
        <Input
          type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
        />
      </div>
      <div className="p-3">
        <Button
          className=" w-full"
          size="lg"
          onClick={() => handleSubmission(email, password, props.api)}
        >
          {props.buttonText}
        </Button>
      </div>

      <div className="font-medium p-3 text-right underline">
        <Link href={props.href}>{props.linkText} &rarr;</Link>
      </div>
    </div>
  );
}
export default FormForAuth;
