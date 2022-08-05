import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { FaDocker, FaFacebook, FaGithub, FaMeetup } from "react-icons/fa";
import { SiGotomeeting } from 'react-icons/si';
import { Layout, Typography, Button, Image } from 'antd';
import React from 'react';
const { Footer } = Layout;
const { Link, Text } = Typography;

const FooterSection = () => {
    return (
        <Footer style={{ textAlign: 'center', color: '#ffffff', backgroundColor: '#081F2C' }}>
            <div>
                <Text className="text-white">© 2018 Scality, Inc. All rights reserved.</Text>
                <Link className="p-2" href="#" target="_blank" style={{ color: '#41B3A8' }}>Privacy Policy</Link>
            </div>
            <div className="m-3">
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <AiFillTwitterCircle size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>Twitter</Link>
                </Button>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <TiSocialYoutubeCircular size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>YouTube</Link>
                </Button>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <FaDocker size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>Docker</Link>
                </Button>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <SiGotomeeting size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>Scality</Link>
                </Button>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <FaFacebook size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>Facebook</Link>
                </Button>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <FaGithub size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>GitHub</Link>
                </Button>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <FaMeetup size={20} className="m-1" />
                    <Link className="p-1" href="#" target="_blank" style={{ color: '#ffffff' }}>Meetup</Link>
                </Button>
            </div>
            <div>
                <Button size="small" type="text" className="text-white h-auto" onClick={() => { }} >
                    <Image
                        alt="logo" preview={false} style={{
                            filter: "brightness(11.25)",
                            height: '25px',
                        }}
                        src="https://d37uysqk07vju5.cloudfront.net/3388c618c452246a8f63fbdd93bd7a22580b27f6/assets/img/logo-icon.png"
                    />
                    <Link className="p-2 fs-6" href="#" target="_blank" style={{ color: '#ffffff' }}>Zenko.io</Link>
                </Button>
            </div>
        </Footer>
    )
}

export default FooterSection
