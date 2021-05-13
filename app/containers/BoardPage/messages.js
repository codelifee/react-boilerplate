/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.BoardPage';

export default defineMessages({
  registerButton: {
    id: `${scope}.registerButton`,
    defaultMessage: 'Write a new board',
  },
  tableCell1: {
    id: `${scope}.cell.cellName1`,
    defaultMessage: 'Board Number',
  },
  tableCell2: {
    id: `${scope}.cell.cellName2`,
    defaultMessage: 'User Number',
  },
  tableCell3: {
    id: `${scope}.cell.cellName3`,
    defaultMessage: 'Board Title',
  },
  tableCell4: {
    id: `${scope}.cell.cellName4`,
    defaultMessage: 'Board Content',
  },
  tableCell5: {
    id: `${scope}.cell.cellName5`,
    defaultMessage: 'Registered Date',
  },
  tableCell6: {
    id: `${scope}.cell.cellName6`,
    defaultMessage: 'See More',
  },
  tableCell7: {
    id: `${scope}.cell.cellName7`,
    defaultMessage: 'Delete',
  }
});
