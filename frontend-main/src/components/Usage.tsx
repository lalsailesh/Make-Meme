"use client";

import styles from "./Usage.module.css";
import { Title, Text, Button } from "@mantine/core";
import usage from "@/assets/Usage/usage.svg";
import Image from "next/image";

const Usage = () => {
  return (
    <div id="usage" className={styles.container}>
      <div className={styles.title}>
        <Title order={1} color="primary.3" weight={700}>
          How
        </Title>
        <Title order={1} color="primary" weight={700}>
          MakeMeme
        </Title>
        <Title order={1} color="primary.3" weight={700}>
          works?
        </Title>
      </div>
      <Image src={usage} alt="Usage" />
    </div>
  );
};

export default Usage;
