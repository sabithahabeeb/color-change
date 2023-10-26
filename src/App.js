import './App.css';

function App() {
  const handlered = ()=>{
    // let color = 'red'
    document.body.style.backgroundColor='red'
  }
  const handleblue = ()=>{
    let color = 'blue'
    document.body.style.backgroundColor=color

  }
  const handlegreen = ()=>{
    let color = 'green'
    document.body.style.backgroundColor=color

  }
  const handlepurple = ()=>{
    let color = 'purple'
    document.body.style.backgroundColor=color

  }

  return (
    <>
    <div style={{
      width:'100%',
      height:'80vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      margin:'50px',
      padding:'50px',

    }}>
<h1 style={{color:'black',fontSize:'50px',fontWeight:'600'}}>Background Color Change</h1>
<div style={{display:'flex',flexDirection:'row'}}>
  <button onClick={handlered} style={{padding:'15px',margin:'10px',borderRadius:'20px',height:'50px',fontSize:'20px',fontWeight:'600'}}>Red</button>
  <button onClick={handleblue} style={{padding:'15px',margin:'10px',borderRadius:'20px',height:'50px',fontSize:'20px',fontWeight:'600'}}>Blue</button>
  <button onClick={handlegreen} style={{padding:'15px',margin:'10px',borderRadius:'20px',height:'50px',fontSize:'20px',fontWeight:'600'}}>Green</button>
  <button onClick={handlepurple} style={{padding:'15px',margin:'10px',borderRadius:'20px',height:'50px',fontSize:'20px',fontWeight:'600'}}>Purple</button>
</div>
</div>
    </>
  );
}

export default App;
