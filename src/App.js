import './App.css';
import Content from './Content';
import Menubar from './Menubar';


function App() {
  return (
    <div className='w-full h-full '>
      <div className='w-full h-full h-screen bg-gray-300 md:p-0 lg:px-2 lg:py-2'>
        <div className='bg-white  md:flex h-full '>
          <section className='md:basis-1/2 lg:basis-1/4'>
         <Menubar />
          </section>
          <section className='md:basis-4/5 lg:basis-3/4'>
            <Content />
            </section>
          
        </div>

      </div>
      </div>
  );
}

export default App;
