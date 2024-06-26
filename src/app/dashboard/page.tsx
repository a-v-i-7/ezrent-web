import Image from "next/image";
import { Owner } from "../lib/defination";
// import { useState } from "react";

const dashboard = () => {
  const showDuesFilterDropdown = false;
  // const [duesFilterValue, setDuesFilterValue] = useState<DuesFilterType>({
  //   period: "allTime",
  //   duesType: ["rent", "electricity", "other"]
  // })
  const owner: Owner = {
    id: "1",
    firstName: "Dhruv",
    lastName: "Kumar",
    profilePicture: "/anime-face.png",
    email: "",
  };
  const dues = {
    totalDuesThisMonth: 5000,
    totalDuesAllTime: 30000,
    totalDuesLastYear: 20000,
  };

  const fetchMonthAndYearInString: () => string = () => {
    const currDateStringArray = new Date().toUTCString().split(" ");
    return `${currDateStringArray[2]} ${currDateStringArray[3]}`;
  };
  const currentMonth = new Date();
  return (
    <div className="bg-gray my-2 mx-2 rounded-xl flex-1 col-span-6 p-6">
      <header className="text-primary flex justify-between items-center">
        <h2 className="font-bold text-2xl ">Dashboard</h2>
        <div>
          <h2 className="font-bold text-2xl">{fetchMonthAndYearInString()}</h2>
          <button className="text-sm bg-white-100">Change Month</button>
        </div>
        <div className="flex mb-5">
          <Image
            src={owner.profilePicture!}
            width={50}
            height={30}
            alt="Pic of Owner"
            className="rounded-full bg-light-blue shadow scale-75"
          />
          <div className="text-left mx-2">
            <p className="text-primary font-semibold text-sm">{`${owner.firstName} ${owner.lastName}`}</p>
            <p className="text-gray-200 text-xs">Owner</p>
          </div>
        </div>
      </header>
      <div className="flex h-5/6 items-center transparent text-black">
        <div className="flex-1 flex-row justify-start items-start">
          <div className="w-1/2 h-1/4 bg-white my-5 rounded shadow">
            <div className="flex shadow-1">
              <div>
                <div className="flex">
                  <h3>Duration</h3>
                </div>
                <div className="inline-block  text-accent text-sm">
                  <h3>Total Dues</h3>
                  <p className="bg-accent">{dues.totalDuesThisMonth}</p>
                </div>
                <h3>Dues Remaining</h3>
                <p>{dues.totalDuesAllTime}</p>
              </div>
              <div> Pie Chart</div>
            </div>
          </div>
          <div className="w-1/2 h-1/4 bg-white my-5 rounded shadow">2</div>
          <div className="w-1/2 h-1/4 bg-white my-5 rounded shadow">3</div>
        </div>
        <div className="w-1/2 h-full bg-white rounded">4</div>
      </div>
    </div>
  );
};
export default dashboard;
