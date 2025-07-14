import { useAuth } from "../../context/AuthProvider";

export default function UserInfo() {
  const {
    fullName,
    gender,
    telphone,
    birthday,
    address,
    stAddress,
    aprtmnt,
    city,
    state,
    zipCde,
  } = useAuth();
  return (
    <>
      <main className="flex flex-col justify-center items-center h-svh">
        <section className="shadow-xl/30 p-6 rounded-lg w-7/8 md:w-4/5 min-h-[400px] h-fit lg:w-2/5 bg-white">
          <h1>Fullname: {fullName}</h1>
          <h1>Gender: {gender}</h1>
          <h1>Telphone: {telphone}</h1>
          <h1>Birthday: {birthday}</h1>
          <h1>Address: {address}</h1>
          <h1>StAddress: {stAddress}</h1>
          <h1>Aprtmnt: {aprtmnt}</h1>
          <h1>City: {city}</h1>
          <h1>State: {state}</h1>
          <h1>ZipCde: {zipCde}</h1>
        </section>
      </main>
    </>
  );
}
