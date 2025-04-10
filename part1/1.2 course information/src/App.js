const Header = (props) => {
  return (
    <header>
      <h1>Course name: {props.course}</h1>
    </header>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <footer>
      <h4>The total is: {props.exercises1 + props.exercises2 + props.exercises3}</h4>
    </footer>
  );
};

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack';
  const part1 = 'Fundamentos da biblioteca React';
  const exercises1 = 10;
  const part2 = 'Usando props para passar dados';
  const exercises2 = 7;
  const part3 = 'Estado de um componente';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3={part3} exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
    </div>
  );
};

export default App;