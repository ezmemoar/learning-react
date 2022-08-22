import { Route, Routes as Router } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import UserCreate from "./pages/user/UserCreate";
import UserEdit from "./pages/user/UserEdit";
import UserList from "./pages/user/UserList";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="user">
          <Route index element={<UserList />} />
          <Route path="create" element={<UserCreate />} />
          <Route path=":id" element={<UserEdit />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Router>
  );
};

export default Routes;
