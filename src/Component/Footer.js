import React,{useState,useEffect} from 'react'
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';

import Divider from "@material-ui/core/Divider"
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
  
      padding:20,
      backgroundImage: `url("https://www.swiggwine.com/wp-content/uploads/2019/03/Show-room-Picture-1600x800.jpg")`,
        opacity:0.8,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '96vw',
        height: '90vh'

    
    },
    subdiv:{
       padding:20,
       backgroundColor:'#FFF',
       width:300,
       height:'100%',
       borderTopRightRadius:'50px',
       borderTopLeftRadius:'50px',
       borderBottomLeftRadius:'50px',
       borderBottomRightRadius:'50px',
       marginLeft:'5px'
    },

  }));


export default function Footer(props){

    const classes = useStyles();
          
    return(
        <div className={classes.root}>

<Grid container spacing={1} style={{marginLeft:'1200px',display:'flex',width:250,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
    <Grid item xs={12} sm={8}  style={{alignItems:'center'}}>
        <b>Switch to hosting</b>
        <img src="https://www.kindpng.com/picc/m/52-526598_globe-internet-globe-icon-png-transparent-png.png" style={{width:20,height:20}}/>
 

    </Grid>

   <Grid item xs={12} sm={4} style={{display:'flex',height:30,width:100}}>
           <Grid container spacing={1}   >
               <Grid item xs={12} style={{color:'#000',fontSize:12}} >
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXF0bTmWinwxYgji4zxVYICaBiLf98ldvs6o4W9hMhunLJ_yKbq4ypFYXT8AHG5n3xddU&usqp=CAU" style={{marginTop:'2px',width:20,height:20,marginRight:'2px'}}/>
        <img src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg" style={{marginTop:'2px',width:23,height:23,marginRight:'10px'}}/>
 
            </Grid> 
        </Grid>
    </Grid>
</Grid>

            

            <div style={{justifyContent:'center',alignItems:'center',marginLeft:'650px',marginBottom:'10px',fontSize:26}}>
                <u>Places to stay</u></div>
          <Grid container spacing={1} style={{marginLeft:'300px',display:'flex', justifyContent:'center',width:770,height:30,borderRadius:30}}>

            <Grid item xs={12} sm={2}>
                    <Grid container spacing={2} className={classes.subdiv} >
                        <Grid item xs={12} style={{color:'#000',fontSize:12}} >
                            <b>Location</b><br />
                           <b> Where are you going?</b>
                        </Grid> 
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={1}  >
                  <Divider orientation='vertical' style={{marginLeft:'40px',height:'80%',backgroundColor:'#000'}} />
                </Grid>
               
                <Grid item xs={12} sm={2}>
                    <Grid container spacing={2} className={classes.subdiv} >
                        <Grid item xs={12} fullWidth style={{color:'#000',fontSize:12}}>
                        <b>Check in</b><br />
                        <b>Adds dates</b>
                        </Grid> 
                        
                    </Grid>
                   
                </Grid>
                <Grid item xs={12} sm={1}  >
                  <Divider orientation='vertical' style={{marginLeft:'5px',height:'80%',backgroundColor:'#000'}} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Grid container spacing={2} className={classes.subdiv} >
                        <Grid item xs={12}  style={{color:'#000',fontSize:12,marginRight:'100px'}}>
                            <b>Check Out </b><br />
                            <b>Adds dates </b>
                        </Grid> 
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={1}  >
                  <Divider orientation='vertical' style={{marginLeft:'10px',height:'80%',backgroundColor:'#000'}} />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <Grid container spacing={2} className={classes.subdiv} >
                        <Grid item xs={12} style={{color:'#000',fontSize:12,marginRight:'10px'}} >
                            <b>Guests </b><br />
                            <b>Add guests </b>
                        </Grid> 
                    </Grid>
                    
                </Grid>
                
                <Grid item xs={12} sm={1} >
                  <Divider orientation='vertical' style={{marginLeft:'70px',height:'80%',backgroundColor:'#000'}} /> 
                  </Grid>

                  <Grid item xs={12} sm={1}  >
                    <img src ="data:image/png;base64,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" 
                style={{width:30,height:30,marginLeft:'100px',alignSelf:'center',marginTop:'10px'}}/>
                </Grid>

                
                
            </Grid>
            <div style={{justifyContent:'center',alignItems:'center',marginLeft:'200px',marginTop:'50px',fontSize:90,color:'#000'}}>
             <b>Go</b><br/>
             <b>Near</b>
            </div>
            <Grid style={{backgroundColor:'#FFF',
                         width:200,height:30,color:'#000',marginLeft:'200px',
                         borderTopRightRadius:'10px',
                         borderTopLeftRadius:'10px',
                         borderBottomLeftRadius:'10px',
                         borderBottomRightRadius:'10px',}}>
            <div style={{marginLeft:'20px'}}><b>Explore nearby stays</b></div>
            </Grid>
           

        </div>
    )
}