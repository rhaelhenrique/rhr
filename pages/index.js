import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RhR - Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <top className={styles.top}>

        <img src="/rhr-img.png" alt="Rhael Henrique" className={styles.rhrImg} />

        <h1 className={styles.title}>Rhael Henrique</h1>

        <h2 className={styles.subTitle}>Desenvolvedor</h2>

      </top>

      <main className={styles.main}>

        <h1 className={styles.title2}>Skills</h1>

        <div className={styles.grid}>
          <img src="/skills/html.png" alt="HTML5" className={styles.logo1} />

          <img src="/skills/css.png" alt="CSS" className={styles.logo1} />

          <img src="/skills/js.png" alt="Javascript" className={styles.logo1} />

          <img src="/skills/react.png" alt="React" className={styles.logo1} />

          <img src="/skills/next.png" alt="Next Js" className={styles.logo1} />

          <img src="/skills/node.png" alt="Node Js" className={styles.logo1} />

          <img src="/skills/git.png" alt="Git" className={styles.logo1} />

          <img src="/skills/sql.png" alt="SQL" className={styles.logo1} />

          <img src="/skills/php.png" alt="PHP" className={styles.logo1} />
          
        </div>
        
      </main>

      <footer className={styles.footer}>
        <h3>
          <a
            href="https://www.linkedin.com/in/rhaelhenrique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="Linkedin Logo" className={styles.logoFooter} />
            Linkedin{' '}
          </a>
        </h3>
        <h3>
          <a
            href="https://www.github.com/rhaelhenrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub Logo" className={styles.logoFooter} id="logoGit"/>
            GitHub{' '}
          </a>
        </h3>
      </footer>
    </div>
  )
}

//<img src="/skills/python.png" alt="Python" className={styles.logo1} />
//<img src="/skills/flutter.png" alt="Flutter" className={styles.logo1} />
//<img src="/skills/android.png" alt="Android" className={styles.logo1} />