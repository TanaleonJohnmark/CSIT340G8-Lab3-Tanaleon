const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} units={props.units1} />
      <Part name={props.part2} units={props.units2} />
      <Part name={props.part3} units={props.units3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
}

const Footer = (props) => {
  return <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
}

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = 'Data Structures and Algorithms'
  const units1 = 3
  const part2 = 'Web Systems and Technologies'
  const units2 = 3
  const part3 = 'Discrete Mathematics'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer fullName="Johnmark Tanaleon" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App