import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '.theme-btn', popover: { title: 'Theme', description: 'Change theme' } },
    { element: '.sidebar-lang', popover: { title: 'Language', description: 'Change language' } },
    { element: '.right-sidebar', popover: { title: 'sidebar', description: 'navigate' } },
    { element: '.left-sidebar', popover: { title: 'Me', description: 'Contact Me' } },
  ]
});
