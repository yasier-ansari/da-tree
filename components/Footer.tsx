import Image from "next/image"
import { FiGitBranch, FiStar } from "react-icons/fi"
import logo from '../public/datree.webp';

interface Pass {
    githubInfo: any
}

const Footer = ({ githubInfo }: Pass) => {
    return (
        <footer className="footer" >
            <a href='https://github.com/yasier-ansari/da-tree/blob/main/README.md' target="_blank" rel="noreferrer noopener" className="footImgCont" >
                <Image src={logo} alt="logo" width={100} height={50} className="footImg" />
            </a>
            <hr className="line" />
            <a href="https://github.com/yasier-ansari/da-tree" target="_blank" rel="noreferrer noopener" className="footText">
                <div className="footHead" >Forked from Yasier Ansari </div>
                <div className="footTouch" >
                    <div className="footIconCont" ><FiStar className="footIcon" /> <p>{githubInfo.stars | 0}</p> </div>
                    <div className="footIconCont"><FiGitBranch className="footIcon" /> <p> {githubInfo.forks | 0}</p></div>
                </div>
            </a>
        </footer>
    )
}

export default Footer;