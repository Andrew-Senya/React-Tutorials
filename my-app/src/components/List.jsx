function List(props) {
  
    const itemLists = props.items;
    const category = props.category;
    //fruits.sort((a, b) => a.name.localeCompare(b.name))

    const listItems = itemLists.map(itemList => <li key={itemList.id}>{itemList.name} &nbsp :
        <b>{itemList.calories}</b></li>
    );

    

    return (
        <>
            <h2>{category}</h2>
        <p>{listItems}</p>
      </>
    );
}

export default List;