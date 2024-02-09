import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from '../componentes/Slide';
import portada from '../../public/img/portada.jpg'

const Mainprincipal = () => {

    // esta funcion comprueba si un elemento esta visible en pantalla
    function isVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    // cuando se carga la página...
    window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
        window.addEventListener('scroll', (ev1) => {
            // y a todos los elementos con la clase paused...
            document.querySelectorAll(".paused").forEach(elm => {
                if (isVisible(elm)) // que sean visibles...
                    elm.classList.remove("paused"); // les quitamos la clase paused
            })
        });
    });

    return (
        <div className='fondo'>
            <h1 className='fuente text-4xl ml-10'>Estrenos</h1>
            <Slide />
            <br /><br />
            <div className="flex wrapper">
                <div className="flex items-center">
                    <img src={portada} alt="Imagen" className="foto anim-up" />
                    <div className="px-4 w-70">
                        <p className="mt-3 text-center text-2xl fuente anim-upp anim-pause-2">¡Bienvenidos a <strong>TAPACO CINEMAS</strong>, donde la magia del cine cobra vida! <br /><br /></p>
                        <p className="mt-3 text-center text-2xl fuente anim-upp anim-pause-3">Con una selección diversa de películas y tecnología de vanguardia, estamos aquí para ofrecerte una experiencia cinematográfica inolvidable.<br /><br /></p>
                        <p className="mt-3 text-center text-2xl fuente anim-upp anim-pause-4">¡Prepárate para sumergirte en la magia del cine como nunca antes en TAPACO CINEMAS!</p>
                    </div>
                </div>
            </div>
            <br />
        </div>

    )
}

export default Mainprincipal
