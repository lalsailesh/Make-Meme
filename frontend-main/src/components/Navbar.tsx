"use client";

import styles from "./Navbar.module.css";
import { Title, Text, Button } from "@mantine/core";
import Image from "next/image";
import { logo } from "@/assets/Hero";
import Link from "next/link";
import { useDescope, useSession, useUser } from "@descope/react-sdk";
import { useCallback } from "react";

const navlinks = [
  {
    name: "Usage",
    section: "usage",
  },
  {
    name: "Explore",
    section: "explore",
  },
  {
    name: "Create",
    section: "create",
  },
];

const Navbar = () => {
  const { isAuthenticated } = useSession();
  const { user } = useUser();
  const { logout } = useDescope();

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  console.log(user);

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo} style={{ cursor: "pointer" }}>
          <Image src={logo} alt="logo" width={50} height={50} />
          <Title color="primary" order={4}>
            MakeMeme
          </Title>
        </div>
        <div className={styles.navbarLinks}>
          {navlinks.map((link) => (
            <Text
              key={link.name}
              weight={600}
              size="md"
              color="primary"
              className={styles.navbarLink}
              style={{ cursor: "pointer" }}
              onClick={() =>
                document.getElementById(link.section)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {link.name}
            </Text>
          ))}
        </div>
      </div>
      <div className={styles.rightSection}>
        {isAuthenticated ? (
          <>
            <Text color="primary" weight={700}>
              {user?.name}
            </Text>
            {/* <Image src={user.picture} alt="user image" height={20} width={20} /> */}
          </>
        ) : (
          <>
            <Button
              variant="subtle"
              style={{ borderRadius: "0.625rem" }}
              component={Link}
              href={{
                pathname: "/",
                query: { authModal: "login" },
              }}
            >
              Sign Up
            </Button>
            <Button
              style={{ borderRadius: "0.625rem" }}
              component={Link}
              href={{
                pathname: "/",
                query: { authModal: "login" },
              }}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
