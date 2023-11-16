import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between sticky p-5 top-0 bg-gray-100 z-50 shadow-md shadow-gray-400/50">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />

        <div className="">
          <h1 className="font-bold">
            The
            <span className="text-violet-500"> IMG</span>
            enerator
          </h1>
          {/* <h2 className="text-xs">
            Powered by DALL·E 2, ChatGPT & Microsoft Azure!
          </h2> */}
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link href={""} className="px-2 font-light text-right">
          Porfolio
        </Link>
        <Link
          href={"https://github.com/neetmangat/ai-image-generator"}
          className="px-2 font-light"
        >
          GitHub Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
