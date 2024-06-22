"use client";
import { Input, Link } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
function FormForAuth(props) {
  return (
    <div className="absolute h-3/5 w-2/6 bg-black border-2 border-gray-700 rounded-lg flex flex-col justify-evenly">
      <div className="text-3xl font-bold p-2 w-full text-center">
        {props.title}
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-3">
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>
      <div className="p-3">
        <Button className=" w-full" size="lg">
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
