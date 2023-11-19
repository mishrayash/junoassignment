import React from "react";
import { PENDING_DATA, COMPLETED_DATA } from "../data";
import { MONIERING_STATUS } from "../constants";
import UserName from "./Columns/UserName";
import RiskLevel from "./Columns/RiskLevel";
import Trigger from "./Columns/Trigger";
import Inqueue from "./Columns/Inqueue";
import Dateadded from "./Columns/Dateadded";
import Previous from "./Columns/Previous";
import Action from "./Columns/Action";
import Actiontaken from "./Columns/Actiontaken";

const Details = ({ status, search, setSearch }) => {
  const DATA =
    status === MONIERING_STATUS.Pending ? PENDING_DATA : COMPLETED_DATA;
  return (
    <div>
      <div>
        <table className="w-full text-sm text-left rtl:text-right border ">
          <thead className="text-xs   bg-gray-100">
            <tr>
              {Object.keys(DATA[0])
                .filter(
                  (header) =>
                    header !== "Email" &&
                    header !== "PRD" &&
                    header !== "Email2"
                )
                .map((header) => (
                  <th scope="col" className="px-7 py-3">
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {DATA.filter((record) => {
              return search.toLowerCase() === ""
                ? record
                : record.User.toLowerCase().includes(search);
            }).map((record) => (
              <tr className="bg-white border-b">
                <td className="px-6 py-2">
                  <UserName name={record.User} email={record.Email} />
                </td>
                <td className="px-6 py-2">
                  <RiskLevel level={record["Risk level"]} />
                </td>
                {"Trigger Reason" in record ? (
                  <td className="px-6 py-2">
                    <Trigger trigger={record["Trigger Reason"]} />
                  </td>
                ) : null}
                {"Action Reason" in record ? (
                  <td className="px-6 py-2">
                    <Action action={record["Action Reason"]} />
                  </td>
                ) : null}
                {"In queue for" in record ? (
                  <td className="px-6 py-2">
                    <Inqueue queue={record["In queue for"]} />
                  </td>
                ) : null}
                {"Time to close" in record ? (
                  <td className="px-6 py-2">
                    <Inqueue queue={record["Time to close"]} />
                  </td>
                ) : null}
                <td className="px-6 py-2">
                  <Dateadded date={record["Date added on"]} />
                </td>

                {"Previously reviewed" in record ? (
                  <td className="px-6 py-2">
                    <Previous
                      val={record["Previously reviewed"]}
                      date={record.PRD}
                    />
                  </td>
                ) : null}
                {"Action taken by" in record ? (
                  <td className="px-6 py-2">
                    <Actiontaken
                      name={record["Action taken by"]}
                      email={record.Email2}
                    />
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
