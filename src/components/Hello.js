function Hello(props) {
  const { name, age , major } = props;
  
  

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name}, umur saya {age} tahun, jurusan {major}- Frontend Engineer</p>
    </div>
  );
}

export default Hello;
