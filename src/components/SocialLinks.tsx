import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export const SocialLinks = ()=> {
    return(
        <section className="mt-5 mb-4">
            <h3 className="text-2xl font-extrabold text-[#787FCD]">Mes réseaux sociaux</h3>

            <ul className="mt-5 mb-2">
                <li className='flex items-center'><FaInstagram className='mr-3'/> <a className="text-[#8255BA] hover:text-[#92D87C] hover:underline" style={{fontWeight: 'bold' }} href="https://www.instagram.com/niama_senhaji/">Instagram</a></li>
                <li className='flex items-center'><FaXTwitter className='mr-3'/> <a className="text-[#8255BA] hover:text-[#92D87C] hover:underline" style={{fontWeight: 'bold' }} href="https://x.com/NiamaSenhaji">X</a></li>
                <li className='flex items-center'><BsGithub className='mr-3'/> <a className="text-[#8255BA] hover:text-[#92D87C] hover:underline" style={{fontWeight: 'bold' }} href="https://github.com/Niama-Senhaji">GitHub</a></li>
                <li className='flex items-center'><FaLinkedin className='mr-3'/> <a className="text-[#8255BA] hover:text-[#92D87C] hover:underline" style={{fontWeight: 'bold' }} href="https://www.linkedin.com/in/niamasenhaji">Linkedin</a></li>
            </ul>
        </section>
    )
}