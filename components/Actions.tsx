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
      <section className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
        {actionData.map((action) => (
          <div key={action.id} className="flex ">
            <div className="flex gap-3">
              <Image
                src={action.imgSrc}
                alt={action.title}
                width={60}
                height={60}
              />
              <div className="">
                <h5 className="text-xl font-bold text-gray-500">
                  {action.title}{" "}
                  {action.featured && (
                    <span className="text-white ml-2 py-1 px-2 text-[10px] font-semibold   rounded-full bg-blue-600">
                      New
                    </span>
                  )}
                </h5>
                <div className="flex justify-between items-center">
                  <p className="w-[70%]">{action.description}</p>

                  <Link
                    href=""
                    className="-mt-10 py-1 px-4 text-sm font-semibold   rounded-full bg-[#f5f3f3]  cursor-pointer"
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
