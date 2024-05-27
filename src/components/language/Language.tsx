import styles from "./Language.module.css";
import { RxCross2 } from "react-icons/rx";
interface Props {
  languages: string[][];
  isLanguageActive: boolean;
  selectedLang: string;
  onLanguageBtnClick: () => void;
  onLanguageSelected: (lang: string) => void;
}
const Language = ({
  languages,
  isLanguageActive,
  selectedLang,
  onLanguageBtnClick,
  onLanguageSelected,
}: Props) => {
  return (
    <div
      className={
        isLanguageActive ? styles.overlayEnabled : styles.overlayDisabled
      }
    >
      <div className={styles.languageContainer}>
        <span className={styles.closeBtn} onClick={() => onLanguageBtnClick()}>
          <RxCross2 size={18} />
        </span>
        <div className={styles.languageBox}>
          <h2 className={styles.title}>Choose a language</h2>
          <div className={styles.langFlex}>
            {languages.map((langs, idx) => (
              <div key={idx} className={styles.languageItemsContainer}>
                {langs.map((lang, idx) => (
                  <div
                    key={idx}
                    className={
                      selectedLang === lang
                        ? [styles.language, styles.active].join(" ")
                        : styles.language
                    }
                    onClick={() => onLanguageSelected(lang)}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
