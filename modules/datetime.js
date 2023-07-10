import { DateTime } from './luxon.js';

export const updateDateTime = () => {
  const dateTimeElement = document.querySelector('.date-time');
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
  dateTimeElement.textContent = now;
};

export default {
  updateDateTime,
};
