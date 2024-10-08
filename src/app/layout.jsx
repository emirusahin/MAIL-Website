import 'animate.css';
import '../styles/globals.css';
import { CSPostHogProvider } from './providers';
import Heading from './header/header';
import Navbar from './header/header';

export default function Layout({ children }) {
  
  return (
    <html lang="en" className='bg-black'>
        <CSPostHogProvider>
          <body>
            <div className='bg-blue'>
              <main>
              <Navbar/>
                {children}
              </main>
            </div>
          </body>
        </CSPostHogProvider>
    </html>

  );
}