import { makeStyles } from "@material-ui/core";
export default makeStyles({    // making a hook
    media:{
        height:200,
        backgroundPosition:'top left'
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
      },
      highlight: {
        borderBottom: '10px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
          padding:'0 20px',
       fontWeight:'bold'
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
    
})