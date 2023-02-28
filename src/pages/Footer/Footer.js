import styles from "./Footer.module.css";
import footerColsData from "./footer.json";
import FooterColItems from "./FooterColItems";

const Footer = () => {
  return (
    <div className={styles.cols_container}>
      {footerColsData.map((footerColData) => (
        <FooterColItems
          key={footerColData.col_number}
          values={footerColData.col_values}
        />
      ))}
    </div>
  );
};

export default Footer;
