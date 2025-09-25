import Image from "next/image";
import actionData from "@/src/data/actionData";
import Link from "next/link";

const Actions = () => {
  return (
    <section className="w-full flex flex-col gap-3 my-15 px-5 md:px-10">
      <div className=" flex justify-between items-center w-full">
        <h2 className="text-2xl font-bold text-gray-700 ">Generate</h2>
        <div className="text-blue-700 flex items-center cursor-pointer">
          <Image
            src="/dropdown-blue.svg"
            alt="draw down icon"
            width={20}
            height={20}
          />
          <span className="-mt-1">Show all</span>
        </div>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-7 w-full">
        {actionData.map((action) => (
          <div key={action.id}>
            <div className="flex gap-2">
              <Image
                src={action.imgSrc}
                alt={action.title}
                width={40}
                height={40}
                className="hidden md:block"
              />
              <div className="flex-1">
                <h5 className="text-[10px] sm:text-sm font-bold text-gray-500 mb-2 md:mb-0">
                  {action.title}{" "}
                  {action.featured && (
                    <span className="text-white ml-2 py-1 px-2 text-[10px] font-semibold   rounded-full bg-blue-600">
                      New
                    </span>
                  )}
                </h5>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <p className="flex-1 sm:text-[12px] text-[10px] text-gray-400 break-words">
                    {action.description}
                  </p>

                  <Link
                    href=""
                    className="py-1 px-4 text-sm font-semibold rounded-full bg-[#f5f3f3] cursor-pointer 
hover:bg-gray-200 active:scale-95 transition-all duration-200"
                  >
                    Open
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Actions;
