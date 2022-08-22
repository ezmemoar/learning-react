import { useRecoilState } from "recoil";
import CButton from "../../components/CButton";
import CLink from "../../components/CLink";
import CTable from "../../components/CTable";
import UserState from "../../states/UserState";

const UserList = () => {
  const [user, setUser] = useRecoilState(UserState);

  const deleteUser = (id: number) => setUser(user.filter((v) => v.id !== id));

  let datas =
    user.length < 1 ? (
      <tr>
        <td colSpan={2} className="py-4 px-3 text-center">
          Tidak ada Data
        </td>
      </tr>
    ) : (
      user.map((val) => (
        <tr key={val.id}>
          <td className="border border-slate-300 p-5">{val.name}</td>
          <td className="border border-slate-300 p-5">{val.email}</td>
          <td className="border border-slate-300 p-5 text-center">
            <CLink to={`/user/${val.id}`} className="mr-3">
              Edit
            </CLink>
            <CButton onClick={() => deleteUser(val.id)}>Delete</CButton>
          </td>
        </tr>
      ))
    );

  return (
    <>
      <CTable>
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Name</th>
            <th className="border border-slate-300 p-2">Email</th>
            <th className="border border-slate-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>{datas}</tbody>
      </CTable>
    </>
  );
};

export default UserList;
