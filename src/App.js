import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone } from 'react-icons/ai';

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
      <Navbar />
      <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-amber-400 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='/avatar.png' layout="fill" objectFit="cover" alt="Avatar" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-amber-400'>พีเค ภัคพล ธีรชัยศุภกิจ</h1>
        <h3 className='text-xl md:text-2xl'>Frontend Developer from  <span className='bg-gradient-to-b from-amber-400'>Devinit#2</span></h3>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
          <a href='https://www.linkedin.com/in/phakaphol-dherachaisuprakij-1092ab256/' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/GodzK' target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
          <a href='https://www.instagram.com/pk._tcsk/' target="_blank" rel="noopener noreferrer">
           <AiFillInstagram />
          </a>
        </div>
      </section>

    <section id='service' className=''>
      <h1 className='text-xl font-medium'>Project</h1>
      <p className='mt-1 text-md'>ผมได้ลองทำโปรเจกมามากมายเเละนี่คือส่วนหนึ่งของโปรเจกผมครับ</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='project1.png' className='w-66' alt='gambar' />
          <h2 className='text-xl'>Pk web Learner</h2>
          <p className='text-gray-500'>นี่คือเว็บสอนการเขียนโค้ดที่กำลังสร้างอยู่ครับ  จะเป็นเหมือนคล้ายๆกับเว็บที่มีคลิปให้คนเลือกที่จะเรียนได้ครับ เนื้อหาที่จะสอนคือMERN stack</p>
          <p className='text-xl '>Tools</p>
          <ul>
            <li>React</li>
            <li>tailwind</li>
            <li>fontawesome</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='project2.png' className='w-66' alt='gambar' />
          <h2 className='text-xl'>PK Delicious</h2>
          <p className='text-gray-500'>นี่คือเว็บที่จะสามารถใส่liastอาหารที่ชอบเเละเเนำได้มีฐานdatabase เเละcacheเรียบร้อย โดยที่ผมได้ฝึกทำทั้งslugในการสร้างหลายๆcomponentต่างๆ</p>
          <p className='text-xl'></p>
          <ul>
            <li>AWS</li>
            <li>Next js</li>
            <li>Reacct hook</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='project3.png' className='w-66' alt='gambar' />
          <h2 className='text-xl'>DevOps Architect</h2>
          <p className='text-gray-500'>นี่คือโปรเจกwebportfolioเว็บเเรกของผมที่ได้ทำการสร้างขึ้นโดยผมได้ใส่ทุกskillที่ผมมีทั้งหมดในwebนั้น เป็นwebที่มีทั้งผลงาน certificate ประสบการณต่างๆที่ได้เเชร์ให้เพื่อนๆได้รับรู็</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>Gitlab</li>
            <li>Ansible</li>
            <li></li>
          </ul>
        </div>

      </div>

    </section>

    <section id='portfolio' className='mt-10'>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'>Here are some projects that I have managed.</p>
    </section>

    <section id='license' className='mt-10'>
      <h1 className='text-xl font-medium'>Certificate</h1>
      <p className='mt-1 text-md'>นี่คือส่วนหนึ่งของcertificateผมครับ</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='42.png' />
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Discovery Piscine จาก 42 Bangkok</h1>
            <p className='text-sm text-gray-500'>20 ตุลาคม</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='kmitl.jpg' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>เข้าร่วมโครงการนักพัฒนามืออาชีพของทางสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h1>
            <p className='text-sm text-gray-500'>13-25พฤษจิกายน</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='linkin.png' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Carrer  Essential in Software</h1>
            <p className=''>Linkedin Learning with microsoft</p>
            <p className='text-sm text-gray-500'>18  มีนาคม 2023</p>
          </div>
        </div>
      </div>

    </section>
    
   

    <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Wanna talk anything?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>godzk25@gmail.com</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Bangkok</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>095-946-0008</p>
          </li>
        </ul>


        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          <a href=""> Phakaphol Dherachaiuphakij</a>.
        </p>

      </div>
      
    </section>

    </main>
  );
}

export default App;
