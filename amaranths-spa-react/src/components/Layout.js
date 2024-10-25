import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';  
import Footer from './Footer'; 
import './Layout.css';
import { useEffect } from 'react';
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useLocation } from 'react-router-dom';
//import MouseFollower from "mouse-follower";
//import 'mouse-follower/dist/mouse-follower.min.css';

gsap.registerPlugin(ScrollToPlugin);

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {

  //   const cursor = new MouseFollower({
  //     el: null,
  //     container: document.body,
  //     className: 'mf-cursor',
  //     innerClassName: 'mf-cursor-inner',
  //     textClassName: 'mf-cursor-text',
  //     mediaClassName: 'mf-cursor-media',
  //     mediaBoxClassName: 'mf-cursor-media-box',
  //     iconSvgClassName: 'mf-svgsprite',
  //     iconSvgNamePrefix: '-',
  //     iconSvgSrc: '',
  //     dataAttr: 'cursor',
  //     hiddenState: '-hidden',
  //     textState: '-text',
  //     iconState: '-icon',
  //     activeState: '-active',
  //     mediaState: '-media',
  //     stateDetection: {
  //         '-pointer': 'a,button',
  //         '-hidden': 'iframe'
  //     },
  //     visible: true,
  //     visibleOnState: false,
  //     speed: 0.55,
  //     ease: 'expo.out',
  //     overwrite: true,
  //     skewing: 0,
  //     skewingText: 2,
  //     skewingIcon: 2,
  //     skewingMedia: 2,
  //     skewingDelta: 0.001,
  //     skewingDeltaMax: 0.15,
  //     stickDelta: 0.15,
  //     showTimeout: 20,
  //     hideOnLeave: true,
  //     hideTimeout: 300,
  //     hideMediaTimeout: 300
  // });
    

  // document.addEventListener("DOMContentLoaded", function () {
  //   new MouseFollower();  // or your specific initialization
  // });


  //  return () => {
  //    cursor.destroy(); // Cleanup to prevent memory leaks
  //  };


  gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });

  }, [pathname])


  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>

      <div className='main'>
        <Outlet />  {/* This renders the current route's component */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
