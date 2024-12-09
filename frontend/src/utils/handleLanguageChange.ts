import { footer } from "../components/footer/footer";
import { header } from "../components/header/header";
import { router } from "../components/navigation/router";

const handleLanguageChange = (language: string) => {
  const headerElement = document.querySelector('header');
  const footerElement = document.querySelector('footer');
  if (!headerElement || !footerElement) {
    return;
  }
  headerElement.remove();
  footerElement.remove();
  localStorage.setItem('language', language);
  console.log(`language set to ${language}`);
  header();
  footer();
  router();
}

export { handleLanguageChange };