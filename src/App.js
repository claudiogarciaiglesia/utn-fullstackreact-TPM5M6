import { Provider } from "react-redux";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { store } from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Main />
    </Provider>
  )
}

export default App;
