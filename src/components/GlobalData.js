import { Autocomplete, Button,  Container, Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

let Cell={somevalue:null,impData:[{country:null}]}
export const GlobalValue = createContext(Cell);

export const GlobalData = () => {

    let [loading,setloading] = useState(false);
    let [countrydata,setcountrydata] = useState();
    let [dataloading,setdataloading] = useState(false)
    let [countryvalue,setcountryvalue] = useState('');

    const GlobalStatistics= {TotalCases:0,ActiveCases:0,ResolvedCases:0,DeathCases:0}
    let navigate = useNavigate();

    useEffect(()=>{
    async function DataApi(){
        setdataloading(true);
        let object_request= await fetch("https://corona.lmao.ninja/v2/countries");
        let json_request= await object_request.json()
        setcountrydata(json_request);
        Cell.impData = json_request;
        setdataloading(false)
        }
        DataApi()
    },[])

    Cell.somevalue=countryvalue

    function handleaddition(){
        if(countryvalue===''){
          alert("Please Enter a Country ");}
        else{
            setloading(false)
            navigate('/country',{replace:true});}  
    }

    countrydata && countrydata.map((obj)=>((
        GlobalStatistics.TotalCases+=obj.cases,
        GlobalStatistics.ActiveCases+=obj.active,
        GlobalStatistics.ResolvedCases+=obj.recovered,
        GlobalStatistics.DeathCases+=obj.deaths)))
        
    if(dataloading){
        return(
        <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container sx={{height:"10%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant='subtitle' component='h2' color="darkslategray"><i>Global Statistics for Covid-19</i></Typography>
                </Container>
        <Grid container >
            <Grid item xs={2} ></Grid>
            <Grid item xs={8} sx={{bgcolor:'grey',alignItems:"center",justifyContent:"center",padding:1}}>
                
                <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid black"}}><Typography variant="subtitle" component="h3">Total Cases:</Typography></Box>
                    </Container>
                    
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h2" component="h3" sx={{marginBottom:5}}>...........</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid orange"}}><Typography variant="subtitle" component="h3">Active Cases:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h2" component="h3" sx={{color:"orange",marginBottom:5}}>...........</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid lawngreen"}}><Typography variant="subtitle" component="h3">Resolved Cases:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h2" component="h3" sx={{color:"lawngreen",marginBottom:5}}>...........</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid red"}}><Typography variant="subtitle" component="h3">Fatalities:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h2" component="h3" sx={{color:"red",marginBottom:5}}>...........</Typography>
                    </Container>
                    </Paper>
                    <Container sx={{width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center",bgcolor:"pink"}}>
                        Want Specific Country-Based Analytics?<Button sx={{marginTop:0.6}}  disableRipple ><u>Click Here</u></Button>
                    </Container>
            </Grid>
            <Grid item xs={2} ></Grid>
        </Grid>
        
        </div>
        )    
    }
         
    else{
    return(
        <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container sx={{height:"10%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant='subtitle' component='h2' color="darkslategray"><i>Global Statistics for Covid-19</i></Typography>
                </Container>
        <Grid container >
            <Grid item xs={2} ></Grid>
            <Grid item xs={8} sx={{bgcolor:'grey',alignItems:"center",justifyContent:"center",padding:1}}>
                
                <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid black"}}><Typography variant="subtitle" component="h3">Total Cases:</Typography></Box>
                    </Container>
                    
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3">{GlobalStatistics.TotalCases.toLocaleString()}</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid orange"}}><Typography variant="subtitle" component="h3">Active Cases:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3" sx={{color:"orange"}}>{GlobalStatistics.ActiveCases.toLocaleString()}</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid lawngreen"}}><Typography variant="subtitle" component="h3">Resolved Cases:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3" sx={{color:"lawngreen"}}>{GlobalStatistics.ResolvedCases.toLocaleString()}</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid red"}}><Typography variant="subtitle" component="h3">Fatalities:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3" sx={{color:"red"}}>{GlobalStatistics.DeathCases.toLocaleString()}</Typography>
                    </Container>
                    </Paper>
                    <Container sx={{width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center",bgcolor:"pink"}}>
                        Want Specific Country-Based Analytics?<Button sx={{marginTop:0.6}}  disableRipple onClick={()=>{setloading(true)}}><u>Click Here</u></Button>
                    </Container>
            </Grid>
            <Grid item xs={2} ></Grid>
        </Grid>

        <Dialog open={loading} onClose={()=>setloading(false)}>
            <DialogTitle>Select Country</DialogTitle>
            <DialogContent>
            
                <Autocomplete
                sx={{width:500}}
                value={countryvalue}
                onChange={(event,value)=>{setcountryvalue(value)}}
                options={ countrydata && countrydata.map((obj)=>(obj.country))}
                id="Optionss"
                renderInput = {(params)=><TextField {...params} label="Country" />}/>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={()=>{setloading(false)}}>Cancel</Button>
                <Button variant='contained' onClick={handleaddition}>Submit</Button>
            </DialogActions>
        </Dialog>
        
        </div>
    )
}

}

/*
<Grid container  sx={{bgcolor:"pink",height:'100%'}}>
                        <Grid item xs={3} sx={{bgcolor:"yellow"}}></Grid>
                        <Grid item xs='auto'><Typography variant="h3" component='h1' >100,000,000,00</Typography></Grid>
                        <Grid item xs={3} sx={{bgcolor:"orange"}}></Grid>
                        </Grid>
                        <Backdrop  open={loading} onClick={()=>setloading(false)}>
        <Autocomplete
        sx={{width:200,bgcolor:"black",color:"white"}}
      options={ MyData.map((Object)=>
          Object.name
          )
      }
      id="Optionss"
      renderInput = {(params)=><TextField {...params} label="Select Country" />}/></Backdrop>
      
      
      */