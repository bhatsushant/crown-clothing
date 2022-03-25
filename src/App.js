import Navigation from "./components/routes/Navigation/Navigation.component";
import Home from "./components/routes/home/Home.component";
import Authentication from "./components/routes/Authentication/Authentication.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;