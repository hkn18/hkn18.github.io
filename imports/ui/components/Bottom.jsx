import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid >
            <Grid.Row>
              <Grid.Column>
                <p className='upperStyle'>HARD ROCK CAFE HONOLULU</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p className='lowerStyle'>
                  <Icon name="phone"/> +1-808-955-7383&nbsp; &nbsp; &nbsp;
                  <Icon name="mail" />Email Us&nbsp; &nbsp; &nbsp;
                  <Icon name="home"/> 280 Beachwalk, Honolulu, Hawaii 96815&nbsp; &nbsp; &nbsp;
                  <Icon name="twitter"/> <Icon name="facebook f"/> <Icon name="instagram"/>
                  <Icon name="pinterest"/> <Icon name="tripadvisor"/></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
