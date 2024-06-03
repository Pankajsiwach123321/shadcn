import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[1140px] px-3     mx-auto pt-20">
      <div>
        <h1 className=" text-center capitalize text-base sm:text-xl lg:text-4xl">
          Her some Shadcn components that are used
        </h1>
        <ul className=" mt-5">
          <li className=" flex justify-center items-center gap-3 sm:gap-5">
            <Button>
              <a href="/alert" className="w-full">
                Alert
              </a>
            </Button>
            <Button>
              <a href="/accord" className="w-full">
                Accordion
              </a>
            </Button>
            <Button>
              <a href="/verifyotp" className="w-full">
                OTP Verification
              </a>
            </Button>
            <Button>
              <a href="/lottie" className="w-full">
                Lottie
              </a>
            </Button>
            <Button>
              <a href="/tiltreact" className="w-full">
                Tilt react
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </main>
  );
}
