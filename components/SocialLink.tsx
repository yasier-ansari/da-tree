import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiTwitter, FiFacebook, FiCodepen, FiDribbble, FiSend, FiTwitch, FiYoutube, FiFigma } from 'react-icons/fi'
import { SiHashnode, SiLeetcode, SiBuymeacoffee, SiCodechef, SiCodingninjas, SiFandom, SiFiverr, SiMastodon, SiStackoverflow, SiCodeforces } from 'react-icons/si'
import { FaSlack, FaMediumM } from 'react-icons/fa';
import { SlSocialBehance, SlSocialReddit, SlSocialTumblr, SlSocialSpotify } from 'react-icons/sl'
import { DiStackoverflow } from 'react-icons/di'
import { TbBrandSlack, TbBrandSpotify } from 'react-icons/tb'


interface SocialLink {
    url: string,
    linkName: string
}

const SocialLink = ({ url, linkName }: SocialLink) => {
    return (
        <a href={url} target="_blank" rel="noreferrer noopener" >
            {
                linkName == 'twitter' && (
                    <FiTwitter className="socIcon strokeIcon " />
                )
            }
            {
                linkName == 'instagram' && (
                    <FiInstagram className="socIcon strokeIcon " />
                )
            }
            {
                linkName == 'linkedin' && (
                    <FiLinkedin className="socIcon strokeIcon " />
                )
            }
            {
                linkName == "github" && (
                    <FiGithub className="socIcon strokeIcon" />
                )
            }
            {
                linkName == "mail" && (
                    <FiMail className="socIcon strokeIcon" />
                )
            }
            {
                linkName == "hashnode" && (
                    <SiHashnode className="socIcon" />
                )
            }
            {
                linkName == "leetcode" && (
                    <SiLeetcode className="socIcon " />
                )
            }
            {/* dfsf */}
            {
                linkName == "facebook" && (
                    <FiFacebook className="socIcon strokeIcon " />
                )
            }
            {
                linkName == "codepen" && (
                    <FiCodepen className="socIcon strokeIcon" />
                )
            }{
                linkName == "dribble" && (
                    <FiDribbble className="socIcon strokeIcon" />
                )
            }{
                linkName == "telegram" && (
                    <FiSend className="socIcon strokeIcon" />
                )
            }{
                linkName == "twitch" && (
                    <FiTwitch className="socIcon strokeIcon" />
                )
            }{
                linkName == "youtube" && (
                    <FiYoutube className="socIcon strokeIcon" />
                )
            }{
                linkName == "figma" && (
                    <FiFigma className="socIcon strokeIcon" />
                )
            }{
                linkName == "buymeacoffee" && (
                    <SiBuymeacoffee className="socIcon" />
                )
            }{
                linkName == "codechef" && (
                    <SiCodechef className="socIcon " />
                )
            }{
                linkName == "codingninja" && (
                    <SiCodingninjas className="socIcon" />
                )
            }{
                linkName == "wikifandom" && (
                    <SiFandom className="socIcon" />
                )
            }{
                linkName == "fiverr" && (
                    <SiFiverr className="socIcon" />
                )
            }{
                linkName == "mastodon" && (
                    <SiMastodon className="socIcon " />
                )
            }{
                linkName == "stackoverflow" && (
                    <DiStackoverflow className="socIcon" />
                )
            }{
                linkName == "codeforce" && (
                    <SiCodeforces className="socIcon " />
                )
            }{
                linkName == "slack" && (
                    <TbBrandSlack className="socIcon strokeIcon" />
                )
            }{
                linkName == "medium" && (
                    <FaMediumM className="socIcon " />
                )
            }{
                linkName == "behance" && (
                    <SlSocialBehance className="socIcon strokeIcon" />
                )
            }{
                linkName == "reddit" && (
                    <SlSocialReddit className="socIcon strokeIcon" />
                )
            }{
                linkName == "tumblr" && (
                    <SlSocialTumblr className="socIcon strokeIcon" />
                )
            }{
                linkName == "spotify" && (
                    <TbBrandSpotify className="socIcon strokeIcon" />
                )
            }
        </a>
    )
}

export default SocialLink