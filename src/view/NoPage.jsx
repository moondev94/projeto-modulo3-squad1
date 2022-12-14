import styles from "./css/NoPage.module.css"

const NoPage = () => {
  return (
  <>
    <div id={styles.notFound}>
      <div className={styles.notFound}>
        <div className={styles.notFound404}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a href="/Contato">Report</a>
        <a href="/">Homepage</a>
      </div>
    </div>
  </>
  )
};

export default NoPage;
