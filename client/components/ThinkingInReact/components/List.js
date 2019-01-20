import React from 'react';

import ListItem from './ListItem';


const List = ({ list }) => (
  <ul>
    { list.map((listItem, index) => <ListItem key={ index } text={ listItem.name } />) }
  </ul>
);

export default List;
