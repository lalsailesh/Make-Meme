'use client'

import React from "react"
import styles from "./Footer.module.css"
import Link from "next/link"
import ImageStackComponent from "@/components/helpers/ImageStackComponent";
import {
  Linkedin,
  Facebook,
  Instagram,
  LinkedinH,
  FacebookH,
  InstagramH,
} from "@/assets/Footer/icons";
import arrorwImg from "@/assets/Footer/Arrow.svg";
import Image from "next/image";
import Logo from "@/assets/Hero/logo.svg";

export const CONTACT_LINKS = {
  Facebook: "https://www.facebook.com/",
  Linkedin: "https://www.linkedin.com/",
  Instagram: "https://www.instagram.com/",
};

const images = {
  Linkedin,
  Facebook,
  Instagram,
  LinkedinH,
  FacebookH,
  InstagramH,
};

const Company = ["Who We Are", "Careers", "Team", "Report Fraud"];
const CompanyRoutes = ["", "", "", ""];
const Legal = [
  "Terms & Conditions",
  "Refund & Cancellation",
  "Privacy Policy",
  "Cookie Policy",
  "Offer Terms",
];
const LegalRoutes = ["", "", "", "", ""];
const Support = ["help@melomint.abc", "(+91) 1234567890", "(+91) 1234567891"];
const SupportHrefs = [
  "mailto:help@abc.xyz",
  "tel:+911234567890",
  "tel:+911234567891",
];
const SocialMediaIcons = ["Linkedin", "Facebook", "Instagram"];

const CompanyList = Company.map((General, index) => {
  return (
    <li key={index}>
      <Link href={`${CompanyRoutes[index]}`}>{General}</Link>
    </li>
  );
});
const LegalList = Legal.map((Browse, index) => {
  return (
    <li key={index}>
      <Link href={`${LegalRoutes[index]}`}>{Browse}</Link>
    </li>
  );
});
const SupportList = Support.map((Support, index) => {
  return (
    <li key={index}>
      <a href={`${SupportHrefs[index]}`}>{Support}</a>
    </li>
  );
});
const SocialMediaIconsList = SocialMediaIcons.map(
  (socialMediaIconName, index) => {
    return (
      <ImageStackComponent
        key={index}
        link={CONTACT_LINKS[socialMediaIconName as keyof typeof CONTACT_LINKS]}
        normalDisplay={images[socialMediaIconName as keyof typeof images]}
        hoverDisplay={
          images[(socialMediaIconName + "H") as keyof typeof images]
        }
        iconsClass={styles.Icons}
        iconsWrapperClass={styles.IconsSubWrapper}
        StackImageStyle={{}}
      />
    );
  }
);

const Footer = () => {

  const footerCompanyLinksRef = React.useRef(12);

  return (
    <footer className={styles.Wrapper}>
        <div className={styles.UpperContainer}>
          <div className={styles.Links}>
            <div ref={footerCompanyLinksRef as any}>
              <span>
                Company{" "}
                <Image src={arrorwImg} className={styles.Arrow} alt="arrow" />
              </span>
              <ul>{CompanyList}</ul>
            </div>
            <div ref={footerCompanyLinksRef as any}>
              <span>
                Legal{" "}
                <Image src={arrorwImg} className={styles.Arrow} alt="arrow" />
              </span>
              <ul>{LegalList}</ul>
            </div>
            <div ref={footerCompanyLinksRef as any}>
              <span>
                Support{" "}
                <Image src={arrorwImg} className={styles.Arrow} alt="" />
              </span>
              <ul>{SupportList}</ul>
            </div>
          </div>
        </div>

        <div className={styles.LowerContainer}>
          <div className={styles.CompanyLogoWrapper}>
            <Link target="_blank" rel="noopener noreferrer" href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
            <div className={styles.Copyright}>Copyright (c) 2021</div>
          </div>
          <div className={styles.IconsWrapper}>
            <div
              style={{
                display: "flex",
              }}
            >
              {SocialMediaIconsList}
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer