import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import { motion } from 'framer-motion';
     import Navbar from './components/Navbar';
     import Home from './components/Home';
import Events from './components/Events';
import Music from './components/Music';
     function App() {
       return (
         <Router>
           <div className="bg-saffron-50 min-h-screen">
             <Navbar />
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="container mx-auto px-4"
             >
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/music" element={<Music />} />
                 <Route path="/events" element={<Events />} />
                 <Route path="/media" element={<Media />} />
                 <Route path="/blog" element={<Blog />} />
               </Routes>
             </motion.div>
           </div>
         </Router>
       );
     }

     export default App;