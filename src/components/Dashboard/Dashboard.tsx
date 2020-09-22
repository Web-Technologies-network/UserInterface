import React from 'react';
import { useStyles } from './dashboardStyles';
import bgImage from '../../assets/img/sidebar-2.jpg';
import PerfectScrollbar from 'perfect-scrollbar';
import Sidebar from './Sidebar/Sidebar';
import routes from './routes';
import logo from '../../assets/img/reactlogo.png';
import { MainPanel } from './MainPanel';

let ps: { destroy: () => void };


export const Dashboard: React.FC = ({ ...rest }) => {
  //const MainPanelRef = React.createRef<MainRef>();
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef<MainPanel>();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState('blue');
  const [fixedClasses, setFixedClasses] = React.useState('dropdown show');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image: string): void => {
    setImage(image);
  };
  const handleColorClick = (color: string): void => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === 'dropdown') {
      setFixedClasses('dropdown show');
    } else {
      setFixedClasses('dropdown');
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== '/admin/maps';
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current as unknown as Element, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={'Creative Tim'}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <MainPanel
       ref={mainPanel}
       classes={classes}
       handleDrawerToggle={handleDrawerToggle}
       getRoute={getRoute}
       handleImageClick={handleImageClick}
       handleColorClick={handleColorClick}
       handleFixedClick={handleFixedClick}
       fixedClasses={fixedClasses}
       color={color}
       image={image}>
        {rest}
      </MainPanel>
    </div>
  );
};

