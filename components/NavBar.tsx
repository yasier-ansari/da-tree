import { useState, useEffect } from "react";
import { FiShare2 } from 'react-icons/fi'
import Image from "next/image";
import data from '../data.json'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    let [open, setOpen] = useState(false);
    const shareLink = () => {
        if (navigator.share) {
            navigator.share({
                title: `da-tree link`,
                url: `${data.webLink}`
            }).then(() => {
                console.log('Thanks for sharing!');
            })
                .catch(console.error);
        } else {

        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={` ${!isScrolled && 'invisible'} navbar`}>
            <button onClick={() => {
                window.scrollTo(0, -520);
            }} >
                <Image src={data.img} width={50} height={50} alt='navImage' className="navImg" />
            </button>
            <div className="navHead" >
                <span className="font-inter" >@</span>{data.at}
            </div>
            <button onClick={shareLink} className={` ${!isScrolled && 'navSharenoScroll'} ${isScrolled && 'navShareScroll'} navShareContainer  `} >
                <FiShare2 className={` ${isScrolled && 'stroke-white'} navShare`} />
            </button>
        </nav>
    );
};

export default Navbar;