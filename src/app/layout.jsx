import 'animate.css';
import '../styles/globals.css';
import { CSPostHogProvider } from './providers';
import Heading from './header/header';
import Navbar from './header/header';
import { Analytics } from "@vercel/analytics/react"
 
export const metadata = {
  title: "McGill AI Lab",
  description: "McGill's AI Lab where students work together to make AI projects",
}

export default function Layout({ children }) {
  
  return (
    <>
    
      <html lang="en" className='bg-offwhite'>
           <body>
          <link rel="icon" href="/images/favicon.ico" />
            <div className='bg-blue'>
              <main>
              <Navbar/>
                {children}
              <Analytics/>
              </main>
            </div>
          </body>
     </html>
    
    </>
    

  );
}