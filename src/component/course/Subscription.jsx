import React from 'react'
import { TbUserDollar } from "react-icons/tb";
import Card from './Card';
import Single from "../../assets/man.png";
import Networking from "../../assets/networking.png";
import Relations from "../../assets/relationship.png";
// 

export default function Subscription() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mx-auto container' >
<Card src={Single}  title="Single User" price="$149" features={["500GB Storage", "1 User Allowed", "Send up to 2GB"]} />      
<Card src={Networking} title="Networking" price="$249" features={["1TB Storage", "5 Users Allowed", "Send up to 10GB"]} />      
<Card src={Relations} title="Relations" price="$349" features={["2TB Storage", "10 Users Allowed", "Send up to 20GB"]} />      
    </div>
  )
}
