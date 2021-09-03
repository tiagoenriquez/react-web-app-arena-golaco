import PropTypes from 'prop-types';
import { StyledTableHead } from './styles';

export default function TableHead({ titles }) {

  return (
    <StyledTableHead>
      <tr>
        {titles.map((title) => 
          <td key={title.name}>{title.name}</td>
        )}
      </tr>
    </StyledTableHead>
  );

}

TableHead.propTypes = {
  titles: PropTypes.array.isRequired
}
