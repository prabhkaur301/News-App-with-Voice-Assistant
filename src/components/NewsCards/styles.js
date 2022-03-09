// giving custom styles to material ui components

import { makeStyles } from "@material-ui/core";
export default makeStyles({    // making a hook
    container:{
        padding:'0 5%',
        width:'100%',
        margin:0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
        textAlign:'center'
      }

})