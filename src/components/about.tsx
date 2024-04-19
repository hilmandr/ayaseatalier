import Container from "./container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className=" flex flex-col mt-32">
        <Container>
          <h5 className=" text-xl text-left">About Ayase Atalier</h5>
          <div className=" grid w-full lg:grid-cols-2 grid-cols-1 pb-20 pt-5 justify-between gap-x-24 gap-y-6">
            <div className="">
              <h1 className=" text-5xl font-bold">Not what you think</h1>
            </div>
            <div className=" flex flex-col w-full sm:text-xl text-base font-normal text-left">
              <h1 className="">Ayase Atalier is not just architecture.</h1>
              <h1 className="">Ayase Atalier is not just interior design.</h1>
              <h1 className="">And Ayase Atalier is not just construction.</h1>
              <h1 className=" pt-2">
                We are all of the spaces in between, and the possibilities
                beyond all of them.
              </h1>
            </div>
          </div>

          <div className=" flex-col w-full grid lg:grid-cols-2 grid-cols-1 pb-20 gap-x-24 gap-y-5 mt-10">
            <div className=" flex lg:w-96 w-80 justify-center mx-auto items-center relative aspect-[6/3]">
              <Image
                src="/image/brandmark hitam-01.png"
                alt=""
                className=" w-full aspect-[6/3]"
                fill
              ></Image>
            </div>
            <div className=" w-full flex ">
              <p className=" text-justify text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className=" w-full flex lg:col-start-2">
              <p className=" text-justify text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Container>
        <div className=" bg-black text-white">
          <Container>
            <div className=" flex items-center w-full justify-center py-14">
              <h1 className=" text-5xl font-bold text-center">The Team</h1>
            </div>
            <div className=" w-full justify-between grid lg:grid-cols-2 grid-cols-1 items-center gap-x-20 gap-y-10">
              <div>
                <h1 className=" text-base font-semibold">
                  Btari Larasati Kirana
                </h1>
                <span className=" text-xs font-normal align-top">
                  Principal
                </span>
                <p className=" text-justify font-normal text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="flex w-full relative">
                <Image
                  src="/image/about/our-team-01.jpeg"
                  alt=""
                  width={300}
                  height={120}
                  className=""
                ></Image>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
