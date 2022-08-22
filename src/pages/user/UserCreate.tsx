import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CButton from "../../components/CButton";
import CInput from "../../components/CInput";
import UserState from "../../states/UserState";

const UserCreate = () => {
  const [form, setForm] = useState({
    id: 0,
    name: "",
    email: "",
  });

  const [user, setUser] = useRecoilState(UserState);

  const navigate = useNavigate();

  function handleSubmit() {
    setForm({ ...form, id: user.length + 1 });
    setUser([...user, form]);

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

export default UserCreate;
