import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(121, 11, 24, 0.8)',
    },
    image: {
      marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
        flexDirection: "column-reverse",
      }
    }
  }));