import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "./az";
import en from "./en";

const resources = {
  en: en,
  az: az,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
