import React from 'react';
import Image from 'next/image';
import styles from '../styles/Games.module.css';

const games = [
  {
    title: "Maze Game",
    description: "Design a maze and create a sprite to navigate through it, focusing on using loops.",
    focus: "Loops",
    image: "/images/mazegame.png"
  },
  {
    title: "Matching Pairs",
    description: "Create a memory game where players match pairs of cards, using data types to check for matches.",
    focus: "Data Types",
    image: "/images/memory.png"
  },
  {
    title: "Space Invaders",
    description: "Recreate the classic game using conditional statements to handle collisions and game end scenarios.",
    focus: "Conditional Statements",
    image: "/images/spaceinvaders.png"
  },
  {
    title: "Snake",
    description: "Build a snake game where the player grows longer by eating food, using variables to track position and length.",
    focus: "Variables",
    image: "/images/snake.png"
  }
];

const Games: React.FC = () => {
  return (
    <section id="games" className={styles.gamesSection}>
      <h2>Games We&apos;ll Create</h2>
      <p>Embark on an exciting journey of game development! Our curriculum covers a range of fun and educational games that teach fundamental programming concepts while sparking creativity and problem-solving skills.</p>
      <div className={styles.gamesGrid}>
        {games.map((game, index) => (
          <div key={index} className={styles.gameCard}>
            <Image src={game.image} alt={game.title} width={250} height={200} />
            <div className={styles.gameCardContent}>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <p className={styles.focus}>Focus: {game.focus}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;