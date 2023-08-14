import React,{useEffect, useState} from "react";
import "./HomePage.css";



function Home() {





  return (
   <>
   <br></br>
   <br></br>
   <section id="hero" className="d-flex align-items-center">
    <div  style={{backgroundColor:"lightgreen"}} className="container">
      <h1>Welcome to Vaccination Management System</h1>
      <h2></h2>
      <a href="/UMainUI" className="btn-get-started scrollto">Book Appointment</a><br/><br/>
      <a href="/CenterRegister" className="btn-get-started scrollto">Be a Vaccine Provider</a>
    </div>
  </section>
  <br></br>
  <br></br>
  <br></br>



  <section id="why-us" className="why-us">
      <div  style={{backgroundColor:"lightblue"}} className="container">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Should We Get Vaccinated ?</h3>
              <p>
              Vaccination is one of the most successful public health interventions in reducing disease spread, preventing complications and even deaths from vaccine preventable diseases. The success of vaccines in reducing disease should not suggest that vaccine preventable diseases are no longer a threat.
              </p>
              <div className="text-center">
                <a href="https://www.cowin.gov.in/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Prevention to avoid get Infected</h4>
                    <p>CAvoid physical contact like handshakes, hand holding or hugs. Avoid touching surfaces such as table tops, chairs, door handles etc. b) Practice good hygiene Wash your hands frequently using soap and water: After coming home from outside or meeting other people especially if ◆ they are ill.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>Step to get Vaccinated</h4>
                    <p>
                      <li>
                        <ul>
                          First Register Yourself To Our Website
                        </ul>
                        </li>
                        <li>
                        <ul>
                          Go to The Booking Page 
                        </ul>
                        </li>
                        <li>
                        <ul>
                          Book Your Appointment for specific vaccine and Center
                        </ul>
                      </li>
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h3>Book Your Vaccine Today To protect You and Your Family and Your Love One's</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>



    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
        <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <img src="https://as1.ftcdn.net/v2/jpg/03/27/25/78/1000_F_327257834_k5oTMNK0r0kG2Fj2opvBuoVsjELnqtmR.jpg" style={{marginLeft:"80px",marginTop:"50px"}} width={500} height={650}/>
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Vaccination Managemnet System

- The Scope of the Project is to achieve Distribution of Covid Vaccine in Efficient Manner. - Here we try to ensure that Vaccination should be distributed through right manner and try to fullfill the Requirement of project. - This project manages Registration, Appointment Scheduling, Managing Vaccines and Certification for Vaccination Community Members. - This Project will not provide vaccine for age less than 10 years.</h3>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title"><a href="/UserRegister">User Registration</a></h4>
              <p className="description">Register as a normal person</p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="/CenterRegister">Center Registration</a></h4>
              <p className="description">Register as a center </p>
            </div>

            <div className="icon-box">
              <div className="icon"><i className="bx bx-atom"></i></div>
              <h4 className="title"><a href="/AdminRegister">Admin Registration</a></h4>
              <p className="description">Moniter Everything</p>
            </div>

          </div>
        </div>

      </div>
    </section>

<body>


    <main>
        <section id="banner">
            <h1>Welcome to our Vaccination Website</h1>
            <p>Get vaccinated today to protect yourself and others.</p>
            <a href="#" class="button">Make an Appointment</a>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>We are dedicated to providing safe and effective vaccinations to the community.</p>
            <a href="#" class="button">Learn More</a>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <ul>
                <li>Vaccines for Adults and Children</li>
                <li>Flu Shots</li>
                <li>COVID-19 Vaccines</li>
                <li>Travel Vaccines</li>
                <li>And more...</li>
            </ul>
            <a href="#" class="button">View Our Services</a>
        </section>

        <section id="testimonial">
            <h2>Testimonials</h2>
            <blockquote>"I felt safe and comfortable getting my vaccine at this location. The staff were friendly and professional, and the process was quick and easy."</blockquote>
            <cite>Mukund Pal</cite>
        </section>
    </main>

</body>


   </>
  );
}

export default Home;
