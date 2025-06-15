import { motion } from 'framer-motion';
     import { Link } from 'react-router-dom';

     function Home() {
       return (
         <div className="py-12 bg-luo-pattern bg-cover bg-center">
           <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
             className="text-center"
           >
             <h1 className="text-5xl md:text-6xl font-bungee text-myrtle-900 mb-4">
               Kodong Klan
             </h1>
             <p className="text-xl md:text-2xl text-myrtle-700 mb-6 font-roboto max-w-2xl mx-auto">
               Celebrating Afro-fusion and Luo culture through music, art, and community
             </p>
             <Link
               to="/music"
               className="bg-saffron-600 text-white px-6 py-3 rounded-full hover:bg-saffron-700 transition font-roboto text-lg"
             >
               Explore Our Music
             </Link>
           </motion.div>
         </div>
       );
     }

     export default Home;
     