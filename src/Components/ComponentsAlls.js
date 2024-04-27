import React from 'react'
import { Grid } from '@mui/material'

const ComponentsAlls = () => {
  return (
    <div>
        
        <Grid container spacing={2} style={{padding:20,display:'flex',justifyContent:'center',textAlign:'center'}} >
        
            
                <Grid item xs={3} >
                <div style={{height:'400px',width:'100%',background:'#95a5a6',display:'flex',textAlign:'center',justifyContent:'center',fontSize:20,fontWeight:'bold',border:'0.5px solid black'}}>
                 <div style={{marginTop:150}}> FILE TREE   </div>
                
                </div>
                
            </Grid>
            <Grid item xs={9} >
            <div style={{height:'400px',width:'100%',background:'#95a5a6',display:'flex',textAlign:'center',justifyContent:'center',fontSize:20,fontWeight:'bold',border:'0.5px solid black'}}>
            <div style={{marginTop:150}}>  TERMINAL...... </div>
           </div>
            </Grid>
            <Grid item xs={12} >
            <div style={{height:'400px',width:'100%',background:'#95a5a6',display:'flex',textAlign:'center',justifyContent:'center',fontSize:20,fontWeight:'bold',border:'0.5px solid black'}}>
            <div style={{marginTop:150}}>    EDITOR.......</div>
           </div>
            </Grid>
          
            

        </Grid>
        
      
    </div>
  )
}

export default ComponentsAlls