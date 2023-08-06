import bg from '../assests/bgimg.jpg'
import hero from '../assests/hero.jpg'
import "./hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
    return (
        <div className='hero h-[100vh] border-b-2 border-b-white'>
            <div className='h-[100vh] md:px-24 sm:px-8 px-6 bg-[rgba(0,0,0,0.7)] relative'>
                <div className='flex lg:flex-row gap-32 flex-col items-center justify-around  h-full mx-auto'>
                   <div className='img-div ml-48'> <img className='xl:max-w-[450px] lg:max-w-[380px] md:max-w-[340px] max-w-[300px] rounded-full ' src={hero} alt="" /></div>
                    <div className='para-div flex flex-col float-right mr-7'>
                    <div className='lg:max-w-[50%] max-w-[100%] lg:mt-0 mt-6 text-start  bg-transparent'>
                        <h1 className='xl:text-8xl lg:text-6xl text-4xl font-extrabold leading-tight'>
                            <span className='text-[#D14095] s'> SAY  </span> 
                            <span className='text-[#bb0a1e] font-normal'> N
                                <FontAwesomeIcon icon={faBan} spin style={{color: "#bb0a1e",fontSize: '4.2rem' }} 
                                className='mb-[6px]'/>
                                </span><br></br>
                            <span className='text-[#D14095] whitespace-nowrap xl:text-[5.5rem] lg:text-4xl text-3xl'> TO HARASSMENT  </span> 
                           
                            
                            </h1><p className='text-white pt-5 font-bold text-justify ml-20 '>Dedicated to fostering a safe and respectful environment for everyone.Our mission is to raise awareness, educate, and support victims of sexual harassment while encouraging accountability and change in our society.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero