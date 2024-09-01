import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/pokemon" style={styles.navLink}>Pokemon</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/aboutme" style={styles.navLink}>About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0',
    padding: '0',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#555',
  },
};

export default Navbar;
