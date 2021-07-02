import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'; 

import {
	ChipIcon,
  CloudIcon,
  FingerPrintIcon,
  MapIcon
} from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="p-2 m-auto lg:max-w-screen-lg" >
      <Head>
        <title>7tm</title>
        <meta name="description" content="Automated Drug Discovery" />
        <link rel="icon" href="image.png" />
      </Head>

      <Header /> 
      
      <div className="h-screen text-center  bg-gradient-to-r from-green-50 via-blue-100 to-purple-300 rounded-sm grid ">
        <div className="m-auto">
          <span className="tracking-widest text-gray-500">We</span>
          <h1 className="text-5xl sm:text-7xl font-bold font-sans text-indigo-700 mb-2">
          Discover<br/>Drugs
          </h1>
<p className="font-bold mb-1 text-gray-500 tracking-widest">Quantum </p>
<p className="font-bold mb-1 text-gray-500 tracking-widest">Machine Learning</p>

          <p className="text-gray-500 tracking-widest">for Pre-Clinical R&D Pipelines</p>
        </div>
       
        <div className="flex justify-center ">
          <div className="h-64 w-64 relative">
          <Image 
            src="protein.gif"
            alt="protein gif"
            layout="fill" />
        </div> 
        </div>
    
      </div>

{/* What We Do Section Section */}
      
      <div className="h-screen grid sm:h-1/2 sm:grid-cols-2 gap-4 mt-4 ">

        <div>
  <div className="bg-white text-gray-500"><article className="prose ">
  <div className="divide-y-2">
  <div> <h1 id="Us" className="text-center ">What We Do</h1></div>
    <p className="p-4 font-mono text-justify">sevenTM accelerates drug development by building automated discovery pipelines. Our state-of-the-art cloud platform allows your R&D team to harness Machine Learning powered Quantum Physics for unprecedented computational bioinformatic accuracy. Our platform speeds time to clinical trial, reducing cost of new innovative therapeutic development.<br/> With our state-of-the-art target optimization toolkit your team can focus on the goal, rather than the process of, developing new life saving drugs.</p> 
  
  </div></article> 
 </div>
</div>
  <div><article className="prose"><div className="divide-y-2">
    <div><h1 className="text-center"> Why We Do It</h1></div>
    <p className="p-4 font-mono text-justify">Our goal is to create society changing pharmaceuticals.  We do this by partnering with organizations in the pharmaceutical ecosystem to co-create "druggable" GPRC targets from those currently considered "undruggable." <br/>We allow researchers to quickly and accurately identify potential docking sites and ligand interactions to increase the success rates for phase I, II and III clinical trials in the drug discovery process. We believe now is the time to utilize computational drug discovery tools to bring new therapeutics to light. </p>
  </div></article> 
  </div>
  </div> 

{/* Application Section */}
      <div className="sm:h-1/2 grid">
        <div className="m-auto mb-4 sm:mb-8">
  <article className="prose text-center w-screen">
  <h1 id="Products" className=""> Applications</h1>  
  </article>  
        </div>
        <div className="flex flex-grow justify-evenly mb-4 sm:mb-8">
    <div className="p-2 h-48 text-center font-mono text-sm sm:text-xl m-auto"><CloudIcon className="h-24 w-24 text-blue-500"/><p>Protein <br /> as a <br /> Service </p></div>
    <div className="p-2 h-48 text-center font-mono text-sm sm:text-xl m-auto"><FingerPrintIcon className="h-24 w-24 text-blue-500" /><p>Molecular <br/>Finger <br />Printing</p></div>
    <div className="p-2 h-48 text-center font-mono text-sm sm:text-xl m-auto"><MapIcon className="h-24 w-24 text-blue-500" /><p>Target<br/>Mapping</p></div>
    <div className="p-2 h-48 text-center font-mono text-sm sm:text-xl m-auto"><ChipIcon className="h-24 w-24 text-blue-500"/><p>Quantum <br/>Lead<br/>Generation</p></div>
  </div>
</div>

{/* Contact Section */}
      <div className="grid">
      <div className="m-auto">
  <article className="prose">
  <h1 id="Contact" className="text-center w-max ">Contact </h1></article>
      </div>
  <div className="sm:grid sm:grid-cols-2 gap-6 p-6 mb-4">
    <div className="font-mono  mb-6"><article className="prose"><h2 className="text-center">Our Location</h2>
    <p className="text-justify">Headquartered in Canada (Montreal & Toronto) and an office in Italy (Turin) we benefit from access to global technology hubs. With Canada's increasing investment in Machine Learning and BioTechnology we are surrounded by environments dedicated to proving first-class business resources.  </p></article></div>

    <div className="grid grid-cols-1 gap-4">
    <div className="font-mono text-center "><article className="prose"><h2>Message Us</h2></article></div> 
    
    {/* Form Data */}  
    
      <form method="post" action="mailto:info@seventm.com">
        <span className="font-mono">Name</span>
      <div>
        <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Jane Dough"/>
      </div> 
    

    <div>
      <span className="font-mono">Email</span>
      <div>
        <input type="email" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="jane@email.com"/>
      </div> 
    </div> 

    <div>
      <span className="font-mono">Subject</span>
      <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="1" placeholder="Proteins"></textarea>
    </div> 
      
    <div>
      <span className="font-mono">Message</span>
      <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3" placeholder="Do you have proteins?"></textarea>
    </div>
        
        <div className="grid">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2 m-auto font-mono">
        <input type="submit" value="" />
          submit
        </button>
        </div>
      </form> 
    </div>
  </div> 
      </div>      

      <footer className="grid grid-cols-4 text-sm margin-auto">
        <div className="h-20 w-20 sm:h-48 sm:w-48 relative mt-2" ><Image 
          src="image.png" 
          alt="logo"
          layout="fill" /></div>
        <div className="mt-2 font-mono">
          <p><b>sevenTM Ontario</b></p>
        <p> 101 College St</p>
        <p> Toronto, On</p> 
        <p> M5G 1L7 </p>
        </div>
        <div className="mt-2 font-mono">
          <p><b>sevenTM Quebec</b></p>
          <p>1000 Rue Saint-Jacques</p>
          <p>Montreal, Quebec</p>
          <p>H3C 1G7</p>
        </div>
        <div className="mt-2 font-mono">
            <p><b>sevenTM Turin</b></p>
            <p>2 Via Agostino da Montfeltro</p>
            <p>Torino, Italy</p>
            <p>10134</p>
          </div>
</footer> 

    <div className="bg-gray-50 text-center p-1 text-gray-400 font-mono"><p>©sevenTM Inc., 2021</p></div>

</div> 
  )
}
