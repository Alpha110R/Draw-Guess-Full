import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Router from "./Router/Router";

function App() {
  return (
      <div style={mainPage}>
        <Header></Header>
        <Router></Router>
        <Footer></Footer>
      </div>
  );
}
const mainPage={
  backgroundColor: '#87CEFA',
  width: '100%',
  height: '70%',
  
  textAlign: 'center',
}

export default App;
