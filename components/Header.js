import Image from 'next/image'
import Link from 'next/link'

import {
	HomeIcon,
	InformationCircleIcon,
	PhoneIcon,
	UserAddIcon,
	RssIcon,
	CodeIcon,
} from "@heroicons/react/outline";
import HeaderItem from './HeaderItem';

function Header() {
	return(
		<header className="flex flex-col sm:flex-row mt-5 justify-betwen items-center ">
			<div className="w-full  mb-3">
				<p className="font-mono text-2xl mb-2 sm:mb-4 text-center sm:text-left">Givingg</p>
			</div>
			<div className="flex flex-grow justify-evenly max-w-2xl">
				
				{/* Information Header */}
				<div>
				<a href="#Us">
				<HeaderItem title="Us" Icon={InformationCircleIcon} />
				</a>
				</div>
			
				{/* Applications Header */ }
				<div>
				<a href="#Products">
				<HeaderItem title="Products" Icon={CodeIcon} />
				</a>
				</div> 

				{/* Contact Header */}
				<div>
				<a href="#Contact">
				<HeaderItem title="Contact" Icon={PhoneIcon} /> 
				</a>
				</div>
					
				{/* Career Header */}
				<div>
				<a href="https://angel.co/company/givingg/jobs">
				<HeaderItem title="Career" Icon={UserAddIcon} />
				</a>
				</div>

				{/* RSS Header */}
				<div>
					<a href="https://bullshit.ist/">
				<HeaderItem title="Blog" Icon={RssIcon} /> 
				</a>
				</div>

				{/* Home Header */}
				<div>
					<a href="https://givin.gg">
				<HeaderItem  title='Home' Icon={HomeIcon} />
				</a>
				</div>

			</div>
			
		</header> 
	)
}

export default Header 
