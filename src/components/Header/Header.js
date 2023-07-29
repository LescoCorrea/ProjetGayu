import React from 'react'
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import TopNav from '../Navbar/TopNav';



export default function Header() {
    return (
        <div>
            <header className='header'>
                <TopNav />
                <div class="container mt-5">
                    <div class="">
                        <div class="ban-sect">
                            <h1 class="titl-sect">Le futur digital est arrivé !</h1>

                            <h6 class="sous-sect">Ici, nous réunissons artisans talentueux<br /> et visiteurs passionnés.</h6>

                            <div class="container-par">
                                <p class="par-sect">Lorem ipsum dolor sit amet consectetur. Egestas sit enim egestas malesuada nulla.
                                    Elementum mi
                                    risus nunc non in faucibus sit porttitor nec. Id amet sem donec massa scelerisque mauris tristique
                                    posuere.
                                    Sem integer risus scelerisque sit nibh. Risus quis pretium gravida dapibus faucibus at. Ultricies et
                                    habitant integer risus suspendisse suscipit eu sit pulvinar. Varius duis nisl sed sapien adipiscing a
                                    etiam
                                    mauris.
                                </p>
                            </div>
                            <div class="btn-links mt-3">
                                <div class="links1">
                                    <a href="/#">Lire plus</a>
                                </div>
                                <div class="links2">
                                    <a href="/#">Commencer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className='container-services mt-5'>
                <div className='container-fluid'>
                    <div className="container">
                        <h1 className='title-serv'>Gayu en tant que service</h1>
                        <div className="row">
                            <div className="col-md-5 mt-5 sect-service">
                                <p className='par-serv'>
                                    Lorem ipsum dolor sit amet consectetur. Id integer sem egestas urna lectus platea orci ac. Praesent ut nisl luctus eu nunc augue etiam pulvinar vitae. Morbi ultricies risus viverra sit facilisi ridiculus eget pulvinar. Quam justo in nisl enim nec fames dui. Lorem urna cursus in phasellus. Euismod nulla iaculis sapien viverra. Sagittis nisl eu nulla sit laoreet est. Netus
                                    nec at vitae diam quam elit sit lacus elementum. Eget sed nunc maecenas nisl proin. A.
                                </p>
                                <div className="btn-services">
                                    <div className="btn-link d-flex">
                                        <div className='link-serv'>
                                            <a href="/#" className='serv-prop'>A propos de nous</a>
                                        </div>
                                        <div className='reg-links'>
                                            <span className='serv-video'>Regarder la vidéo</span>
                                            <i class="fa fa-play" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 mt-5">
                                <div className='bg-video'>
                                    <div className='voir-video-content'>
                                        <img className="voir-video" src="images/Play.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container solution-container ">
                    <h1 className='title-serv'>Solutions</h1>
                    <div className="row">
                        <div className="col-md-6 mt-5 sect-service">
                            <h3 className='sol-title'>Profils d'artisans détaillés</h3>
                            <p className='par-serv'>
                                Notre plateforme peut fournir des profils détaillés pour chaque artisan, comprenant
                                des informations telles que leur expérience, leurs compétences, leurs réalisations
                                précédentes, leur philosophie artistique et leurs coordonnées. Cela permet aux visiteurs
                                d'avoir une vision claire de chaque
                                artisan et de trouver celui qui correspond le mieux à leurs besoins et à leurs attentes.
                            </p>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Lorem nam amet iaculis in dignissim eget sed diam pretium.
                                    Consequat vel sem enim aenean mauris nulla sit. Habitant nec turpis duis.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Pharetra sagittis neque aliquet aliquam cursus phasellus quis eu. Volutpat mauris egestas sit nisl. Consectetur
                                    est dignissim sit dui iaculis. Suscipit a sit porttitor iaculis elit sed elementum.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Id interdum convallis condimentum sit at.
                                    Augue in proin elementum quam. Enim.
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="sol-profil">
                                <div className='profile'>
                                    <img src="images/profile.png" alt="" />
                                </div>
                                <div className="profile mt-5">
                                    <div className='link-serv'>
                                        <a href="/#" className='serv-prop'>Voir nos artisans</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">

                    <div className="row">
                        <div className="col-md-6 mt-5 sect-service">
                            <h3 className='sol-title'>Messagerie et système de contact</h3>
                            <p className='par-serv'>
                                Notre plateforme peut fournir des profils détaillés pour chaque artisan, comprenant
                                des informations telles que leur expérience, leurs compétences, leurs réalisations
                                précédentes, leur philosophie artistique et leurs coordonnées. Cela permet aux visiteurs
                                d'avoir une vision claire de chaque
                                artisan et de trouver celui qui correspond le mieux à leurs besoins et à leurs attentes.
                            </p>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Lorem nam amet iaculis in dignissim eget sed diam pretium.
                                    Consequat vel sem enim aenean mauris nulla sit. Habitant nec turpis duis.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Pharetra sagittis neque aliquet aliquam cursus phasellus quis eu. Volutpat mauris egestas sit nisl. Consectetur
                                    est dignissim sit dui iaculis. Suscipit a sit porttitor iaculis elit sed elementum.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Id interdum convallis condimentum sit at.
                                    Augue in proin elementum quam. Enim.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Pharetra sagittis neque aliquet aliquam cursus phasellus quis eu. Volutpat mauris egestas sit nisl.
                                    Consectetur est dignissim sit dui iaculis. Suscipit a sit porttitor iaculis elit sed elementum.
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="sol-profil">
                                <div className='profile'>
                                    <img src="images/contact.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">

                    <div className="row">
                        <div className="col-md-6 mt-5 sect-service">
                            <h3 className='sol-title'>Évaluation et commentaires</h3>
                            <p className='par-serv'>
                                Notre plateforme peut fournir des profils détaillés pour chaque artisan, comprenant
                                des informations telles que leur expérience, leurs compétences, leurs réalisations
                                précédentes, leur philosophie artistique et leurs coordonnées. Cela permet aux visiteurs
                                d'avoir une vision claire de chaque
                                artisan et de trouver celui qui correspond le mieux à leurs besoins et à leurs attentes.
                            </p>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Lorem nam amet iaculis in dignissim eget sed diam pretium.
                                    Consequat vel sem enim aenean mauris nulla sit. Habitant nec turpis duis.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Pharetra sagittis neque aliquet aliquam cursus phasellus quis eu. Volutpat mauris egestas sit nisl. Consectetur
                                    est dignissim sit dui iaculis. Suscipit a sit porttitor iaculis elit sed elementum.
                                </p>
                            </div>
                            <div className='list-sol d-flex'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p className='par-servs'>
                                    Lorem ipsum dolor sit amet consectetur. Id interdum convallis condimentum sit at.
                                    Augue in proin elementum quam. Enim.
                                </p>
                            </div>


                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="sol-profil">
                                <div className='profile'>
                                    <img src="images/review.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-services mt-5'>
                <div className="container">
                    <h1 className='title-serv'>BLOG</h1>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="images/blog1.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">La menuiserie</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div className="profile mt-3">
                                        <div className='link-blog'>
                                            <a href="/#" className='blog-link'>Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src="images/blog2.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                                    <div className="profile mt-3">
                                        <div className='link-blog'>
                                            <a href="/#" className='blog-link'>Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src="images/blog3.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="profile mt-3">
                                        <div className='link-blog'>
                                            <a href="/#" className='blog-link'>Lire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile mt-5">
                        <div className='link-servs'>
                            <a href="/#" className='serv-prop'>Voir plus</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-services mt-5'>
                <div className="container">
                    <h1 className='title-serv'>L'équipe de Gayu</h1>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className='team-container'>
                                <img src="images/team1.png" alt="" />
                            </div>
                            <div className='team-body'>
                                <h5 className='team-name'>Abdou Khadre D. Maiga</h5>
                                <h6 className='team-fonction'>Co-fondateur & PDG</h6>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className='team-container'>
                                <img src="images/team3.png" alt="" />
                            </div>
                            <div className='team-body'>
                                <h5 className='team-name'>Abdou Khadre D. Maiga</h5>
                                <h6 className='team-fonction'>Co-fondateur & PDG</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-container">
                                <img src="images/team3.png" alt="" />
                            </div>
                            <div className='team-body'>
                                <h5 className='team-name'>Abdou Khadre D. Maiga</h5>
                                <h6 className='team-fonction'>Co-fondateur & PDG</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className='team-container'>
                                <img src="images/team1.png" alt="" />
                            </div>
                            <div className='team-body'>
                                <h5 className='team-name'>Abdou Khadre D. Maiga</h5>
                                <h6 className='team-fonction'>Co-fondateur & PDG</h6>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className='team-container'>
                                <img src="images/team4.png" alt="" />
                            </div>
                            <div className='team-body'>
                                <h5 className='team-name'>Abdou Khadre D. Maiga</h5>
                                <h6 className='team-fonction'>Co-fondateur & PDG</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='slider-testi'>
                {/*<Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div class="card text-center"><img class="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                <div class="card-body">
                                    <h5>Ronne Galle <br />
                                        <span> Project Manager </span>
                                    </h5>
                                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                        impedit quo minus id quod maxime placeat ” </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>*/}
            </section>

            <section className='container-services mt-5 mb-5'>
                <div className="container">
                    <h1 className='title-serv'>Contactez - nous</h1>
                    <p className='par-serv'>
                        Merci de votre intérêt pour la plateforme Gayu. Complétez le formulaire<br /> ci-dessous et certains vous contacteront sous peu.
                    </p>
                    <div className='row mt-5'>
                        <div className='col mb-5'>
                            <div className="form-container">
                                <form>
                                    <div>
                                        <input type="text" className="form-control mt-3" name="name" id="name" placeholder="Nom*" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control mt-3" name="name" id="name" placeholder="E-mail*" />
                                    </div>
                                    <div>
                                        <textarea className='form-control mt-3' name="" id="" cols="47.5" rows="7" placeholder='Entrez votre message ici'></textarea>
                                    </div>
                                    <div className="profile-contact mt-5">
                                        <div className='link-contact'>
                                            <a href="/#" className='serv-prop'>Soumettre</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col col-bg">
                            <div className='par-contact'>
                                <p className='paragraph-contact'>
                                    Lorem ipsum dolor sit amet consectetur. In magna vel convallis in tortor dictumst donec. Non cursus magna et tellus vitae est. Netus venenatis tempor sed in.
                                    Sed at ut amet ultricies turpis parturient etiam viverra. Magna sit varius amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
