import styles from "./Navbar.module.css";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

interface Props {
  mainNavLinks: string[];
  mostPopularLinks: string[];
  isNavActive: boolean;
  onNavIconClick: () => void;
}
const Navbar = ({
  mainNavLinks,
  isNavActive,
  onNavIconClick,
  mostPopularLinks,
}: Props) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.hamMenu} onClick={() => onNavIconClick()}>
        <IoMdMenu size={23} color="#2d2f31" />
      </span>
      <div className={styles.logo} />
      <div className={styles.outerNavItemsContainer}>
        <div className={styles.leftMenuContainer}>
          <p className={styles.categoriesBtn}>Categories</p>
          <div className={styles.searchContainer}>
            <div className={styles.search}>
              <IoMdSearch size={20} style={{ color: "gray" }} />
            </div>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search for anything"
            />
          </div>
        </div>
        <div className={styles.middleNavLinkContainers}>
          <a
            href="#"
            className={[styles.middleNavLink, styles.firstLink].join("")}
          >
            Plans & Pricing
          </a>
          <a
            href="#"
            className={[styles.middleNavLink, styles.middleLink].join("")}
          >
            Udemy Business
          </a>
          <a
            href="#"
            className={[styles.middleNavLink, styles.lastLink].join("")}
          >
            Tech on Udemy
          </a>
        </div>
        <div className={styles.rightMenuContainer}>
          <div className={styles.collapsedIconGroup}>
            <span
              className={[
                styles.collapsedSearch,
                styles.collapsedGroupIcon,
              ].join(" ")}
            >
              <IoMdSearch size={24} className={styles.btnIconSize} />
            </span>
            <span
              className={[styles.cart, styles.collapsedGroupIcon].join(" ")}
            >
              <MdOutlineShoppingCart size={24} className={styles.btnIconSize} />
            </span>
          </div>
          <div className={styles.actionBtnContainer}>
            <button className={[styles.actionBtn, styles.loginBtn].join(" ")}>
              Log in
            </button>
            <button className={[styles.actionBtn, styles.signUpBtn].join(" ")}>
              Sign up
            </button>
            <span className={styles.language}>
              <IoGlobeOutline size={20} />
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          isNavActive
            ? [styles.overlay, styles.overlayActive].join(" ")
            : [styles.overlay, styles.disabled].join(" ")
        }
      >
        <div className={styles.navMenuContainer}>
          <div className={styles.mainNavigation}>
            <div className={styles.closeBtn} onClick={() => onNavIconClick()}>
              <RxCross2 size={22} color="#2d2f31" />
            </div>
            <ul className={styles.navItems}>
              {mainNavLinks.map((link, idx) => (
                <li key={idx}>
                  <Link key={idx} to={link.trim().toLowerCase()}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mostPopularLinksContainer}>
            <ul className={styles.navItems}>
              {mostPopularLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.toLowerCase().trim().replaceAll(" ", "")}
                    key={idx}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
