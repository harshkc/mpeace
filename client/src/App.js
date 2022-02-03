import NavBar from "./components/NavBar";
import ToastNotification from "./components/ToastNotification";
import Routes from "./pages/Routes";

const App = () => {
  return (
    <div>
      <ToastNotification />
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
