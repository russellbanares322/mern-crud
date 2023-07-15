import { HiOutlinePlusSm } from "react-icons/hi";

const DynamicForm = () => {
  return (
    <div className="w-[24rem]">
      <div className="flex items-center justify-start gap-5">
        <label className="mr-auto">Question # 1</label>
        <input className="w-[15rem] rounded-md border px-2 py-1" type="text" />
      </div>
      <div className="mt-2 flex items-center justify-start">
        <label className="mr-auto ml-9 text-sm">Option A :</label>
        <div className="flex items-center justify-evenly gap-4">
          <input className="scale-[1.5] transform" type="radio" />
          <input
            className="w-[10rem] rounded-md border px-2 py-1"
            type="text"
          />
          <button className="h-[2rem] rounded-md bg-green px-2">
            <HiOutlinePlusSm className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
