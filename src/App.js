// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from './screens/login/login';
import { Profile } from './screens/profile/profile';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/fb_copy" />} />
        <Route path="/fb_copy" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
