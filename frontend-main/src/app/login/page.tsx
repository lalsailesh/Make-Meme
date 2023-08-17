"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import styles from "./Login.module.css";

// Descope component interacts with browser API and should render only in CSR
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

export default function Login() {
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

  // console.log("Descope flowId", process.env.NEXT_PUBLIC_DESCOPE_FLOW_ID);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.login}>
          <DescopeWC
            flowId={"sign-up-or-in"}
            onSuccess={onSuccess}
            onError={onError}
          />
        </div>
      </main>
    </div>
  );
}


