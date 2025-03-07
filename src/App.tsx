import { type Component } from 'solid-js';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { selectedPage, showToast, toastInfo } from './stores/store';
import { Header } from './components/Header';
import { Home } from './components/Home';

const App: Component = () => {
  const pages = [<Home />, <Projects />, <Contact />]
  return (
    <>
      {showToast() && (
        <Toast />
      )}
      < Header />
      {pages[selectedPage()]}
    </>
  );
};

function Toast() {
  return (
    <div class="daisy-toast daisy-toast-top daisy-toast-end z-[999]">
      <div class="daisy-alert daisy-alert-success">
        <span>{toastInfo().message}</span>
      </div>
    </div>
  );
}

export default App;
