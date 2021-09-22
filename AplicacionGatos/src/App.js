import './styles.css';
import logo from './media/cat_animal_4449.png';
import persa from './media/persa.jpg';
import siames from './media/siames.jpg';
import british from './media/british.jpg';
import esfinge from './media/esfinge.jpg';
import tuxedo from './media/tuxedo.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="Imagen del logo- gato" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">+ Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                <input placeholder="Buscar una raza" type="text"/>
                <i className="button fas fa-search iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registrarse</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1>RAZAS DE GATOS</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={persa} alt="Gato persa"/>
                    </div>
                    <span className="breedTitle">Gato persa</span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart">140</i>
                        </li>
                        <li>
                            <i className="fas fa-comment">1.5k</i>
                        </li>
                        <li>
                            <i className="fas fa-eye">120</i>
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={siames} alt="Gato siames"/>
                    </div>
                    <span className="breedTitle">Gato siamés</span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart">180</i>
                        </li>
                        <li>
                            <i className="fas fa-comment">1k</i>
                        </li>
                        <li>
                            <i className="fas fa-eye">200</i>
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={british} alt="Gato británico"/>
                    </div>
                    <span className="breedTitle">Gato británico</span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart">200</i>
                        </li>
                        <li>
                            <i className="fas fa-comment">1.8k</i>
                        </li>
                        <li>
                            <i className="fas fa-eye">180</i>
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={esfinge} alt="Gato esfinge"/>
                    </div>
                    <span className="breedTitle">Gato esfinge</span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart">40</i>
                        </li>
                        <li>
                            <i className="fas fa-comment">200</i>
                        </li>
                        <li>
                            <i className="fas fa-eye">112</i>
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={tuxedo} alt="Gato tuxudo"/>
                    </div>
                    <span className="breedTitle">Gato tuxedo</span>
                    <ul className="reactions">
                        <li>
                            <i className="fas fa-heart">180</i>
                        </li>
                        <li>
                            <i className="fas fa-comment">1k</i>
                        </li>
                        <li>
                            <i className="fas fa-eye">200</i>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
