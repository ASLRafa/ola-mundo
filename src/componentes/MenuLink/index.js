import styles from "./MenuLink.module.css";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();
  console.log(localizacao.pathname);

  return (
    <NavLink
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? styles.linkDestacado : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
      }
      to={to}
    >
      {children}
    </NavLink>

    // <Link
    //   className={`
    //     ${styles.link}
    //     ${localizacao.pathname === to ? styles.linkDestacado : ""}
    //     `}
    //   to={to}
    // >
    //   {children}
    // </Link>
  );
}
