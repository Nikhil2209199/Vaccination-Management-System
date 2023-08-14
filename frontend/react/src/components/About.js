import React,{useEffect} from 'react';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function About() {
    useEffect=()=>{
            document.title="About Us"
          }
          
    return(
        <div>
     
        <br></br>
        <br></br>
        <br></br>
        <Container>
        <Typography variant='h6' display="block" gutterBottom>
              <h1>About Us</h1>    
          </Typography>
          <br></br>
          <Grid container spacing={7}>
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 1700 }} elevation={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    image="/images/vax.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      display="block"
                      component="div"
                      gutterBottom
                    >
                      <h1>Who We Are ?</h1>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    CoWIN serves the function of registration, appointment scheduling, identity verification, vaccination and certification of each vaccinated member.[4]Registration for the vaccination slots can be booked on the same day or a few days prior. The platform has also been integrated in the Aarogya Setu and UMANG Apps. The certificate after COVID-19 vaccination can also be obtained through the platform. To expedite the development of this platform, several existing digital assets were leveraged, such as : Electronic Vaccine Intelligence Network (eVIN),Digital Infrastructure for Vaccination Open Credentialing (DIVOC), DigiLocker, Surveillance and Action for Events Following Vaccination (SAFE-VAC). CoWIN application was developed with five modules: the orchestration module; the vaccination cold chain module; the citizen registration module; the vaccinator module; and the certificate, feedback, and adverse event following immunization reporting module.[5] As of now, eight vaccines can be registered on the platform in the country Covishield (18+), Covaxin (15+), Corbevax (12-14), Sputnik V (18+),Corbevax (12-14), Gemcovac (18+) Incovacc (18+), ZyCoV-D (18+) and Covovax (12+).[6]

                    In the future, the Health ministry is working on upgrading CoWIN for the effective implementation of India’s universal immunization programme. Co-WIN platform will be used for booking slots for the routine vaccinations like Polio and Hepatitis. This will allow healthcare professionals to digitally track the immunization status of beneficiaries (mother and children) on a real-time basis and address the vaccination needs immediately.[7]

                Doctors and medical professionals may soon be able to manage appointments and maintain patient records over the vaccine platform CoWIN, with the National Health Authority (NHA) integrating it with the Ayushman Bharat Digital Health Mission (ABDM)—the backbone of India’s digital healthcare system. This lightweight health management information system (HMIS) solution will allow small clinics and providers to manage appointments, patient information and prescriptions. The HMIS will be integrated with all ABDM modules and allow the doctor and clinic to create a health professional ID and a health facility ID[8]
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
  
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Grid container spacing={20}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 450 }} elevation={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    image="/images/vax1.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      display="block"
                      component="div"
                      gutterBottom
                    >
                      <h1>Our Aim</h1>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    This research study aims to describe the health outcomes of people diagnosed with COVID-19 in Queensland, over time and in relation to patient characteristics, by combining COVID-19 notification, hospital, general practice and death registry data.

General practice patient health information, in comparison to hospital data, contains additional, more detailed and up-to-date information on patient characteristics, including health conditions and medications at the time of infection.

We will be contacting patients who have or have had COVID-19 and will be inviting them to participate by giving their individual consent.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <br></br>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 450 }} elevation={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    image="/images/vax2.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      display="block"
                      component="div"
                      gutterBottom
                    >
                      <h1>Mission</h1>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    The Government of India (GOI) has announced the third stimulus package of Rs. 900 Crore for the Mission COVID Suraksha- The Indian COVID-19 Vaccine Development Mission. This grant will be provided to the Department of Biotechnology (DBT) for Research & Development of Indian COVID-19 vaccines.The COVID-19 Vaccine development Mission with end-to-end focus from preclinical development through clinical development and manufacturing and regulatory facilitation for deployment, would consolidate all available and funded resources towards an accelerated product development. This will help accelerate development of approx. 5-6 vaccine candidates and ensure that these are brought closer to licensure and introduction in market for consideration of regulatory authorities for introduction in public health systems, to combat further spread of COVID infection.

                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container>
          <Grid container spacing={20}>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 450 }} elevation={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="450"
                    image="/images/vax4.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      display="block"
                      component="div"
                      gutterBottom
                    >
                      <h1>Our Work</h1>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    CoWIN (Covid Vaccine Intelligence Network) is an Indian government web portal for COVID-19 vaccination registration, owned and operated by India's Ministry of Health and Family Welfare. It displays booking slots of COVID-19 vaccine available in the nearby areas and can be booked on the website. The site also provides vaccination certificates to the beneficiaries, which act as Vaccine Passports during the COVID-19 pandemic for the beneficiaries and can be stored in Digilocker.[2] Users can access the platform via desktop, tablet, and mobile phones.[3]
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <br></br>
          </Grid>
        </Container>
  
        <br></br>
        <br></br>
  
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
}
export default About