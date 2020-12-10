import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './WalkList.css';
import WalkModel from '../models/WalkModel';

function WalkList(props) {
  const {walks} = props;
  
  return !!walks.length && (
    <div className="WalkList">
      <table>
        <tbody>
          <tr>
            <td className="WalkList-header-cell WalkList-col1">Дата (ДД.ММ.ГГГГ)</td>
            <td className="WalkList-header-cell WalkList-col2">Пройдено км</td>
            <td className="WalkList-header-cell WalkList-col3">Действия</td>
          </tr>
        </tbody>
      </table>
      <table className="WalkList-body">
        <tbody>
          {walks.map(({ id, date, distance }) => 
            <tr key={nanoid()}>
              <td className="WalkList-body-cell WalkList-col1">{date}</td>
              <td className="WalkList-body-cell WalkList-col2">{distance}</td>
              <td className="WalkList-body-cell WalkList-col3">
                <span className="WalkList-button" data-id={id}>&#x270E;</span>
                <span>&nbsp;</span>
                <span className="WalkList-button WalkList-delete" data-id={id}>&#x2718;</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>  
  );
}

WalkList.propTypes = {
  walks: PropTypes.arrayOf(PropTypes.instanceOf(WalkModel)).isRequired
};

export default WalkList;
