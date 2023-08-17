'use client'

import styles from "./AuthModal.module.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const DescopeWC = dynamic(
  async () => {
    const { Descope } = await import("@descope/react-sdk");
    return (props: React.ComponentProps<typeof Descope>) => (
      <Descope {...props} />
    );
  },
  {
    ssr: false,
  }
);

const AuthModal = () => {
  const router = useRouter();
  const onSuccess = useCallback(() => {
    router.push("/");
  }, [router]);

  const onError = useCallback(
    (e: any) => {
      console.log("Descope got error", e);
      router.push("/");
    },
    [router]
  );

  return (
    <div>
      <DescopeWC
        flowId={"sign-up-or-in"}
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  );
};

export default AuthModal;
