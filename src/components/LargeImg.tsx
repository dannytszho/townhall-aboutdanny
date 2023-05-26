import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import { urlForImage } from "@/sanity/lib/image";

export interface LargeImageProp {
  imageInfo: {
    src: string,
    width: number,
    height: number,
  };
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const LargeImage = ({ imageInfo, open, setOpen }: LargeImageProp) => {
  const imgRef = useRef(null);
  const imageWidth = imageInfo?.width || 500;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!open) {
      setLoading(true);
    }
  }, [open]);
  if (!imageInfo || !imageInfo.src) return null;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        initialFocus={imgRef}
        as="div"
        static
        className="fixed inset-0 overflow-y-auto"
        style={{ zIndex: 1000 }}
        open={open}
        onClose={setOpen}
      >
        <div
          className="flex  items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0 "
          ref={imgRef}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              onClick={() => setOpen(false)}
              className="inline-block transform 
             rounded-lg bg-white px-4 pt-5 pb-4 text-left align-center shadow-xl transition-all sm:my-8 sm:w-full  sm:p-6 sm:align-middle"
            >
              {loading && (
                <div className=" justify-center align-middle ">
                  <div className="m-auto h-10 w-10">
                    <Loader />
                  </div>
                </div>
              )}
              <div style={{ visibility: loading ? "hidden" : "inherit" }} className="flex justify-center" >
                <Image
                  className=" cursor-pointer object-scale-down focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  loader={({ src }) =>
                    urlForImage(src)
                      .width(800)
                      .fit("scale")
                      .auto("format")
                      .url()
                  }
                  width={imageWidth}
                  height={imageInfo?.height ?? 0}
                  src={imageInfo?.src ?? ""}
                  placeholder="blur"
                  blurDataURL={imageInfo.src}
                  alt="gallery image"
                  onClick={() => setOpen(false)}
                  onLoad={(e) => {
                    // @ts-ignore:
                    e.target.src.indexOf("data:image/gif;base64") < 0 &&
                      setLoading(false);
                  }}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};