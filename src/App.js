import Navigation from "./components/routes/Navigation/Navigation.component";
import Home from "./components/routes/home/Home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;