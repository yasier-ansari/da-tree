import { useState, MouseEvent } from "react";
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2'
import Image from "next/image";
import data from '../data.json'

interface Link {
    img?: string,
    title: string,
    url: string
}

const LinkBar = ({ img, title, url }: Link) => {
    const [copyLink, setCopyLink] = useState('');
    const copyText = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(`${url}`);
            alert(`successfully copied :  ${title}'s link`);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <a href={url} target="_blank" rel="noreferrer noopener" className="linkBarCont group trans">
            <div className="linkDivCont">
                <div className="h-12 w-12" >
                    {
                        img && (
                            <Image src={img} width={50} height={50} alt='cardImage' className="linkImg" />
                        )
                    }
                </div>
                <p className="" >{title}</p>
                <button onClick={copyText} className="copyBtn">
                    <HiOutlineDocumentDuplicate className="copyIcon" />
                </button>
            </div>
        </a>

    )
}

export default LinkBar