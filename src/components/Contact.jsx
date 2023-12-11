import {useState,useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
  //oRVyu0jvV13jp6bhe
  //service_4s1fohd
  //template_yl1s1fr
    emailjs.send(
      'service_4s1fohd',
      'template_yl1s1fr', 
       {
        from_name: form.name,
        to_name: 'Denis',
        from_email:form.email,
        to_email:'scoteeezy@gmail.com',
        message: form.message
       },
       'oRVyu0jvV13jp6bhe'
      ).then(()=>{
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible');
        setForm({
          name:"",
          email:"",
          message:""
        })
      },(error)=>{
        console.log(error);
        alert('Something went wrong.')
      })
  }
  console.log(form)
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn("left","tween", 0.2,1)}
      className='flex-[0.75] bg-black-100 rounded-2xl p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
            type="text" 
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
            type="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
            rows='7'
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
          type="submit"
          className='bg-teriary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl '
          > 
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <p className='text-white font-medium mt-4'>Or contact me via <a href='https://t.me/devdvlive' target='_blank' rel="noreferrer" className=' text-secondary hover:text-white'>Telegram</a> </p>
      </motion.div>

      <motion.div
      variants={slideIn("right","tween", 0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")