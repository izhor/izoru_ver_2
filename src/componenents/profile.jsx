import React from "react";
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Aos from "aos";


function Profile() {

    const steps = [
        {
          label: '2001',
          imgFile: "Born.png",
          description: 
            `
            5th of january 2001, Muhammad Alif Zhorif Arachdin (known as Alif, or Izhor), was born in Jakarta, Indoneisa
            `,
        },
        {
            label:'2007',
            imgFile: "Gaming.png",
            description:
            `
            At the age of 6, during his early elementary school, Alif has been introduced to technology by his parents through game,
            the very first game he play was Prehistorik 2, and 4D Prince of Persia, 2D classic games
            which originated from MS-DOS
            `,
        },
        {
            label: '2011',
            imgFile: "Flight.png",
            description: 
            `At the age of 10, Alif left his Country with his mother and little brother, to Saudi Arabia 
            to stay with his Father, this is where Alif interest in technology has growing slightly overtime`,
        },
        {
            label: '2012',
            imgFile: "goBack.png",
            description: 
            `in the middle of 2012, he had to go back to his Country, because his father's task in Saudi Arabia has ended, then he go back
            to elementary school he once apply, 03 R.A. Fadillah National Elementary School`,
        },
        {
            label: '2014',
            imgFile: "JuniorHigh.png",
            description: 
            `Alif has graduated from his elementary school, and decided to continue his study
            to PB Soedirman Islamic Junior High School, one of the reputable private junior high
            school in Jakarta, he also joined robotic extracurricular with some of his friend
            , this is where his interest in tech has truly grow, and his first step of making his way out to become a programmer`,
        },
        {
            label: '2016',
            imgFile: "Phone.png",
            description: 
            `
            During his 9th grade, Alif has shown determination to become a programmer, but he didn't know where to start, so one day
            he found a mobile app called 'sololearn' where he could learn about coding in his smarthphone, the first programming language
            he learn is Java.
            `,
        },
        {
            label: '2017',
            imgFile: "HighSchool.png",
            description: 
            `
            Alif Graduated from his junior high school, and decided to continue his education at
            10 Vocational High School, one of reputable public school in Jakarta, and he took Software Engineering Vocation because of
            his interest in programming. This is where his programming skills has improved significantly.
            `,
        },
        {
            label: '2019',
            imgFile: "Intern.png",
            description: 
            `
            on January 2019, Alif applied his first internship in PT 7sky global solution,
            a company located in East Jakarta, working as a fullstack developer for 3 months.
            `,
        },
        {
            label: '2020',
            imgFile: "computerScience.png",
            description: 
            `
            Alif has been graduated from his highschool, then he decided to continue to Indraprasta University,
            picking Informatics Engineering major, to pursuit his degree in Computer Science
            `,
        },
        
      ];

        const [activeStep, setActiveStep] = React.useState(0);

        const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        const handleReset = () => {
            setActiveStep(0);
        };

        const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
            color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center',
            ...(ownerState.active && {
              color: '#784af4',
            }),
            '& .QontoStepIcon-completedIcon': {
              color: '#784af4',
              zIndex: 1,
              fontSize: 18,
            },
            '& .QontoStepIcon-circle': {
              width: 8,
              height: 8,
              borderRadius: '50%',
            },
          }));

        function QontoStepIcon(props) {
            const { active, completed, className } = props;
          
            return (
              <QontoStepIconRoot ownerState={{ active }} className={className}>

                  {
                      completed?(
                        <div className="QontoStepIcon-circle has-background-link" />
                      ):(
                        <div className="QontoStepIcon-circle has-background-dark" />
                      )
                  }
              </QontoStepIconRoot>
            );
          }
  
    return(
        <div className="container" >
           <div className="columns is-vcentered ">
               <div className="column is-one-third">
                   <img src="/img/izoru.jpg" className="custom-photo" alt="izhor" srcset="" />
               </div>
               <div className="column has-text-centered-touch">
                   <div className="title is-3">Muhammad Alif Zhorif Arachdin</div>
                   <div className="subtitle is-5">
                        <span className="has-text-centered">
                            Passionate Developer
                        </span>
                   </div>
                   <div className="icon-box">
                       <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alif.zhorif/" className="mr-2"><i class="fa-brands fa-instagram instagram-icon"></i></a>
                       <a target="_blank" rel="noreferrer" href="https://t.me/izoruu" className="mx-2"><i class="fa-brands fa-telegram telegram-icon"></i></a>
                       <a target="_blank" rel="noreferrer" href="https://github.com/izhor" className="mx-2"><i class="fa-brands fa-github github-icon"></i></a>
                       <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alifzhorif" className="ml-2"><i class="fa-brands fa-linkedin linkedin-icon"></i></a>
                       <br />
                       <p className="my-1 subtitle is-6 special-hover">Click to visit</p>
                   </div>
               </div>
           </div>
           <section class="section is-medium">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 class="title">Dear Visitor who see this...</h1>
                    </div>
                    <div className="column">
                        <p className="content">
                            I just want to say enjoy the moment when you exploring my web pages, and sorry
                            if i have make some grammar mistakes, or some glitch that occured in this web,
                            and try to visit the web in various screen size,
                            you'll see the difference, it's not much, but in case if you really curious. and
                            last but not least:
                            <strong className="mx-1">ENJOY</strong>
                        </p>
                    </div>
                </div>
            </section>
            <section className="section has-text-centered" style={{"margin-bottom":'100px'}}>
                <div className="subtitle is-5"> Scroll down to see my 'interactive' story</div>
            </section>
           <div className="columns is centered">
                <div className="column"></div>
                <div className="column is-three-quarters">
                    <Box className="mx-5">
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    StepIconComponent={QontoStepIcon}
                                    optional={
                                        index === 8 ? (
                                        <Typography style={{"font-family":'Poppins'}}>The end</Typography>
                                        ) : null
                                    }
                                    >
                                    <div className="subtitle is-5">{step.label}</div>
                                </StepLabel>
                                <StepContent>
                                    <div className="columns is-vcentered">
                                        <div className="column has-text-centered is-one-third is-hidden-touch">
                                            <img src={"/img/"+step.imgFile} alt={"photo"+step.imgFile} className="image-stepper" />
                                        </div>
                                        <div className="column">
                                            <Typography className="subtitle is-6" style={{"font-family":'Poppins'}}>{step.description}</Typography>
                                        </div>
                                    </div>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                        <Button
                                            className="button is-link font-poppins"
                                            onClick={handleNext}
                                            
                                            >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            className="button is-white font-poppins"
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            
                                        >
                                            Back
                                        </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography className="subtitle" style={{"font-family":'Poppins'}}>That's the end of the story, this section will be updated througout as Alif's life goes</Typography>
                            <Button className="button is-white" onClick={handleReset} >
                                Back To Top
                            </Button>
                            </Paper>
                        )}
                    </Box>
                </div>
                <div className="column"></div>
           </div>

        </div>
    )
}


export default Profile;