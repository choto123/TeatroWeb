import './Home.css'
import { Formulario } from '../Formulario/Formulario'
export function Home() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              <img className=' w-75' src="../../src/assets/img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="fs-3 nav-link active text-white text-danger" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="fs-3 nav-link active text-white text-danger" href="#">
                    Obras
                  </a>
                </li>

                <li className="nav-item">
                  <a className="fs-3 nav-link active text-white text-danger" aria-current="page" href="#">
                    Historia
                  </a>
                </li>
                <li className="nav-item">
                  <a className="fs-3 nav-link active text-white text-danger" aria-current="page" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Buscar
                </button>

              </form>
            </div>
          </div>
        </nav>
      </header>
      <div className='banner text-white fw-bold'>

        <p className='texto '>¡Bienvenidos al Teatro El Truque Enclavado en el corazón de la ciudad de medellin, este tesoro oculto entre calles adoquinadas es un verdadero diamante en bruto del mundo teatral. Con una historia que se remonta a décadas de pasión por las artes escénicas, el Teatro Estelar Luna de Plata es un espacio donde la magia y la creatividad se entrelazan para crear experiencias inolvidables.</p>

      </div>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="row">
            <h1 className='text-center text-light'>OBRAS</h1>
            <div className="row row-cols-1 row-cols-md-3 my-3">

              <div className="col text-center">

                <div className="card h-100 p-3 shadow bg-warning-subtle">
                  <img src="../../src/assets/img/cart2.jpg" alt="" className='img-fluid w-100' />
                  <h3 className='text-center bold'>Fracturados</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat neque alias modi ab quia ad, architecto incidunt voluptatem cupiditate quo iste vitae amet quisquam veniam eius. Modi sunt fugiat delectus adipisci quia commodi dolorem voluptate perferendis iusto animi consectetur tempora sed quod laboriosam iure quam a esse dolore rem, cupiditate similique! Laborum amet aut expedita officia perspiciatis rem maxime quaerat omnis cumque ullam animi eaque, dicta id libero?</p>
                  <hr />
                  <h5 className='fw-bold text-success text-center'>PRECIO BOLETA</h5>
                  <h4 className='fw-bold text-success text-center'>$8.000</h4>
                  <button className='btn btn-primary'>
                    <i className="bi bi-coin"></i>
                    Comprar</button>
                </div>

              </div>
              <div className="col text-center">
                <div className="card h-100 p-3 shadow bg-warning-subtle">
                  <img src="../../src/assets/img/cart1.jpg" alt="" className='img-fluid w-100' />
                  <h3 className='text-center bold'>El Corazon Delator</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat neque alias modi ab quia ad, architecto incidunt voluptatem cupiditate quo iste vitae amet quisquam veniam eius. Modi sunt fugiat delectus adipisci quia commodi dolorem voluptate perferendis iusto animi consectetur tempora sed quod laboriosam iure quam a esse dolore rem, cupiditate similique! Laborum amet aut expedita officia perspiciatis rem maxime quaerat omnis cumque ullam animi eaque, dicta id libero?</p>
                  <hr />
                  <h5 className='fw-bold text-success text-center'>PRECIO BOLETA</h5>
                  <h4 className='fw-bold text-success text-center'>$20.000</h4>
                  <button className='btn btn-primary'>
                    <i className="bi bi-coin"></i>
                    Comprar</button>
                </div>
              </div>
              <div className="col text-center">
                <div className="card h-100 p-3 shadow bg-warning-subtle">
                  <img src="../../src/assets/img/cart3.jpg  " alt="" className='img-fluid w-100' />
                  <h3 className='text-center bold'>El Ahijado De La Muerte</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat neque alias modi ab quia ad, architecto incidunt voluptatem cupiditate quo iste vitae amet quisquam veniam eius. Modi sunt fugiat delectus adipisci quia commodi dolorem voluptate perferendis iusto animi consectetur tempora sed quod laboriosam iure quam a esse dolore rem, cupiditate similique! Laborum amet aut expedita officia perspiciatis rem maxime quaerat omnis cumque ullam animi eaque, dicta id libero?</p>
                  <hr />
                  <h5 className='fw-bold text-success text-center'>PRECIO BOLETA</h5>
                  <h4 className='fw-bold text-success text-center'>$12.000</h4>
                  <button className='btn btn-primary'>
                    <i className="bi bi-coin"></i>
                    Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="banner2 text-white fw-bold ">
        <h1>Historia</h1>
        <p className='fs-5'>La Corporación artística y cultural Teatro el Trueque, es fundado en el 2001 por estudiantes del departamento de teatro de la Universidad de Antioquia, quienes inician su que hacer escénico sin contar con una sede propia y difundiendo su propuesta artística en algunas de las más importantes sedes teatrales de Medellín.

          A comienzos del 2009, un hecho fundamental marca la historia del grupo teatral El Trueque, al adquirir una sede en alquiler con el objeto de brindar programación cultural continua. Así se inician las labores permanentes de creación en una sede ubicada en el centro de Medellín, en una antigua casa que había servido por más de veinte años a diversos grupos teatrales.

          El grupo artístico ha estado influenciado notoriamente por textos literarios y cuenta con seis adaptaciones dramáticas que se basan en cuentos, relatos y novelas de autores de diferentes épocas y diversa índole.

          Este proyecto artístico que se consolida en la actualidad como una expresión estética importante que se inscribe en el conjunto de manifestaciones culturales que se deben fomentar y promover en Medellín.

          Manténgase actualizado con la programación de teatro el Trueque y los diferentes eventos de nuestra sala, artes escénicas, música, cine.</p>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <h1>Contactanos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg></h1>
                <Formulario></Formulario>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-fluid bg-dark text-white">
          <div className="row p-5">
            <div className="col-6 text-end border-end">
              <h5>Medellin-colombia</h5>
              <h5>Todos los derechos reservados &copy;</h5>
            </div>
            <div className="col-6 aling-self-center">
              <i className="bi bi-instagram p-2 fs-4"></i>
              <br />
              <i className="bi bi-whatsapp p-2 fs-4"></i>
              <br />
              <i className="bi bi-twitter-x p-2 fs-4"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}