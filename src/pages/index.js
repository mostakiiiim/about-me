import About from '../components/About/About';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Programming from '../components/Programming/Programming';

import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About></About>
      <Projects />
      <Technologies />

      <Acomplishments />
      <Programming></Programming>
      


    </Layout>
  );
};

export default Home;
