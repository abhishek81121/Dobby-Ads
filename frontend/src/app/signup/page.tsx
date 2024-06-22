import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute h-1/2 w-2/6 bg-black border-2 border-gray-700 rounded-lg flex flex-col justify-evenly">
        <div className="text-3xl font-bold p-2 w-full text-center">Sign Up</div>
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
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
