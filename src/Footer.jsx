
import './styles/Footer.css'
export default function Footer(){
    return(
        <div className="ca-Footer">
            <div className="ca-Footer-container">
                <div>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam </h6>
                </div>
                <form action="">
                    <input type="text" name="" id="" />
                    <input type="submit" value="Enviar" />
                </form>
                <div>
                    <a href="">Nosotros</a>
                    <a href="">Testimonios</a>
                    <a href="">Nuestros colaboradores</a>
                    <a href="">Clientes</a>
                    <a href="">Productos</a>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <div>
                        <h6>info@mysite.com</h6>
                        <h6>123-456-7890</h6>
                        <h6>500 Terry Francine Street,San Francisco, CA 94158</h6>
                        <div>
                            <img src="./src/assets/icons/social_facebook.png" alt=""></img>
                            <img src="./src/assets/icons/social_instagram.png" alt=""></img>
                            <img src="./src/assets/icons/social_twitter.png" alt=""></img>
                            <img src="./src/assets/icons/social_whatssap.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}