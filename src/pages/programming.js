import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from '../components/Header/HeaderStyles';
import Link from 'next/link';

const Programming = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "",
        padding: "10px",
        fontSize:"50px",
        fontFamily: "Poppins"
      };
      const headingStyle={ 
        color: "white",
        backgroundColor: "",
        padding: "10px",
        marginTop: "40px",
        fontSize:"4rem",
        fontFamily: "Poppins"
      }
      

/* CSS */
 const buttonStyle = {
  fontFamily: "sans-serif",
  fontSize: "16px",
  letterSpacing: "2px",
  textDecoration: "none",
  textTransform: "uppercase",
  color:" #000",
  cursor: "pointer",
  border: "3px solid",
  padding: "0.25em 0.5em",
  boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
  position: "relative",
  userSelect: "none",

  touchAction: "manipulation",
  
}




 
    return (
        <>
        <div className="container">
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
           
        <div className="container ">
            <h1 className="fw-1 fw-bold text-center" style={mystyle}>  Programming Languages</h1>
            <div className="row">
                <div className="col-md-6" style={{fontSize: "2rem", fontFamily:"monospace"}} ><p>A programming language is a computer language programmers use to develop software programs, scripts, or other sets of instructions for computers to execute.Although many languages share similarities, each has its own syntax. Once a programmer learns the languages rules, syntax, and structure, they write the source code in a text editor or IDE. Then, the programmer often compiles the code into machine language that can be understood by the computer. Scripting languages, which do not require a compiler, use an interpreter to execute the script.</p></div>
                <div className="col-md-6"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/EGQh5SZctaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
            </div>
            <h2 className="fw-1 fw-bold text-center " style={headingStyle}>Six Steps of Programming Procedures</h2>
            <div className="row">
                <div className="col-md-6 p-5 mt-5 " style={{fontSize: "3rem", fontFamily:"monospace"}} >
                    <li>1. Program specification</li>
                    <li>2. Program design</li>
                    <li>3. Program code
</li>
                    <li>4. Program test
</li>
                    <li>5. Program documentation
</li>
                    <li>6. Program maintenance
</li>
                    <li><button style={buttonStyle} className="m-5" ><a href = "https://www.dotnetlanguages.net/six-steps-in-the-programming-process/">Learn More About Programming Procedures</a></button>
</li>
                </div>
                <div className="col-md-6"> <img width="100%" src="https://www.dotnetlanguages.net/wp-content/uploads/2018/07/program-development-life-cycle-768x768.png"></img>
</div>
            </div>
            <h2 className="fw-1 fw-bold text-center " style={headingStyle}>Object Oriented Programming</h2>
            <div className="row">
            <div className="col-md-6"><img src="https://cdn.ttgtmedia.com/rms/onlineimages/whatis-object_oriented_programming_half_column_desktop.png"></img>
</div>
                <div className="col-md-6" style={{fontSize: "2rem", fontFamily:"monospace"}} >
                    <p>What is OPP?</p>
                    <p>Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.</p>
              
                    <br/>
                    <p>What are some Programming languages Designed Primarily for OOP?</p>
                    <p>
                        <ul> ► Java</ul>
                        <ul> ► Python</ul>
                        <ul> ► C++</ul>
                        
                    </p>
                    <button style={buttonStyle} className="m-5" ><a href = "https://www.dotnetlanguages.net/six-steps-in-the-programming-process/">Learn More About OOP</a></button>
                    </div>
                
            </div>
            <h2 className="fw-1 fw-bold text-center " style={headingStyle}>Generations of Programming Languages</h2>
            <div className="row">
            <div className="col-md-6" style={{fontSize: "2rem", fontFamily:"monospace"}} >
                    <p>Programing Languages are Classified by levels or Generations</p>
                    <p>Lowe Level Languages are the oldest.</p>
              
                    <br/>
                    <p>The five generations of programming languages are:</p>
                    <p>
                        <ul> ► Machine Languages </ul>
                        <ul> ► Assembly Languages</ul>
                        <ul> ► Procedural Languages</ul>
                        <ul> ► Problem-Oriented Languages</ul>
                        <ul> ► Natural Languages</ul>
                        
                    </p>
                   
                    </div>

            <div className="col-md-6"><img width="100%" src="https://windowsground.com/wp-content/uploads/2020/05/What-is-generation-of-programming-languages-in-detail.png"></img>
</div>
                
                
            </div>
            <button style={buttonStyle} className="m-5 position-relative top-50 start-50 translate-middle" ><a href = "https://www.geeksforgeeks.org/generation-programming-languages/">Learn More About Generations of Programming Languages</a></button>
        <div>
            <img width="100%" src="https://i.ibb.co/JsWTrBm/MD-Mostakim-Reza-T20-EC3037.png"></img>
        </div>
        </div>
        </div>
          
        </>
    );
};

export default Programming;