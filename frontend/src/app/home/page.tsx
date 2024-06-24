"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { ChangeEvent, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [file, setFile] = useState<File | null>();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    } catch (err) {}
  };
  return (
    <div className="h-screen w-screen dark dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="h-12 w-60 absolute bottom-5 right-5 ">
        <Button
          onPress={onOpen}
          className="h-full w-full text-2xl"
          color="primary"
          variant="shadow"
        >
          Upload
          <FaCloudUploadAlt className=" h-full w-full"></FaCloudUploadAlt>
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark">
                Select the file to upload
              </ModalHeader>
              <ModalBody>
                <input
                  type="file"
                  accept="image/*"
                  placeholder={file?.name}
                  onChange={handleFileChange}
                ></input>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    if (file != null) {
                      const formData = new FormData();
                      formData.append("image", file);
                      formData.append("Email", getCookie("Email") as string);
                      await axios
                        .post("http://127.0.0.1:3001/image/upload", formData, {
                          headers: { "Content-Type": "multipart/form-data" },
                        })
                        .then((response) => {});
                    }
                    setFile(null);
                    onClose();
                  }}
                >
                  Upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
