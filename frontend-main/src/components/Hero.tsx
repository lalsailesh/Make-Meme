"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { logo } from "@/assets/Hero";
import { Title, Text, Button } from "@mantine/core";
import { Navbar } from "@/components";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.contentText}>
          <Title
            weight={700}
            color="primary"
            align="center"
            order={1}
            className={styles.heroTitle}
          >
            Discord MemeBot: Elevate Your Server with Instant Memes and Humor!
          </Title>
          <Text
            weight={500}
            size="sm"
            color="primary.3"
            className={styles.heroTitle}
            align="center"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl ac tortor diam gravida
            diam. Sem egestas cras ultricies massa morbi erat in. Nec habitasse
            a et ut duis dignissim. In dui viverra pulvinar magna nunc urna sed
            egestas. In ut aliquam netus.
          </Text>
        </div>
        <Button
          style={{ borderRadius: "0.625rem" }}
          component={Link}
          href={{
            pathname: "/",
            query: { authModal: "login" },
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
