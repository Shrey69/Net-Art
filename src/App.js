import './App.css';
import Footer from './components/Footer';
import Head from './components/Head';
import Last from './components/Last';
import Main from './components/Main';
import Third from './components/Third';

function App() {
  return (
    <div className='  h-[100%] w-full bg-gradient-to-t from-yellow-200  to-white'>

      <Head />
      <Main />
      <Third />
      <Last />
      <Footer/>
      
    </div>
  );
}

export default App;
