import React from 'react';
import routes from './routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbars/Navbar';
import FixedPlugin from './FixedPlugin/FixedPlugin';
import Footer from './Footer/Footer';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      }
      return null;
    })}
    <Redirect from='/admin' to='/admin/dashboard' />
  </Switch>
);

type MainPanelProps = {
  classes: { mainPanel: string; content: string; container: string; map: string };
  handleDrawerToggle: () => void;
  children: React.ReactNode;
  getRoute: () => boolean;
  handleImageClick: (image: string) => void;
  handleColorClick: (color: string) => void;
  handleFixedClick: () => void;
  fixedClasses: string;
  color: string;
  image: any;
  ref: React.RefObject<MainPanel>;
};
export class MainPanel extends React.Component<MainPanelProps, {}> {
  render(): React.ReactElement {
    const {
      classes,
      handleDrawerToggle,
      children,
      getRoute,
      handleImageClick,
      handleColorClick,
      color,
      image,
      handleFixedClick,
      fixedClasses,
    } = this.props;
    return (
      <div className={classes.mainPanel}>
        <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} {...children} />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and container classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    );
  }
}
