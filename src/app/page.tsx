/* "use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

const HomePage: React.FC = () => {

  const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };
  
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <Link href="/about">
        About
      </Link>
      <br />
      <br />
      <button onClick={handleClick}>Go to Contact</button>
    </div>
  );
};

export default HomePage; */

import styles from './page.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Web Portfolio</h1>
      <p>
        Hi, I'm Lavesh Rawal, a Next.js developer specializing in creating dynamic and responsive web applications. I have expertise in HTML, CSS, JavaScript, TypeScript, MongoDB, Azure, and MS SQL.
      </p>
      <p>
        Whether it's building a modern website, developing a robust web application, or solving complex problems, I strive to deliver high-quality solutions that meet clients' needs.
      </p>
      <button className={styles.button}>Learn More</button>
    </div>
  );
};

export default Home;
