import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from '../components/Header/HeaderStyles';
const About = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "",
        padding: "10px",
        fontSize:"50px",
        fontFamily: "Poppins"
      };
    return (
        <>
            <Container>
                <Div1>
                    <Link href="/">
                        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                            <DiCssdeck size="3rem" /> <span>Mostakim's Portfolio</span>
                        </a>
                    </Link>
                </Div1>
                <Div2>
                    <li>
                        <Link href="/#projects">
                            <NavLink>Projects</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#tech">
                            <NavLink>Technologies</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <NavLink>About</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="/programming">
                            <NavLink>Programming</NavLink>
                        </Link>
                    </li>
                </Div2>
                <Div3>
                    <SocialIcons href="https://github.com/mostakiiiim">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/mostakim-reza-omey-52b17520a/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                </Div3>
            </Container>
            <div className="container mt-5 pt-5" style={mystyle}>
                <div className="row mb-5">
                <div className="col-md-6">
                        <img className="img-fluid" src="https://i.ibb.co/HT2DLgQ/my-bg2-4.png" alt="" />
                    </div>
                    <div className="col-md-6 fs-1">
                        <h1>Welcome To</h1>
                        <h1><span class="orange-highlight">Mostakim's</span> World</h1>

                        <p>I am a self-taught software developer looking to pursue a career in software development. With demonstrable technical proficiency in web design and mobile app development, a proven ability to apply my knowledge to new situations, and the ability to work well under pressure, in new environments and to stringent deadlines, I am an asset to any team. </p>
                        <a class="link-button" target="_blank" href="https://www.linkedin.com/in/mostakim-reza-omey-52b17520a/">HIRE ME</a>

                    </div>

                    

                
         
                <div className="row mt-5">
               
                    <div className="col-md-12 fs-2 text-center">
                        <h1>I am a tech enthusiast. So, over the years I had many setups. </h1>
                      

                        
                        

                    </div>
                    <div className="col-md-7">
                        <h3 className="text-center">My Old Setup</h3>
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/setup1.jpg" alt="" />
                    </div>
                    <div className="col-md-5">
                        <h2 className="text-center">My new Workstation</h2>
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/Setup.jpg" alt="" />
                    </div>
                   
                    

                </div>
                <div className="row mt-5">
               
                    <div className="col-md-12 fs-2 text-center">
                        <h1>Traveling has always been my passion</h1>
                      

                        
                        

                    </div>
                    <div className="col-md-7">
                      
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/india 1.jpg" alt="" />
                    </div>
                    <div className="col-md-5 fs-3">
                        <h2 className="text-center mt-5 pt-5 mb-5 fw-bold fs-1">Amber Fort</h2>
                        <p className="fs-1">Amber was once the capital of princely Jaipur state, and the fort the residence of its Rajput rulers. Maharaja Man Singh I, who led Mughal Emperor Akbar's army, commenced its construction in 1592 on the remains of an 11th-century fort. Successive rulers added to Amber Fort before moving the capital to Jaipur in 1727. The fort was declared a UNESCO World Heritage site in 2013, as part of a group of six hill forts in Rajasthan. Its architecture is a noteworthy fusion of Rajput (Hindu) and Mughal (Islamic) styles.</p>
                    </div>
                  
                    
                    <div className="col-md-5 fs-3">
                        <h2 className="text-center mt-5 pt-5 mb-5 fw-bold fs-1">Nizam's Musuem</h2>
                        <p className="fs-1">Nizam's Museum or H.E.H Nizam's Museum is a museum located in Hyderabad at Purani Haveli, a palace of the erstwhile Nizams. This museum showcases the gifts that the last Nizam of Hyderabad State, Osman Ali Khan, Asaf Jah VII received on his silver jubilee celebrations.</p>
                    </div>
                    <div className="col-md-7">
                      
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/india2.jpg" alt="" />
                    </div>
                  
                    <div className="col-md-12 fs-2 text-center">
                        <h1>I am also a food lover</h1>
                      <p>Here are my 3 top picks of each meal</p>

                        
                        

                    </div>
                    <div className="col-md-3">
                      
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/food1.jpg" alt="" />
                    </div>
                    
                    <div className="col-md-5">
                      
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/food2.jpg" alt="" />
                    </div>
                  
                    <div className="col-md-4">
                      
                        <img className="img-fluid rounded mt-5 pt-5" src="/images/food4.jpg" alt="" />
                    </div>
                  
                   
                    

                </div>
               

            </div>
        </>
    )

}
export default About;
