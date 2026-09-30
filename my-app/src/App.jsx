import List from "./components/List"
import StudentDetails from "./components/StudentDetails"

import PropTypes from "Prop-types";

import UserGreetings from "./components/UserGreetings"
import Button from "./components/Button";
import MyComponent from "./components/MyComponent";
import MySubComponent from "./components/MySubComponent";
import ColorPicker from "./components/ColorPicker";
import SetCount from "./components/SetCount";
import MyCarDetails from "./components/MyCarDetails";
import FoodComponents from "./components/FoodComponents";
import MyCarList from "./components/MyCarList";
import TodoList from "./components/TodoList";

function App() {

    const fruits = [
      { id: 1, name: "Apple", calories: 98 },
      { id: 2, name: "Banana", calories: 34 },
      { id: 3, name: "Orange", calories: 67 },
      { id: 4, name: "Mango", calories: 56 },
      { id: 5, name: "Pawpaw", calories: 102 },
    ];
 
    const vegetables = [
      { id: 6, name: "Potatoes", calories: 44 },
      { id: 7, name: "Salad", calories: 39 },
      { id: 8, name: "Yam", calories: 66 },
      { id: 9, name: "Tomatoes", calories: 55},
      { id: 10, name: "Carrot", calories: 100 },
    ];
 

  return (
    <>
      <UserGreetings isLoggedIn={true} username="Andrew" />
      <StudentDetails isStudent={true} name="Senya" age={40} />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
      <Button />
      <MyComponent />
      <MySubComponent />
      <ColorPicker />
      <SetCount />
      <MyCarDetails />
      <FoodComponents />
      <MyCarList />
      <TodoList/>
    </>
  );
}

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number
  }))
}


List.DefaultProps = {
  category: "Category",
  items: []
}

export default App
