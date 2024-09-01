import Navbar from "@/components/Nav";

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <h1>Welcome to the World of Pokémon!</h1>
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
          alt="Pikachu" 
          style={styles.image} 
        />
        <p style={styles.description}>
          Discover the amazing world of Pokémon! Train your Pokémon, battle with others, 
          and become a Pokémon Master. Explore our website to find detailed information 
          about your favorite Pokémon, and start your journey today!
        </p>
        <button style={styles.button}>
          <a href="/pokemon" style={styles.buttonLink}>Explore Pokémon</a>
        </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  image: {
      width: '200px',
      height: '200px',
      display: 'block',
      margin: '0 auto',
  },
  description: {
    fontSize: '1.2em',
    margin: '20px 0',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  buttonLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};
