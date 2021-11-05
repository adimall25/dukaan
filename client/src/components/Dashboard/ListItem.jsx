import React from 'react';

function ListItem(props) {
  return (
    <li className="list-group-item">
      <p style={{ textAlign: 'left' }}>
        {props.info}
        <span style={{ float: 'right' }}>{props.value}</span>
      </p>
    </li>
  );
}

export default ListItem;
