import './globals.css';
// import { NextUIProvider } from '@nextui-org/react'; // Import NextUIProvider
import Heading from './header/header';
import Navbar from './header/header';

export default function Layout({ children }) {
  return (
    <html lang="en">
        <body>
          <div className='bg-black'>
            <main>
            <Navbar/>
              {children}
            </main>
          </div>
        </body>
    </html>

  );
}