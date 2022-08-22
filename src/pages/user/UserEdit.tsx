import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import CButton from "../../components/CButton";
import CInput from "../../components/CInput";
import UserState from "../../states/UserState";

const UserEdit = () => {
  const [form, setForm] = useState({
    id: 0,
    name: "",
    email: "",
  });
  const [user, setUser] = useRecoilState(UserState);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || typeof +id !== "number") return;

    let convertId = +id;
    let currentUser = user.find((v) => v.id === convertId);

    if (currentUser) setForm(currentUser);
  }, []);

  function handleSubmit() {
    let latestUsers = user.map((val) =>
      val.id == form.id ? (val = form) : val
    );
    setUser(latestUsers);

    navigate(-1);
  }

  return (
    <>
      <CInput
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <CInput
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        containerClassname="mt-4"
      />
      <div className="flex justify-between mt-5">
        <CButton onClick={handleSubmit}>Submit</CButton>
        <CButton onClick={() => navigate(-1)}>Go Back</CButton>
      </div>
    </>
  );
};

export default UserEdit;
