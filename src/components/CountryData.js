import { Autocomplete, Button,Container, Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useContext,useState } from 'react';
import { GlobalValue } from './GlobalData'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CountryData = () => {
    let  [countrydata,setcountrydata] = useState({cases:0,active:0,recovered:0,deaths:0});
    let  [loading,setloading] = useState(false)
    let  [dataloading,setdataloading] = useState(false)
    let  [countryvalue,setcountryvalue] = useState(null);
    let navigate = useNavigate()
    
    let contextValue = useContext(GlobalValue)
    if(countryvalue!==null){
        setTimeout(()=>{
        contextValue.somevalue=countryvalue;},100)
    }

    useEffect(()=>{
        async function DataApi(){
            setloading(true)
            let URL = "https://corona.lmao.ninja/v2/countries/";
            let request = await fetch(URL + contextValue.somevalue);
            let json_request = await request.json()
            setcountrydata(json_request);
            setloading(false)
        }
        DataApi();
    },[contextValue.somevalue])

    if(contextValue.impData[0].country==null){
        navigate('/',{replace:true})
        
        alert("Please Select a Country first!")
    }

    function handleaddition(){
        if(countryvalue===null){
          alert("Please Enter a Country ");}
        else{
            setdataloading(false)}  
    }

    if(loading){
        return(
            <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container sx={{height:"10%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                        <Typography variant='subtitle' component='h2' color="darkslategray" marginBottom={1} marginLeft={1}><i>Covid-19 Statistics for {contextValue.somevalue}</i></Typography>
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
                    <Typography variant='subtitle' component='h2' color="darkslategray" marginBottom={1} marginRight={1}><i>Covid-19 Statistics for {contextValue.somevalue}</i></Typography><img style={{border:"1px solid black"}} src={countrydata && countrydata.countryInfo && countrydata.countryInfo.flag} alt="Map" width={70} height={40}/>
                </Container>
        <Grid container >
            <Grid item xs={2} ></Grid>
            <Grid item xs={8} sx={{bgcolor:'grey',alignItems:"center",justifyContent:"center",padding:1}}>
                
                <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid black"}}><Typography variant="subtitle" component="h3">Total Cases:</Typography></Box>
                    </Container>
                    
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3">{countrydata && countrydata.cases}</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid orange"}}><Typography variant="subtitle" component="h3">Active Cases:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3" sx={{color:"orange"}}>{countrydata && countrydata.active}</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid lawngreen"}}><Typography variant="subtitle" component="h3">Resolved Cases:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3" sx={{color:"lawngreen"}}>{countrydata && countrydata.recovered}</Typography>
                    </Container>
                    </Paper>
                    <br />
                    <br />
                    <Paper sx={{width:'100%', height:84}} elevation={3}>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Box sx={{borderBottom:"2px solid red"}}><Typography variant="subtitle" component="h3">Fatalities:</Typography></Box>
                    </Container>
                    <Container sx={{height:"50%",width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center"}}>
                    <Typography variant="h3" component="h3" sx={{color:"red"}}>{countrydata && countrydata.deaths}</Typography>
                    </Container>
                    </Paper>
                    <Container sx={{width:"100%",display:'flex',alignItems:"center" ,justifyContent:"center",bgcolor:"pink"}}>
                        Want Specific Country-Based Analytics?<Button sx={{marginTop:0.6}}  disableRipple onClick={()=>{setdataloading(true)}}><u>Click Here</u></Button>
                    </Container>
            </Grid>
            <Grid item xs={2} ></Grid>
        </Grid>
        
        <Dialog open={dataloading} onClose={()=>setdataloading(false)}>
            <DialogTitle>Select Country</DialogTitle>
            <DialogContent>
            
                <Autocomplete
                sx={{width:500}}
                value={countryvalue}
                onChange={(event,value)=>{setcountryvalue(value)}}
                options={ contextValue.impData.map((obj)=>(obj.country))}
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