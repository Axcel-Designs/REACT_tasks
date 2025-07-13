import SideMenu from "../components/dashbdCompnents/SideMenu";
import InfoBar from "../components/dashbdCompnents/InfoBar";
import CustomersInfo from "../components/dashbdCompnents/CustomersInfo";
import DashbdHeader from "../components/dashbdCompnents/DashbdHeader";
import "../components/dashbdCompnents/customersInfo.css";

export default function Dashboard() {
  return (
    <>
      <main className="dashbd flex w-full h-full bg-white">
        <SideMenu />
        <section className="bg-gray-200 grow h-full md:p-6 p-4 flex flex-col gap-4 ">
          <DashbdHeader />
          <InfoBar />
          <CustomersInfo />
        </section>
      </main>
    </>
  );
}
