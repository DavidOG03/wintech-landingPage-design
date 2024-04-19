"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "./components/card";
import Testimony from "./components/testimony";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);

  const [background, setBackground] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 32 ? setBackground(true) : setBackground(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    const closeMobileNav = (event) => {
      if (!event.target.closest(".menubar") && mobileNav) {
        setMobileNav(false);
      }
    };

    document.body.addEventListener("click", closeMobileNav);

    return () => {
      document.body.removeEventListener("click", closeMobileNav);
    };
  }, [mobileNav]);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 2.5,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   autoplay: true,
  //   speed: 10000,
  //   autoplaySpeed: 100,
  //   cssEase: "linear",
  //   pauseOnHover: true,
  // };

  const fadeup = {
    hidden: {
      // opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <>
      <nav
        className={`navbar flex justify-between items-center py-4 border-b border-solid border-[#EAEAEA] w-full transition px-[7.5%] fixed top-0 left-0 z-[999] ${
          background ? "bg-white" : "bg-transparent"
        }`}
      >
        <ul
          className={`menubar transition-all lg:hidden absolute top-0 -right-full px-8 py-12 bg-offwhite w-[300px] h-[100vh] shadow-sm border border-y-0 border-r-0 border-l-[#EAEAEA] flex flex-col justify-center items-start ${
            mobileNav ? "right-0" : ""
          }`}
        >
          <div className="close" onClick={() => setMobileNav(false)}>
            <Image
              src="/close-btn.svg"
              alt="close-btn iconn"
              width={0}
              height={0}
              priority
              className="absolute top-5 right-5 cursor-pointer w-8 h-8"
            />
          </div>
          <li className="py-2">
            <Link
              href="/#"
              className="text-black font-medium text-[18px] hover:text-purple tracking-tighter"
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/#about"
              className="text-black font-medium text-[18px] hover:text-purple tracking-tighter"
            >
              About
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/#services"
              className="text-black font-medium text-[18px] hover:text-purple tracking-tighter"
            >
              Services
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/#testimonials"
              className="text-black font-medium text-[18px] hover:text-purple tracking-tighter"
            >
              Testimonials
            </Link>
          </li>
        </ul>
        <Link href="/" className="flex items-end gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[50px] h-[50px]"
          />
          <span className="text-black text-[32px] font-bold inline-block tracking-tighter">
            Wintech
          </span>
        </Link>
        <div
          className="menu lg:hidden cursor-pointer"
          onClick={() => setMobileNav(true)}
        >
          <Image
            src="/hamburger.svg"
            alt="hamburger iconn"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="hidden lg:block mr-6">
          <ul className="menu-links flex flex-row justify-between items-center gap-6">
            <li>
              <Link
                href="/#"
                className="text-black font-medium text-base hover:text-purple tracking-tighter"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-black font-medium text-base hover:text-purple tracking-tighter"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-black font-medium text-base hover:text-purple tracking-tighter"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="text-black font-medium text-base hover:text-purple tracking-tighter"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="w-full">
        <motion.div
          className="hero w-full grid grid-rows-auto pt-[100px] pb-12 bg-gradient-to-br from-offwhite from-10% via-brightPurpleTransparent via-30% to-offwhite to-100% px-[7.5%] lg:grid lg:grid-cols-6 lg:gap-3"
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="head text-black text-[46px] leading-[50.6px] font-bold max-w-[345px] tracking-tighter lg:col-start-1 lg:col-span-4 lg:text-[70px] lg:max-w-[800px] lg:leading-[77px] xl:text-[80px] xl:leading-[88px]"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Create a captivating story that captures the essence of your brand.
          </motion.h1>
          <motion.a
            href="/#about"
            className="lg:col-start-1 lg:col-end-2 scroll-smooth"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="scroll-btn max-w-[161px] flex justify-start items-center gap-4 mt-4 lg:col-start-1 lg:col-end-2">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={13}
                height={40}
                priority
                className="arrow animate-bounce"
              />
              <p className="text-black text-[1rem] leading-6 xl:text-[22px] xl:leading-[33px] tracking-tighter">
                Scroll down to see more
              </p>
            </div>
          </motion.a>
          <motion.p
            className="cta text-black mt-8 lg:col-start-4 lg:col-span-2 xl:text-[22px] xl:leading-[33px] xl:col-start-4 xl:col-span-3 ml-8 tracking-tighter"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We're your ultimate destination for digital software solutions. At
            Wintech, we excel in bringing your concepts to life, crafting
            state-of-the-art digital innovations
          </motion.p>
          <motion.button
            className="start mr-auto button outline-none lg:col-start-4 lg:col-span-2 xl:text-[18px] tracking-tighter"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </header>
      <main className="hero">
        <section className="sponsors bg-black px-[7.5%]">
          <div className="sponsor-logos grid grid-cols-2 gap-[7.5%] lg:grid-cols-6 lg:place-items-center py-[7.5%] lg:py-8">
            <Image
              src="/boltshift.svg"
              alt="boltshift logo"
              width={0}
              height={0}
              priority
              className="w-full h-full"
            />
            <Image
              src="/lightbox.svg"
              alt="lightbox logo"
              width={0}
              height={0}
              className="w-full h-full"
              priority
            />
            <Image
              src="/featherdev.svg"
              alt="featherdev logo"
              width={0}
              height={0}
              priority
              className="w-full h-full"
            />
            <Image
              src="/spherule.svg"
              alt="spherule logo"
              width={0}
              height={0}
              className="w-full h-full"
              priority
            />
            <Image
              src="/globalbank.svg"
              alt="globalbank logo"
              width={0}
              height={0}
              className="w-full h-full"
              priority
            />
            <Image
              src="/nietzsche.svg"
              alt="nietzsche logo"
              width={0}
              height={0}
              className="w-full h-full"
              priority
            />
          </div>
        </section>
        <motion.section
          className="vision px-[7.5%] pt-[15%] pb-8 lg:py-[80px] bg-black border border-b-0 border-x-0 border-t-[#333333]"
          id="about"
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-white mt-8 text-3xl leading-[33px] font-bold tracking-tight lg:text-[50px] lg:leading-[55px] lg:max-w-[800px] xl:text-[60px] xl:leading-[66px]"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            In addition to delivering exceptional digital solutions, we are
            committed to empowering our clients with valuable knowledge and
            insights.
          </motion.h3>
          <motion.p
            className="purpose text-white mt-8 text-[18px] leading-7 font-medium tracking-tight lg:max-w-[800px] mr-auto"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We are the architects of innovation, pioneers of technological
            advancement, and collaborators in your triumphs. As a dynamic and
            forward-thinking entity, we're committed to revolutionizing
            industries and equipping businesses with the tools to thrive in the
            digital era.
          </motion.p>
          <motion.button
            className="read-more text-white mt-8 button outline-none lg:text-[18px]"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Learn More
          </motion.button>
        </motion.section>
        <motion.section
          className="services-section bg-white flex flex-col gap-6 pt-[15%] pb-8 lg:py-[100px] px-[7.5%] lg:px-[19%] "
          id="services"
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-purple text-[18px] font-medium block mr-auto px-3 py-1 rounded bg-grey mb-2"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h3>
          <motion.div
            className="services-box h-full flex flex-col gap-[5%] justify-between items-start"
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card
              icon="/security-white.svg"
              heading="Cybersecurity Solutions"
              body="Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats."
            />
            <Card
              icon="/phone-white.svg"
              heading="Mobile App Development"
              body="Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence is a crucial aspect of business"
            />
            <Card
              icon="/pie-white.svg"
              heading="Data Analytics and Insights"
              body="Unlocking the power of data to make informed decisions, identify trends, and gain a competitive edge in your industry."
            />
            <Card
              icon="/world-white.svg"
              heading="Custom Software Development"
              body="Tailor-made software solutions designed to align seamlessly with your unique business needs and drive productivity to new heights."
              classname="line"
            />
            <Link
              href="/"
              className="text-[18px] leading-[18px] font-medium text-white inline-block px-[28px] py-4 ml-[60px] mr-auto button outline-none tracking-tighter"
            >
              View More
            </Link>
          </motion.div>
        </motion.section>
        <motion.section
          className="contact py-[60px] lg:py-[80px] px-[7.5%] bg-work bg-fixed bg-cover bg-no-repeat bg-center backdrop-brightness-50 lg:grid-cols-2 lg:grid lg:lg:gap-8"
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-white text-[60px] leading-[60px] font-bold lg:text-[80px] lg:leading-[80px] xl:text-[100px] xl:leading-[100px] tracking-tighter"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let&apos;s build something different
          </motion.h3>
          <motion.p
            className="text-white text-lg leading-6 tracking-tighter mt-6 mb-[10px] lg:col-start-1 lg:max-w-[520px]"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Take the first step towards a brighter future and supercharge your
            business with cutting-edge technologies, expert guidance, and
            unparalleled support.
          </motion.p>
          <motion.a
            href="/"
            className=" bg-purple border border-purple transition px-5 py-6 text-white mt-10 hover:text-purple hover:bg-white hover:transition; rounded-none mx-auto text-center grid place-items-center outline-none lg:col-start-2 lg:col-span-1 lg:w-full lg:max-w-[400px] tracking-tighter"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.a>
        </motion.section>
        <motion.section
          className="testimonials-section bg-offwhite py-[60px] px-4 lg:py-[80px]"
          id="testimonials"
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-black font-bold text-[38px] text-center leading-10 tracking-tight pb-6 lg:text-[70px] lg:leading-[77px] max-w-[850px] mx-auto"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Trusted by more than 1000+ users around the world
          </motion.h3>
          <motion.p
            className="text-black text-base font-medium text-center mx-auto max-w-[600px] tracking-tighter"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We are more than just a business; we are a community driven by our
            passion for serving our customers with excellence
          </motion.p>
          <div className="testimonials-container overflow-hidden w-full h-full">
            <motion.div className="testimonial-slide flex flex-row lg:justify-center w-full gap-4 py-[60px] animation-slide overflow-x-scroll lg:overflow-hidden"
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{once : true}}>
              {/* <Slider {...settings}> */}
              <Testimony
                story="I cannot recommend Wintech enough! Their team went above and beyond to understand our unique business needs and delivered a custom software solution that has streamlined our operations and boosted productivity."
                name="Kaylynn Westervelt
            "
              />
              <Testimony
                story="We were blown away by Wintech's expertise! Their commitment to delivering a customized software solution tailored to our needs has had a remarkable impact on our operations, leading to increased efficiency and profitability."
                name="William Harris
            "
              />
              <Testimony
                story="I'm thrilled with Wintech's services! Their team's in-depth understanding of our industry allowed them to create a software solution that not only met but exceeded our demands, resulting in improved efficiency and growth."
                name="Sophia Watson
            "
              />
              <Testimony
                story="Wintech has been a true partner! Their thorough understanding of our business challenges and their ability to create a custom software solution has transformed our operations, making us more agile and competitive."
                name="Mia Lee
            "
              />
              {/* </Slider> */}
            </motion.div>
          </div>
        </motion.section>
        <motion.form
          className="newsletter py-[7.5%] px-[7.5%] bg-white"
          variants={fadeup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h4
            className=" text-purple font-bold text-[40px] text-center tracking-tighter lg:text-[80px] lg:leading-[80px] pb-6"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Newsletter
          </motion.h4>
          <motion.p
            className=" text-purpleText font-medium text-base text-center pb-8 lg:text-[18px] tracking-tighter"
            variants={letter}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Subscribe to our newsletter to get our news delivered to you.
          </motion.p>
          <motion.div
            className="input-group relative h-12 max-w-[345px] mx-auto lg:max-w-[550px] lg:h-[80px]"
            variants={fadeup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="hidden"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
              className="w-full h-full py-3 px-4 rounded-lg border border-purple outline-none hover:border-purple text-purple lg:py-6 lg:px-8 tracking-tighter"
            />
            <button
              type="submit"
              className="inline-block h-full bg-purple text-white border border-purple transition hover:bg-white hover:text-purple absolute bottom-0 right-0 px-4 py-2 border-top rounded-r-lg outline-none lg:px-8 tracking-tighter"
            >
              Join
            </button>
          </motion.div>
        </motion.form>
      </main>
      <footer className="pt-[60px] lg:pt-8 bg-black lg:grid lg:grid-cols-2 ">
        <div className="footer-wrapper flex flex-col justify-center items-center gap-6 px-[7.5%] border border-b-[#333333] border-t-0 border-x-0 pb-8 lg:border-none">
          <Link
            href="/"
            className="logo lg:mr-auto lg:ml-4 flex justify-center items-end gap-2"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-12 h-12"
            />
            <span className="text-offwhite text-[32px] font-bold inline-block tracking-tighter">
              Wintech
            </span>
          </Link>

          <div className="socials flex flex-row justify-center items-center gap-6 lg:mr-auto">
            <div className="icon lg:w-[34px] lg:h-[34px] ">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                ></path>
              </svg>
            </div>
            <div className="icon lg:w-[34px] lg:h-[34px]">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g clipPath="url(#primeTwitter0)">
                    <path
                      fill="#FFFFFF"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="primeTwitter0">
                      <path fill="#fff" d="M0 0h14v14H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>
            <div className="icon lg:w-[34px] lg:h-[34px]">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#FFFFFF"
                  d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334"
                ></path>
              </svg>
            </div>
            <div className="icon lg:w-[34px] lg:h-[34px]">
              <svg
                className=" w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#FFFFFF"
                  d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531c-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54c3.001 0 3.556 1.974 3.556 4.545zM4.447 6.194c-.954 0-1.72-.771-1.72-1.72s.767-1.72 1.72-1.72a1.72 1.72 0 0 1 0 3.44m1.484 10.85h-2.97V7.5h2.97zM18.522 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.042c.815 0 1.482-.644 1.482-1.44V1.44C20 .646 19.333 0 18.518 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="footer-links flex flex-col justify-center items-stretch gap-6 pt-8 lg:col-start-2 lg:pb-8">
          <div className="flex flex-row justify-center items-stretch gap-4 px-[7.5%]">
            <div className="links basis-2/4">
              <h4 className="heading text-white font-bold text-xl pb-6 text-left tracking-tighter">
                Template
              </h4>
              <ul className="flex flex-col justify-center items-start gap-4">
                <li>
                  <Link
                    href="/"
                    className=" text-white font-medium text-base block hover:text-purple tracking-tighter"
                  >
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className=" text-white font-medium text-base block hover:text-purple tracking-tighter"
                  >
                    404
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className=" text-white font-medium text-base block hover:text-purple tracking-tighter"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact flex flex-col justify-between items-start gap-4">
              <h4 className=" text-white font-bold text-xl pb-2 text-left tracking-tighter">
                Contact Us
              </h4>
              <p className="address text-white font-medium text-left text-base tracking-tighter">
                1234 Washington Ave. Manchester, Kentucky.
              </p>
              <Link
                target="_blank"
                href="mailto:tch@example.com"
                className="text-white underline tracking-tight font-medium text-base pb-1 text-left hover:text-purple "
              >
                wintech@example.com
              </Link>
            </div>
          </div>
          <hr className="border border-t-[#333333] border-b-0 border-x-0 lg:w-full lg:hidden" />
        </div>
        <p className="text-white w-full mx-auto text-center px-4 mb-8 py-8 lg:col-span-2 block border border-[#333333] border-x-0 border-b-0 border-t-0 lg:border-t  tracking-tighter">
          All Rights reserved. Created with{" "}
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className=" mt-4"
            >
              <path
                fill="#FF0012"
                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
              ></path>
            </svg>
          </span>{" "}
          by David_OG.
        </p>
      </footer>
    </>
  );
}
