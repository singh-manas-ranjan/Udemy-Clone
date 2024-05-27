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
  categoriesLink: string[];
  isNavActive: boolean;
  onNavIconClick: () => void;
  onLanguageBtnClick: () => void;
}
const Navbar = ({
  mainNavLinks,
  isNavActive,
  categoriesLink,
  onNavIconClick,
  mostPopularLinks,
  onLanguageBtnClick,
}: Props) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.hamMenu} onClick={() => onNavIconClick()}>
        <IoMdMenu size={23} color="#2d2f31" />
      </span>
      <div className={styles.logo} />
      <div className={styles.outerNavItemsContainer}>
        <div className={styles.leftMenuContainer}>
          <ul className={styles.categoriesBtn}>
            <li className={styles.categoriesBtnHover}>
              Categories
              <ul className={styles.categoriesBtnUl}>
                {categoriesLink.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      key={idx}
                      to={link.toLowerCase().trim().replaceAll(" ", "")}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
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
            <div className={styles.hoverDiv}>
              <h4 className={styles.hoverDivText}>
                Get your team access to over 25,000 top Udemy courses, anytime,
                anywhere.
              </h4>
              <button className={styles.hoverDivBtn}>Try Udemy Business</button>
            </div>
          </a>
          <a href="#" className={styles.middleNavLink}>
            Tech on Udemy
            <div className={styles.hoverDiv}>
              <h4 className={styles.hoverDivText}>
                Turn what you know into an opportunity and reach millions around
                the world.
              </h4>
              <button className={styles.hoverDivBtn}>Learn more</button>
            </div>
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
            <span
              className={styles.language}
              onClick={() => onLanguageBtnClick()}
            >
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
                  <Link
                    key={idx}
                    to={link.trim().toLowerCase()}
                    className={styles.mainNavLinks}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mostPopularLinksContainer}>
            <h4 className={styles.mostPopularTitle}>Most popular</h4>
            <ul className={styles.navItems}>
              {mostPopularLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.toLowerCase().trim().replaceAll(" ", "")}
                    key={idx}
                    className={styles.mostPopularLinks}
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
