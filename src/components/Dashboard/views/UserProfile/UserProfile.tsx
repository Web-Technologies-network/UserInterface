import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// core components
import GridItem from '../../Grid/GridItem';
import GridContainer from '../../Grid/GridContainer';
import CustomInput from '../../CustomInput/CustomInput';
import Button from '../../CustomButtons/Button';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardAvatar from '../../Card/CardAvatar';
import CardBody from '../../Card/CardBody';
import CardFooter from '../../Card/CardFooter';

import avatar from '../../../../assets/img/faces/marc.jpg';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};
// @ts-ignore
const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={8}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color='primary'>
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <GridContainer>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText='Company (disabled)'
                    id='company-disabled'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText='Username'
                    id='username'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='Email address'
                    id='email-address'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText='First Name'
                    id='first-name'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText='Last Name'
                    id='last-name'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='City'
                    id='city'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='Country'
                    id='country'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='Postal Code'
                    id='postal-code'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                // @ts-ignore
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: '#AAAAAA' }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id='about-me'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            // @ts-ignore
            <CardFooter>
              // @ts-ignore
              <Button color='primary'>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card profile>
            // @ts-ignore
            <CardAvatar profile>
              <a href='#pablo' onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt='...' />
              </a>
            </CardAvatar>
            // @ts-ignore
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the human foundation in truth And I love you
                like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
              </p>
              // @ts-ignore
              <Button color='primary' round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
