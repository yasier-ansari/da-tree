import Image from "next/image"
import mainPfp from '../public/dummy.png'
import { HiOutlineCheckBadge } from 'react-icons/hi2'
import data from '../data.json'

const Mainsec = () => {
    return (
        <>
            <div className="mainImgCont" >
                <Image src={mainPfp} placeholder="blur"
                    loading="lazy" width={100} height={100} alt={data.name} className="mainImg" />
                <h2 className="mainHead" > <span className="at" >@</span>{data.at}<span> <HiOutlineCheckBadge className="badge" />  </span> </h2>
            </div>
            <div className="mainTextCont">
                <div>
                    <p className="mainProf" >
                        {
                            data.prof.map((e, i) => <span key={i} >{e} {i === data.prof.length - 1 ? '' : '▪️'} </span>)
                        }
                    </p>
                </div>
                <div className=" mainSubCont" >
                    <p> {data.subHead}</p>
                    <p>{
                        data.comp && <a href={data.compUrl} target="_blank" rel="noreferrer noopener" className="compLink" > <span className="at" >@</span>{data.comp}</a>
                    }</p>
                </div>
            </div>
        </>
    )
}

export default Mainsec;