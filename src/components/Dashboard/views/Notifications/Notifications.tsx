/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import AddAlert from '@material-ui/icons/AddAlert';
// core components
import GridItem from '../../Grid/GridItem';
import GridContainer from '../../Grid/GridContainer';
import Button from '../../CustomButtons/Button';
import SnackbarContent from '../../Snackbar/SnackbarContent';
import Snackbar from '../../Snackbar/Snackbar';
import { Card } from '../../../common/Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardBody from '../../Card/CardBody';
import { colors } from '../../../../assets/jss/Colors';

enum Places {
  tl,
  tc,
  tr,
  bl,
  bc,
  br,
}
const styles: { [key: string]: any} = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(()=> {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = (place: Places) => {
    switch (place) {
      case Places.tl:
        if (!tl) {
          setTL(true);
          setTimeout(function() {
            setTL(false);
          }, 6000);
        }
        break;
      case Places.tc:
        if (!tc) {
          setTC(true);
          setTimeout(function() {
            setTC(false);
          }, 6000);
        }
        break;
      case Places.tr:
        if (!tr) {
          setTR(true);
          setTimeout(function() {
            setTR(false);
          }, 6000);
        }
        break;
      case Places.bl:
        if (!bl) {
          setBL(true);
          setTimeout(function() {
            setBL(false);
          }, 6000);
        }
        break;
      case Places.bc:
        if (!bc) {
          setBC(true);
          setTimeout(function() {
            setBC(false);
          }, 6000);
        }
        break;
      case Places.br:
        if (!br) {
          setBR(true);
          setTimeout(function() {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader color={colors.primary}>
        <h4 className={classes.cardTitleWhite}>Notifications</h4>
        <p className={classes.cardCategoryWhite}>
          Handcrafted by our friends from{" "}
          <a
            target="_blank"
            href="https://material-ui-next.com/?ref=creativetime"
          >
            Material UI
          </a>{" "}
          and styled by{" "}
          <a
            target="_blank"
            href="https://www.creative-tim.com/?ref=mdr-notifications-page"
          >
            Creative Tim
          </a>
          . Please checkout the{" "}
          <a href="#pablo" target="_blank">
            full documentation
          </a>
          .
        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Notifications Style</h5>
            <br />
            <SnackbarContent message={"This is a plain notification"} />
            <SnackbarContent
              message={"This is a notification with close button."}
              close
            />
            <SnackbarContent
              message={"This is a notification with close button and icon."}
              close
              icon={AddAlert}
            />
            <SnackbarContent
              message={
                "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
              }
              close
              icon={AddAlert}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent
              message={
                'INFO - This is a regular notification made with color="info"'
              }
              close
              color={colors.info}
            />
            <SnackbarContent
              message={
                'SUCCESS - This is a regular notification made with color="success"'
              }
              close
              color={colors.success}
            />
            <SnackbarContent
              message={
                'WARNING - This is a regular notification made with color="warning"'
              }
              close
              color={colors.warning}
            />
            <SnackbarContent
              message={
                'DANGER - This is a regular notification made with color="danger"'
              }
              close
              color={colors.danger}
            />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="primary"'
              }
              close
              color={colors.primary}
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              Notifications Places
              <br />
              <small>Click to view notifications</small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={colors.primary}
                  onClick={() => showNotification(Places.tl)}
                >
                  Top Left
                </Button>
                <Snackbar
                  place="tl"
                  color={colors.info}
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={colors.primary}
                  onClick={() => showNotification(Places.tc)}
                >
                  Top Center
                </Button>
                <Snackbar
                  place="tc"
                  color={colors.info}
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={colors.primary}
                  onClick={() => showNotification(Places.tr)}
                >
                  Top Right
                </Button>
                <Snackbar
                  place="tr"
                  color={colors.info}
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={colors.primary}
                  onClick={() => showNotification(Places.bl)}
                >
                  Bottom Left
                </Button>
                <Snackbar
                  place="bl"
                  color={colors.info}
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={bl}
                  closeNotification={() => setBL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={colors.primary}
                  onClick={() => showNotification(Places.bc)}
                >
                  Bottom Center
                </Button>
                <Snackbar
                  place="bc"
                  color={colors.info}
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={bc}
                  closeNotification={() => setBC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={colors.primary}
                  onClick={() => showNotification(Places.br)}
                >
                  Bottom Right
                </Button>
                <Snackbar
                  place="br"
                  color={colors.info}
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
