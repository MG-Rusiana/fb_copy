// import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Login } from './screens/login/login';
import { Profile } from './screens/profile/profile';

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
