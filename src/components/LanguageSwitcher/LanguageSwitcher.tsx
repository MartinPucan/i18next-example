import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => i18n.language === 'cs' ? i18n.changeLanguage('en') : i18n.changeLanguage('cs');

  const options = [
    {
      label: 'CZ',
      value: 'cs'
    },
    {
      label: 'EN',
      value: 'en'
    }
  ]

  return (
    <select onChange={changeLanguage}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
