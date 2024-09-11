import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <>
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
        {/* Navbar Start */}
        <div className="container-fluid nav-section border-0">
          <nav className="navbar navbar-light">
            <div className="navbar-nav flex-column">
              <Link href="#pigraHome" className="nav-item nav-link active">
                <span className="fa fa-home" /> Home
              </Link>
              <Link href="#pigraAbout" className="nav-item nav-link">
                <span className="far fa-address-card" /> About
              </Link>
              <Link href="#pigraService" className="nav-item nav-link">
                <span className="fab fa-servicestack" /> Service
              </Link>
              <Link href="#pigraBlog" className="nav-item nav-link">
                <span className="fa fa-blog" /> Blog
              </Link>
              <Link href="#pigraContact" className="nav-item nav-link">
                <span className="fas fa-address-book" /> Contact
              </Link>
            </div>
          </nav>
        </div>
        {/* Navbar End */}
        {/* Header Start */}
        <div className="container-fluid" id="pigraHome">
          <div className="container">
            <div className="row g-0">
              <div className="col-12 col-lg-3">
                <div className="header-content bg-dark h-100 pt-6 pe-6 pb-6">
                  <Link
                    href="index.html"
                    className="navbar-brand d-inline-flex pb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <h1 className="display-6 text-white mb-0">Rahul Patidar</h1>
                  </Link>
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <p className="text-white sub-title">
                      👋 Hello Im Rahul Patidar
                    </p>
                    <h1 className="display-6 text-white mb-0">
                      Creative Software Developer
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-9">
                <div className="header-img d-flex h-100 pt-6 ps-6 pb-6">
                  <div className="row g-5">
                    <div
                      className="col-xl-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div
                        className="bg-light p-4"
                        style={{
                          borderRadius: "68% 32% 100% 0% / 0% 75% 25% 100%"
                        }}
                      >
                        <img
                          src="img/header-img.png"
                          className="img-fluid w-100"
                          width={500}
                          height={500}
                          style={{
                            borderRadius: "68% 32% 100% 0% / 0% 75% 25% 100%"
                          }}
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div
                      className="col-xl-6 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h1 className="display-6 mb-4">MERN Stack Developer</h1>
                      <p className="mb-4">
                        Energetic and motivated developer with 2 years of
                        experience in building a website , including designing a
                        user interface, testing, debugging, optimizing
                        interactive, and maintaining function. A clear
                        understanding of modern technologies and best practices.
                        Ability to learn and collaborate in rapidly changing
                        environments and compositions.
                      </p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-map-marker-alt text-primary me-3" />
                        <p className="text-dark mb-0">
                          6/32 Maninager ujjain madhya pradesh
                        </p>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-envelope text-primary me-3" />
                        <p className="text-dark mb-0">
                          rahulpatidarsr@gmail.com
                        </p>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="fa fa-phone-alt text-primary me-3" />
                        <p className="text-dark mb-0">(+91) 7805916549</p>
                      </div>
                      <div className="d-flex align-items-center mb-4">
                        <i className="fab fa-firefox-browser text-primary me-3" />
                        <p className="text-dark mb-0">Yoursite@ex.com</p>
                      </div>
                      <div className="d-flex">
                        <Link
                          className="btn btn-primary btn-sm-square me-3"
                          href="#"
                        >
                          <i className="fab fa-facebook-f text-white" />
                        </Link>
                        <Link
                          className="btn btn-primary btn-sm-square me-3"
                          href="#"
                        >
                          <i className="fab fa-twitter text-white" />
                        </Link>
                        <Link
                          className="btn btn-primary btn-sm-square me-3"
                          href="#"
                        >
                          <i className="fab fa-instagram text-white" />
                        </Link>
                        <Link
                          className="btn btn-primary btn-sm-square me-0"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* About Start */}
        <div className="container-fluid" id="pigraAbout">
          <div className="container">
            <div className="row g-0">
              <div className="col-12 col-lg-3">
                <div className="about-header bg-dark h-100 pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">About Me</p>
                    <h1 className="display-6 text-white mb-0">
                      MERN Stack Developer
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-9">
                <div className="about-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-5">
                    <div className="col-xl-5">
                      <div
                        className="about-img bg-light p-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img
                          src="img/about.jpg"
                          className="img-fluid w-100"
                          alt="Image"
                        />
                        <div className="sosial-icon">
                          <Link
                            className="btn btn-primary btn-sm-square mb-3"
                            href="#"
                          >
                            <i className="fab fa-facebook-f text-white" />
                          </Link>
                          <Link
                            className="btn btn-primary btn-sm-square mb-3"
                            href="#"
                          >
                            <i className="fab fa-twitter text-white" />
                          </Link>
                          <Link
                            className="btn btn-primary btn-sm-square mb-3"
                            href="#"
                          >
                            <i className="fab fa-instagram text-white" />
                          </Link>
                          <Link
                            className="btn btn-primary btn-sm-square mb-0"
                            href="#"
                          >
                            <i className="fab fa-linkedin-in text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-7 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h4 className="mb-4">Hello, Im Rahul Patidar</h4>
                      <p className="mb-4">
                        Energetic and motivated developer with 2 years of
                        experience in building a website , including designing a
                        user interface, testing, debugging, optimizing
                        interactive, and maintaining function. A clear
                        understanding of modern technologies and best practices.
                        Ability to learn and collaborate in rapidly changing
                        environments and compositions.
                      </p>
                      <div className="row g-4 mb-4">
                        <div className="col-6">
                          <p>
                            <strong className="fw-bold text-dark">
                              Phone :
                            </strong>{" "}
                            + 7805916540
                          </p>
                          <p className="mb-0">
                            <strong className="fw-bold text-dark">
                              Address :
                            </strong>{" "}
                            123 6/32 Maninager ujjain madhya pradesh
                          </p>
                        </div>
                        <div className="col-6">
                          <p>
                            <strong className="fw-bold text-dark">
                              Nationality :
                            </strong>
                            Indian
                          </p>
                          <p>
                            <strong className="fw-bold text-dark">
                              Email :
                            </strong>
                            rahulpatidarsr@gmail.com
                          </p>
                          <p className="mb-0">
                            <strong className="fw-bold text-dark">
                              Freelancer :
                            </strong>
                            Available
                          </p>
                        </div>
                      </div>
                      <Link href="#" className="btn btn-primary py-2 px-4">
                        <i className="fas fa-download me-2" />
                        Download My CV
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Education Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="education-header bg-dark h-100 pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Education</p>
                    <h1 className="display-6 text-white mb-0">
                      My education qualification
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="education-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div
                        className="education-item rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <p className="fs-5 mb-0 me-4">
                            Mahakal Institute of Technology &amp; Management
                          </p>
                          <div>
                            <span className="fa fa-calendar me-1" /> 2016 - 2020
                          </div>
                        </div>
                        <h4 className="mb-3">
                          Electronics and Communications Engineering (ECE)
                        </h4>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="education-item rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <p className="fs-5 mb-0 me-4">Webster College</p>
                          <div>
                            <span className="fa fa-calendar me-1" /> 2017 - 2019
                          </div>
                        </div>
                        <h4 className="mb-3">UI/UX Design</h4>
                        <p className="mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, a quasi velit sint atque non saepe
                          quaerat ducimus, nobis error cupiditate, nisi
                          repudiandae dignissimos magnam? Dicta ab possimus
                          tempora nobis.
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="education-item rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <p className="fs-5 mb-0 me-4">Oxford University</p>
                          <div>
                            <span className="fa fa-calendar me-1" /> 2017 - 2019
                          </div>
                        </div>
                        <h4 className="mb-3">Java Development</h4>
                        <p className="mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, a quasi velit sint atque non saepe
                          quaerat ducimus, nobis error cupiditate, nisi
                          repudiandae dignissimos magnam? Dicta ab possimus
                          tempora nobis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Education End */}
        {/* Experience Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="experience-header bg-dark h-100 pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Experience</p>
                    <h1 className="display-6 text-white mb-0">
                      My real work experience
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="experience-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div
                        className="experience-item rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <p className="fs-5 mb-0 me-4">Historian</p>
                          <div>
                            <span className="fa fa-calendar me-1" /> 2017 - 2019
                          </div>
                        </div>
                        <h4 className="mb-3">Seinor UI/UX Desinger</h4>
                        <p className="mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, a quasi velit sint atque non saepe
                          quaerat ducimus, nobis error cupiditate, nisi
                          repudiandae dignissimos magnam? Dicta ab possimus
                          tempora nobis.
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="experience-item rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <p className="fs-5 mb-0 me-4">Historian</p>
                          <div>
                            <span className="fa fa-calendar me-1" /> 2017 - 2019
                          </div>
                        </div>
                        <h4 className="mb-3">UI/UX Designer</h4>
                        <p className="mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, a quasi velit sint atque non saepe
                          quaerat ducimus, nobis error cupiditate, nisi
                          repudiandae dignissimos magnam? Dicta ab possimus
                          tempora nobis.
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="experience-item rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="d-flex align-items-center mb-3">
                          <p className="fs-5 mb-0 me-4">Historian</p>
                          <div>
                            <span className="fa fa-calendar me-1" /> 2017 - 2019
                          </div>
                        </div>
                        <h4 className="mb-3">Junior Visual Designer</h4>
                        <p className="mb-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti, a quasi velit sint atque non saepe
                          quaerat ducimus, nobis error cupiditate, nisi
                          repudiandae dignissimos magnam? Dicta ab possimus
                          tempora nobis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Exparience End */}
        {/* Skills Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="skills-header h-100 bg-dark pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Skills</p>
                    <h1 className="display-6 text-white mb-0">
                      My expertise skills
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="skills-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <h1 className="display-6 text-dark mb-0">
                        Programming / Markup / Scripting languages
                      </h1>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-wordpress fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">JSON</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-figma fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            95
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">REST API</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-sketch fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            87
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">TypeScript</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.7s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-elementor fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            75
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0" />
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-js-square fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            67
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">JavaScript</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">
                          HTML &amp; CSS &amp; SASS &amp; Taiwind Css
                        </p>
                      </div>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <h1 className="display-6 text-dark mb-0">
                          Frameworks / Libaries / Database / Tools
                        </h1>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">Node.js(Adonis.Js)</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">TailwindCSS</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">Redux</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">Next.js</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">
                          Git &amp;&amp; Jira &amp;&amp; bitbucket
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div
                        className="skills-item text-center rounded p-4 h-100 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="text-primary text-center mb-3">
                          <span className="fab fa-html5 fa-3x" />
                        </div>
                        <div className="counter-counting d-flex justify-content-center">
                          <h4 className="display-6" data-toggle="counter-up">
                            98
                          </h4>
                          <h4 className="display-6">%</h4>
                        </div>
                        <p className="mb-0">Angular core and themes convert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills End */}
        {/* Service Start */}
        <div className="container-fluid" id="pigraService">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="service-header h-100 bg-dark pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">My Services</p>
                    <h1 className="display-6 text-white mb-0">
                      What I do for you
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="service-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-4">
                    <div className="col-12">
                      <div
                        className="service-item p-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="row g-4 align-items-center">
                          <div className="col-xl-2">
                            <i className="fas fa-bezier-curve fa-3x" />
                          </div>
                          <div className="col-xl-3">
                            <Link href="#" className="h4 mb-0">
                              Creative Design
                            </Link>
                          </div>
                          <div className="col-xl-4">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Reiciendis laboriosam repudiandae
                            </p>
                          </div>
                          <div className="col-xl-3">
                            <p>
                              <i className="fa fa-check me-2" /> UI/UX Design
                            </p>
                            <p>
                              <i className="fa fa-check me-2" /> Research
                            </p>
                            <p className="mb-0">
                              <i className="fa fa-check me-2" /> Mobile App
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="service-item p-4 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="row g-4 align-items-center">
                          <div className="col-xl-2">
                            <i className="fas fa-laptop-code fa-3x" />
                          </div>
                          <div className="col-xl-3">
                            <Link href="#" className="h4 mb-0">
                              Web Developm
                            </Link>
                          </div>
                          <div className="col-xl-4">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Reiciendis laboriosam repudiandae
                            </p>
                          </div>
                          <div className="col-xl-3">
                            <p>
                              <i className="fa fa-check me-2" /> UI/UX Design
                            </p>
                            <p>
                              <i className="fa fa-check me-2" /> Research
                            </p>
                            <p className="mb-0">
                              <i className="fa fa-check me-2" /> Mobile App
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        className="service-item p-4 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="row g-4 align-items-center">
                          <div className="col-xl-2">
                            <i className="fab fa-app-store fa-3x" />
                          </div>
                          <div className="col-xl-3">
                            <Link href="#" className="h4 mb-0">
                              Mobile Application
                            </Link>
                          </div>
                          <div className="col-xl-4">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Reiciendis laboriosam repudiandae
                            </p>
                          </div>
                          <div className="col-xl-3">
                            <p>
                              <i className="fa fa-check me-2" /> UI/UX Design
                            </p>
                            <p>
                              <i className="fa fa-check me-2" /> Research
                            </p>
                            <p className="mb-0">
                              <i className="fa fa-check me-2" /> Mobile App
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Portfolio Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="portfolio-header h-100 bg-dark pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Portfolio</p>
                    <h1 className="display-6 text-white mb-0">
                      My Recent Works
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
                  <div
                    className="portfolio-item py-5 border-bottom wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="row g-4 align-items-center">
                      <div className="col-xl-6">
                        <h4 className="text-body">Web Design</h4>
                        <h1 className="display-6 mb-0">
                          Software Design for ABC Corporation
                        </h1>
                      </div>
                      <div className="col-9 col-xl-4">
                        <div className="portfolio-img">
                          <div className="portfolio-img-inner">
                            <Image
                              src="/img/Portfolio-1.jpg"
                              className="img-fluid"
                              alt="Image"
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xl-2">
                        <div className="view-img">
                          <Link
                            href="img/Portfolio-1.jpg"
                            className="btn btn-primary btn-lg-square"
                            data-lightbox="Portfolio-1"
                          >
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="portfolio-item py-5 border-bottom wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="row g-4 align-items-center">
                      <div className="col-xl-6">
                        <h4 className="text-body">Web Development</h4>
                        <h1 className="display-6 mb-0">
                          Website Development for ABC Corporation
                        </h1>
                      </div>
                      <div className="col-9 col-xl-4">
                        <div className="portfolio-img">
                          <div className="portfolio-img-inner">
                            <Image
                              src="/img/portfolio-2.jpg"
                              className="img-fluid"
                              alt="Image"
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xl-2">
                        <div className="view-img">
                          <Link
                            href="img/portfolio-2.jpg"
                            className="btn btn-primary btn-lg-square"
                            data-lightbox="portfolio-2"
                          >
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="portfolio-item py-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="row g-4 align-items-center">
                      <div className="col-xl-6">
                        <h4 className="text-body">Photography</h4>
                        <h1 className="display-6 mb-0">
                          Security Analysis for ABC Corporation
                        </h1>
                      </div>
                      <div className="col-9 col-xl-4">
                        <div className="portfolio-img">
                          <div className="portfolio-img-inner">
                            <Image
                              src="/img/portfolio-3.jpg"
                              className="img-fluid"
                              alt="Image"
                              width={500}
                              height={500}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xl-2">
                        <div className="view-img">
                          <Link
                            href="img/portfolio-3.jpg"
                            className="btn btn-primary btn-lg-square"
                            data-lightbox="portfolio-3"
                          >
                            <i className="fas fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio End */}
        {/* Blog Start */}
        <div className="container-fluid" id="pigraBlog">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="blog-header h-100 bg-dark pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Blog</p>
                    <h1 className="display-6 text-white mb-0">Recent Posts</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="blog-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-4">
                    <div className="col-xl-6">
                      <div
                        className="blog-item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="row g-4">
                          <div className="col-4">
                            <div className="blog-item-img bg-dark h-100">
                              <Link href="#">
                                <Image
                                  src="/img/blog-1.jpg"
                                  className="img-fluid w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                  width={100}
                                  height={100}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="h-100">
                              <p className="text-body mb-3">
                                <i className="fa fa-calendar-alt me-2" />{" "}
                                November 12, 2024
                              </p>
                              <Link href="#" className="d-inline-block h4 mb-4">
                                Secrets of the Mobile Application
                              </Link>
                              <div className="py-2 px-3 bg-light d-flex justify-content-between">
                                <p className="mb-0 text-body">
                                  By{" "}
                                  <Link href="#" className="h6">
                                    Bernard
                                  </Link>
                                </p>
                                <p className="mb-0 text-body">
                                  In{" "}
                                  <Link href="#" className="h6">
                                    Design
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="blog-item wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="row g-4">
                          <div className="col-4">
                            <div className="blog-item-img bg-dark h-100">
                              <Link href="#">
                                <Image
                                  src="/img/blog-2.jpg"
                                  className="img-fluid w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                  alt="Image"
                                  width={100}
                                  height={100}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="h-100">
                              <p className="text-body mb-3">
                                <i className="fa fa-calendar-alt me-2" />{" "}
                                November 18, 2024
                              </p>
                              <Link href="#" className="d-inline-block h4 mb-4">
                                How to Create Quality Figma Design
                              </Link>
                              <div className="py-2 px-3 bg-light d-flex justify-content-between">
                                <p className="mb-0 text-body">
                                  By{" "}
                                  <Link href="#" className="h6">
                                    Walker
                                  </Link>
                                </p>
                                <p className="mb-0 text-body">
                                  In{" "}
                                  <Link href="#" className="h6">
                                    Media
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="blog-item wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="row g-4">
                          <div className="col-4">
                            <div className="blog-item-img bg-dark h-100">
                              <Link href="#">
                                <Image
                                  src="/img/blog-3.jpg"
                                  className="img-fluid w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                  alt="Image"
                                  width={100}
                                  height={100}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="h-100">
                              <p className="text-body mb-3">
                                <i className="fa fa-calendar-alt me-2" />{" "}
                                November 23, 2025
                              </p>
                              <Link href="#" className="d-inline-block h4 mb-4">
                                Tutorials for Learning Development
                              </Link>
                              <div className="py-2 px-3 bg-light d-flex justify-content-between">
                                <p className="mb-0 text-body">
                                  By{" "}
                                  <Link href="#" className="h6">
                                    Jacob
                                  </Link>
                                </p>
                                <p className="mb-0 text-body">
                                  In{" "}
                                  <Link href="#" className="h6">
                                    Lifestyle
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="blog-item wow fadeInUp"
                        data-wow-delay="0.7s"
                      >
                        <div className="row g-4">
                          <div className="col-4">
                            <div className="blog-item-img bg-dark h-100">
                              <Link href="#">
                                <Image
                                  src="/img/blog-4.jpg"
                                  className="img-fluid w-100 h-100"
                                  style={{ objectFit: "cover" }}
                                  alt="Image"
                                  width={100}
                                  height={100}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="h-100">
                              <p className="text-body mb-3">
                                <i className="fa fa-calendar-alt me-2" />{" "}
                                November 26, 2025
                              </p>
                              <Link href="#" className="d-inline-block h4 mb-4">
                                Tutorials for Learning Development
                              </Link>
                              <div className="py-2 px-3 bg-light d-flex justify-content-between">
                                <p className="mb-0 text-body">
                                  By{" "}
                                  <Link href="#" className="h6">
                                    Perkel
                                  </Link>
                                </p>
                                <p className="mb-0 text-body">
                                  In{" "}
                                  <Link href="#" className="h6">
                                    Design
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.9s">
                      <div className="blog-btn d-flex justify-content-center">
                        <p className="mb-0 me-2">For More Works Visit</p>
                        <Link href="#" className="btn d-inline-block p-0">
                          Our Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Testimonial Start */}
        <div className="container-fluid">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="testimonial-header h-100 bg-dark pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Testimonial</p>
                    <h1 className="display-6 text-white mb-0">
                      What People Say
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="testimonial-content h-100 pt-6 ps-6 pb-6">
                  <div
                    className="testimonial-carousel owl-carousel bg-light wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div
                      className="testimonial-item"
                      data-dot="<img class='img-fluid' src='img/testimonial-img-1.jpg' alt=''>"
                    >
                      <div className="row gy-4 gx-2 mb-4">
                        <div className="col-sm-6">
                          <div className="d-flex justify-content-sm-end">
                            <div
                              className="testimonial-inner-img border border-primary border-3 me-4"
                              style={{ width: 100, height: 100 }}
                            >
                              <Image
                                src="/img/testimonial-img-1.jpg"
                                className="img-fluid"
                                style={{ objectFit: "cover" }}
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div>
                            <h5 className="mb-2">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm-center">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Asperiores nemo facilis tempora esse explicabo
                          sed! Dignissimos quia ullam pariatur blanditiis sed
                          voluptatum. Totam aut quidem laudantium tempora.
                          Minima, saepe earum!
                        </p>
                        <div className="d-flex justify-content-sm-center">
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonial-item"
                      data-dot="<img class='img-fluid' src='img/testimonial-img-2.jpg' alt=''>"
                    >
                      <div className="row gy-4 gx-2 mb-4">
                        <div className="col-sm-6">
                          <div className="d-flex justify-content-sm-end">
                            <div
                              className="testimonial-inner-img border border-primary border-3 me-4"
                              style={{ width: 100, height: 100 }}
                            >
                              <Image
                                src="/img/testimonial-img-2.jpg"
                                className="img-fluid"
                                style={{ objectFit: "cover" }}
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div>
                            <h5 className="mb-2">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm-center">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Asperiores nemo facilis tempora esse explicabo
                          sed! Dignissimos quia ullam pariatur blanditiis sed
                          voluptatum. Totam aut quidem laudantium tempora.
                          Minima, saepe earum!
                        </p>
                        <div className="d-flex justify-content-sm-center">
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="testimonial-item"
                      data-dot="<img class='img-fluid' src='img/testimonial-img-3.jpg' alt=''>"
                    >
                      <div className="row gy-4 gx-2 mb-4">
                        <div className="col-sm-6">
                          <div className="d-flex justify-content-sm-end">
                            <div
                              className="testimonial-inner-img border border-primary border-3 me-4"
                              style={{ width: 100, height: 100 }}
                            >
                              <Image
                                src="/img/testimonial-img-3.jpg"
                                className="img-fluid"
                                style={{ objectFit: "cover" }}
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div>
                            <h5 className="mb-2">John Abraham</h5>
                            <p className="mb-0">New York, USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm-center">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Asperiores nemo facilis tempora esse explicabo
                          sed! Dignissimos quia ullam pariatur blanditiis sed
                          voluptatum. Totam aut quidem laudantium tempora.
                          Minima, saepe earum!
                        </p>
                        <div className="d-flex justify-content-sm-center">
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                          <i className="fas fa-star text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Contact Start */}
        <div className="container-fluid" id="pigraContact">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-3">
                <div className="contact-header h-100 bg-dark pt-6 pe-6 pb-6">
                  <div
                    className="text-start d-flex flex-column justify-content-center wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <p className="text-white sub-title">Contact Me</p>
                    <h1 className="display-6 text-white mb-0">
                      Let’s Start A New Project
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="contact-content h-100 pt-6 ps-6 pb-6">
                  <div className="bg-light p-4">
                    <div className="row g-5">
                      <div
                        className="col-xl-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <p className="mb-4">
                          The contact form is currently inactive. Get a
                          functional and working contact form with Ajax &amp;
                          PHP in a few minutes. Just copy and paste the files,
                          add a little code and you are done.
                          <Link
                            className="text-primary fw-bold"
                            href="https://htmlcodex.com/contact-form"
                          >
                            Download Now
                          </Link>
                          .
                        </p>
                        <div className="d-flex mb-4">
                          <div className="btn-xl-square bg-primary text-white me-3">
                            <i className="fas fa-map-marker-alt" />
                          </div>
                          <div>
                            <h4>Address</h4>
                            <p className="mb-0">123 Street New York.USA</p>
                          </div>
                        </div>
                        <div className="d-flex mb-4">
                          <div className="btn-xl-square bg-primary text-white me-3">
                            <i className="fas fa-envelope" />
                          </div>
                          <div>
                            <h4>Mail Us</h4>
                            <p className="mb-0">info@example.com</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white me-3">
                            <i className="fa fa-phone-alt" />
                          </div>
                          <div>
                            <h4>Telephone</h4>
                            <p className="mb-0">(+012) 3456 7890</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xl-7 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div>
                          <form>
                            <div className="row g-3">
                              <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control border-0"
                                    id="name"
                                    placeholder="Your Name"
                                  />
                                  <label htmlFor="name">Your Name</label>
                                </div>
                              </div>
                              <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                  <input
                                    type="email"
                                    className="form-control border-0"
                                    id="email"
                                    placeholder="Your Email"
                                  />
                                  <label htmlFor="email">Your Email</label>
                                </div>
                              </div>
                              <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                  <input
                                    type="phone"
                                    className="form-control border-0"
                                    id="phone"
                                    placeholder="Phone"
                                  />
                                  <label htmlFor="phone">Your Phone</label>
                                </div>
                              </div>
                              <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control border-0"
                                    id="project"
                                    placeholder="Project"
                                  />
                                  <label htmlFor="project">Your Project</label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    className="form-control border-0"
                                    id="subject"
                                    placeholder="Subject"
                                  />
                                  <label htmlFor="subject">Subject</label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-floating">
                                  <textarea
                                    className="form-control border-0"
                                    placeholder="Leave a message here"
                                    id="message"
                                    style={{ height: 120 }}
                                    defaultValue={""}
                                  />
                                  <label htmlFor="message">Message</label>
                                </div>
                              </div>
                              <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div
                        className="col-12 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="rounded">
                          <iframe
                            className="rounded w-100"
                            style={{ height: 400 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        {/* Footer Start */}
        <div className="container-fluid footer bg-dark border-bottom-0">
          <div className="container wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0">
              <div className="col-12">
                <div className="footer-content h-100 pt-6 ps-6 pb-6">
                  <div className="row g-4 align-items-center">
                    <div className="col-12 text-center">
                      <div className="d-flex justify-content-center">
                        <Link
                          className="btn btn-light btn-md-square me-3"
                          href=""
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link
                          className="btn btn-light btn-md-square me-3"
                          href=""
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link
                          className="btn btn-light btn-md-square me-3"
                          href=""
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link
                          className="btn btn-light btn-md-square me-0"
                          href=""
                        >
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <span className="text-body">
                        <Link href="#" className="border-bottom text-white">
                          <i className="fas fa-copyright text-body me-2" />
                          Your Site Name
                        </Link>
                        , All right reserved.
                      </span>
                    </div>
                    <div className="col-12 text-center text-body">
                      {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                      {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                      {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                      Designed By
                      <Link
                        className="border-bottom text-white"
                        href="https://htmlcodex.com"
                      >
                        HTML Codex
                      </Link>
                      Distributed By
                      <Link
                        className="border-bottom text-white"
                        href="https://themewagon.com"
                      >
                        ThemeWagon
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <Link href="#" className="btn btn-primary btn-lg-square back-to-top">
          <i className="fa fa-arrow-up" />
        </Link>
      </>
    </>
  );
}
