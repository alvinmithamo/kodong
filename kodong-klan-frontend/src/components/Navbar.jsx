import { Link, NavLink } from 'react-router-dom';
     import { motion } from 'framer-motion';

     function Navbar() {
       return (
         <nav className="bg-myrtle-900 text-white p-4 sticky top-0 z-10">
           <div className="container mx-auto flex justify-between items-center">
             <Link to="/" className="text-2xl font-bungee">
               Kodong Klan
             </Link>
             <div className="space-x-4">
               <NavLink
                 to="/"
                 className={({ isActive }) =>
                   isActive ? 'text-saffron-600' : 'hover:text-saffron-600'
                 }
               >
                 Home
               </NavLink>
               <NavLink
                 to="/music"
                 className={({ isActive }) =>
                   isActive ? 'text-saffron-600' : 'hover:text-saffron-600'
                 }
               >
                 Music
               </NavLink>
               <NavLink
                 to="/events"
                 className={({ isActive }) =>
                   isActive ? 'text-saffron-600' : 'hover:text-saffron-600'
                 }
               >
                 Events
               </NavLink>
               <NavLink
                 to="/media"
                 className={({ isActive }) =>
                   isActive ? 'text-saffron-600' : 'hover:text-saffron-600'
                 }
               >
                 Media
               </NavLink>
               <NavLink
                 to="/blog"
                 className={({ isActive }) =>
                   isActive ? 'text-saffron-600' : 'hover:text-saffron-600'
                 }
               >
                 Blog
               </NavLink>
             </div>
           </div>
         </nav>
       );
     }

     export default Navbar;