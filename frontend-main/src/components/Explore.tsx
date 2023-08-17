"use client";

import styles from "./Explore.module.css";
import { Title, Text, Button } from "@mantine/core";
import Image from "next/image";
import { Navbar } from "@/components";
import { useMeme } from "@/hooks/meme.swr";
import { use, useEffect } from "react";

const memes = [
  {
    id: 1,
    title: "Meme 1",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: "Creator 1",
  },
  {
    id: 2,
    title: "Meme 2",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: "Creator 2",
  },
  {
    id: 3,
    title: "Meme 2",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: "Creator 2",
  },
  {
    id: 4,
    title: "Meme 2",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: "Creator 2",
  },
  {
    id: 5,
    title: "Meme 2",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: "Creator 2",
  },
  {
    id: 6,
    title: "Meme 2",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: "Creator 2",
  },
];

const Explore = () => {
  const { memeData, errorFetchingMemeData, isMemeDataLoading } = useMeme();

  useEffect(() => {
    console.log(memeData);
  }, [memeData]);

  return (
    <div id="explore" className={styles.container}>
      <Title order={1} color="primary" weight={700}>
        Explore
      </Title>
      <Text size="md" color="primary.3" weight={500}>
        Creativity of creators
      </Text>
      <div className={styles.displayMeme}>
        {memes.map((meme) => (
          <div key={meme.id} className={styles.image}>
            <Image
              key={meme.id}
              src={meme.image}
              alt={meme.title}
              fill={true}
              className={styles.meme}
            />
            <div className={styles.memeTitle}>
              <Title order={4} weight={700}>
                #{meme.title}
              </Title>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button variant="light" style={{ borderRadius: "5rem" }}>
          <Text weight={500}> View All </Text>
        </Button>
      </div>
    </div>
  );
};

export default Explore;
