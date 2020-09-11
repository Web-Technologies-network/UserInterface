/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from '../../CustomButtons/Button';
import GridItem from '../../Grid/GridItem';
import GridContainer from '../../Grid/GridContainer';
import Table from '../../Table/Table';
import Tasks from '../../Tasks/Tasks';
import CustomTabs from '../../CustomTabs/CustomTabs';
import Danger from '../../Typography/Danger';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import { CardAvatar } from '../../Card/CardAvatar';
import CardIcon from '../../Card/CardIcon';
import CardBody from '../../Card/CardBody';
import CardFooter from '../../Card/CardFooter';
import SnackbarContent from "../../Snackbar/SnackbarContent";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from '../../variables/charts';

import styles from '../../../../assets/jss/material-dashboard-react/views/rtlStyle';

import avatar from '.././.././../../assets/img/faces/marc.jpg';

let bugs = [
  "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟",
  "	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟",
  "همان حال کار آنها به نوعی وابسته به متن می‌باشد",
  "	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند"
];
let website = [
  "بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟"
];
let server = [
  "گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟",
  "از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟",
  "از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟"
];
// @ts-ignore
const useStyles = makeStyles(styles);

export default function RTLPage() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color="warning" stats icon>
              // @ts-ignore
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>فضا مصرف شده</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  فضای بیشتری داشته باشید...
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color="success" stats icon>
              // @ts-ignore
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>سود</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                ۲۴ ساعت اخیر
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color="danger" stats icon>
              // @ts-ignore
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>مشکلات حل شده</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                توسط گیت‌هاب
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={6} md={3}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color="info" stats icon>
              // @ts-ignore
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>دنبال‌کننده</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            // @ts-ignore
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                هم‌اکنون
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card chart>
            // @ts-ignore
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
               // @ts-ignore
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <h4 className={classes.cardTitle}>فروش روزانه</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                رشد در فروش امروز.
              </p>
            </CardBody>
            // @ts-ignore
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> ۴ دقیقه پیش
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card chart>
            // @ts-ignore
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
               // @ts-ignore
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <h4 className={classes.cardTitle}>دنبال کننده‌های ایمیلی</h4>
              <p className={classes.cardCategory}>کارایی آخرین کمپین</p>
            </CardBody>
            // @ts-ignore
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> کمپین دو روز پیش ارسال شد
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={4}>
          // @ts-ignore
          <Card chart>
            // @ts-ignore
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
               // @ts-ignore
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <h4 className={classes.cardTitle}>وظایف انجام شده</h4>
              <p className={classes.cardCategory}>کارایی آخرین کمپین</p>
            </CardBody>
            // @ts-ignore
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> کمپین دو روز پیش ارسال شد
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="وظایف:"
            headerColor="primary"
            rtlActive
            tabs={[
              {
                tabName: "باگ‌ها",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                    rtlActive
                  />
                )
              },
              {
                tabName: "وبسایت",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                    rtlActive
                  />
                )
              },
              {
                tabName: "سرور",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                    rtlActive
                  />
                )
              }
            ]}
          />
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={6}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>آمار کارکنان</h4>
              <p className={classes.cardCategoryWhite}>
                کارکنان جدید از ۱۵ آبان ۱۳۹۶
              </p>
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["کد", "نام", "حقوق", "استان"]}
                tableData={[
                  // @ts-ignore
                  ["1", "احمد حسینی	", "$36,738", "مازندران"],
                  // @ts-ignore
                  ["2", "مینا رضایی	", "$23,789", "گلستان"],
                  // @ts-ignore
                  ["3", "مبینا احمدپور	", "$56,142", "تهران"],
                  // @ts-ignore
                  ["4", "جلال آقایی	", "$38,735", "شهرکرد"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={6}>
          // @ts-ignore
          <Card>
            // @ts-ignore
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>اعلان ها</h4>
              <p className={classes.cardCategoryWhite}>
                يدويا من قبل أصدقائنا من{" "}
                <a
                  target="_blank"
                  href="https://material-ui-next.com/?ref=creativetime"
                >
                  واجهة المستخدم المادية
                </a>{" "}
                ونصب من قبل{" "}
                <a
                  target="_blank"
                  href="https://www.creative-tim.com/?ref=mdr-rtl-page"
                >
                  الإبداعية تيم
                </a>
                . يرجى التحقق من{" "}
                <a href="#pablo" target="_blank">
                  وثائق كاملة
                </a>
                .
              </p>
            </CardHeader>
            // @ts-ignore
            <CardBody>
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="warning" ایجاد شده است.'
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="primary" ایجاد شده است.'
                }
                close
                rtlActive
                color="primary"
              />
              <SnackbarContent
                message={"این یک اعلان با دکمه بستن و آیکن است"}
                close
                rtlActive
                color="info"
              />
            </CardBody>
          </Card>
        </GridItem>
        // @ts-ignore
        <GridItem xs={12} sm={12} md={6}>
          // @ts-ignore
          <Card profile>
            // @ts-ignore
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            // @ts-ignore
            <CardBody profile>
              <h6 className={classes.cardCategory}>مدیرعامل / مدیرفنی</h6>
              <h4 className={classes.cardTitle}>خداداد عزیزی</h4>
              <p className={classes.description}>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
              </p>
              // @ts-ignore
              <Button color="primary" round>
                دنبال‌کردن
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}