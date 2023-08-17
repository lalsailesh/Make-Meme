"use client";

import styles from "@/styles/LandingPage.module.css";
import { Hero, Usage, Explore, Create, Footer, AuthModal } from "@/components";
import { useDescope, useSession, useUser } from "@descope/react-sdk";
import { GetServerSideProps } from "next";
import { validateRequestSession } from "@/utils/auth";
import { SyntheticEvent, useCallback, useEffect } from "react";
import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Repo = {
  name: string;
  stargazers_count: number;
};

import { useSearchParams } from "next/navigation";

const getUserDisplayName = (user: any) =>
  user?.name || user?.externalIds?.[0] || "";

const LandingPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const { isAuthenticated } = useSession();
  const { user } = useUser();
  const { logout } = useDescope();

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  const closeAuthModal = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Hero />
      <Usage />
      <Explore />
      <Create />
      <Footer />

      <Modal
        opened={searchParams.get("authModal") === "login"}
        onClose={closeAuthModal}
        withCloseButton={false}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <AuthModal />
      </Modal>
    </div>
  );
};

export default LandingPage;

export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};
