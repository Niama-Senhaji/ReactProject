import { About } from "../components/About"
import { Education } from "../components/Education"
import { PersonalInfo } from "../components/PersonalInfo"
import { SocialLinks } from "../components/SocialLinks"
import { Footer } from "../components/Footer"
import {Certifications } from "../components/Certifications"
import { CompétencesTechniques } from "../components/Compétences Techniques"
import { Experiences } from "../components/Experiences"
import { ProjetsParascolaires } from "../components/ProjetsParascolaires"
import { Langues } from "../components/Langues"
import { CentresInterets } from "../components/CentresInterets"
import { LogicielsCompétences } from "../components/LogicielsCompétences"


export const Home = () => {
    return (
        <main>
          <About/>
          
          <PersonalInfo/>

          <SocialLinks/>

          <Education/>

          <Certifications/>  

          <CompétencesTechniques/>

          <Experiences/>

          <LogicielsCompétences/>

          <ProjetsParascolaires/>

          <Langues/>

          <CentresInterets/>
          
          <Footer/>

        </main>
      )

}