import PropTypes from 'prop-types';
import { StyledTable } from './styles';

import TableHead from './TableHead';
import TableBody from './TableBody';

export default function Table({ titles, children }) {

  return (
    <StyledTable>
      <TableHead titles={titles} />
      <TableBody>{children}</TableBody>
    </StyledTable>
    );

}

TableHead.propTypes = {
  titles: PropTypes.array.isRequired
}
