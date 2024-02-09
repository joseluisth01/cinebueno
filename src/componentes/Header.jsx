
import { Routes, Route, Link} from 'react-router-dom';
import Peliculas from '../paginas/Peliculas';
import logo from '../../public/img/logo2.2.png'
import inicio from '../../public/img/usuario.png'

const Header = () => {
    return (
        <header>
            <nav className="bg-neutral-900 border-gray-200 px-4 lg:px-6 py-5">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <a href="/" className="flex items-center ml-16 transition-transform transform hover:scale-80">
                        <img src={logo} className="w-32 transition-transform transform hover:scale-110" />
                    </a>

                    <div className="flex items-center lg:order-2 mr-7">
                        <a href="#" className="text-white dark:text-white hover:bg-[#2e3646] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><img className='usuario' src={inicio} /></a>
                    </div>

                    <div className="hidden justify-around w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
                            <li>
                                <Link to="/Peliculas" className="enlace">Películas</Link>
                            </li>
                            <li>
                                <a href="#" className="enlace">Estrenos</a>
                            </li>
                            <li>
                                <a href="#" className="enlace">About us</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <Routes>
                <Route path='/Peliculas' element={<Peliculas />} />
            </Routes>
        </header>
    )
}

export default Header;
