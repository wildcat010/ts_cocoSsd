import './App.css';
import ImageGenerator from "./components/imageGenerator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = (type) => {
    switch(type){
      case 'ready':
        toast.success('Model loaded', {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          });
        break;
      case 'loading':
        toast("Loading the model, please wait ...", {
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,});
        break;
      default:
    }
    
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tensor Flow
        </h1>
        <h3>
          Image recognition with cocoSsd
        </h3>
      </header>
      <body>
      <ImageGenerator notification={notify}/>
      <ToastContainer />
      </body>
    </div>
  );
}

export default App;
