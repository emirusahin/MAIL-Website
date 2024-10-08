import 'animate.css';
import '../styles/globals.css';
// import { NextUIProvider } from '@nextui-org/react'; // Import NextUIProvider
import Heading from './header/header';
import Navbar from './header/header';

export default function Layout({ children }) {
  return (
    <html lang="en" className='bg-black'>
        <body>
          <div className='bg-blue'>
            <main>
            <Navbar/>
              {children}
            </main>
          </div>
        </body>
    </html>

  );
}