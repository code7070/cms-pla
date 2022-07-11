// import Skeleton from "react-loading-skeleton";
import { Menubar, PageSubtitle } from "./Home/Home";

const Transaction = () => {
  return (
    <div className="max-w-3lg mx-auto">
      <PageSubtitle text="Transaction" />
      <Menubar />
      <div>
        <table className="table-auto mx-auto my-5 border-2 rounded-lg">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>22 June 2022</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>25 June 2022</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>27 June 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
