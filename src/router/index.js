import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/positivefeedback',
        name: 'PositiveFeedback',
        component: () => import('../views/PositiveFeedback.vue')
      },
      {
        path: '/Profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        children: [
          {
            path: '/Profile/UpdateLogo',
            name: 'UpdateLogo',
            component: () => import('../components/myprofile/UpdateLogo.vue'),
          },
          {
            path: '/Profile/changepassword',
            name: 'changepassword',
            component: () => import('../components/myprofile/ChangePassword.vue')
          },
          {
            path: '/Profile/EditProfile',
            name: 'EditProfile',
            component: () => import('../components/myprofile/EditProfile.vue')
          }
        ],
      },
      {
        path: '/ShowAlarm',
        name: 'ShowAlarm',
        component: () => import('../views/ShowAlarm.vue')
      },
      {
        path: '/ChartAlarm',
        name: 'ChartAlarm',
        component: () => import('../views/ChartAlarm.vue')
      },

      /* Chart One ********************* */
      {
        path: '/GeneralDistribution',
        name: 'GeneralDistribution',
        component: () => import('../views/chartone/GeneralDistribution.vue')
      },
      {
        path: '/overlapofdays',
        name: 'OverlapOfDays',
        component: () => import('../views/chartone/OverlapOfDays.vue')
      },
      {
        path: '/overlaphours',
        name: 'OverlapHours',
        component: () => import('../views/chartone/OverlapHours.vue')
      },
      {
        path: '/feedbacktemplate',
        name: 'FeedbackTemplate',
        component: () => import('../views/chartone/FeedbackTemplate.vue')
      },
      {
        path: '/deviceclassification',
        name: 'DeviceClassification',
        component: () => import('../views/chartone/DeviceClassification.vue')
      },
      {
        path: '/Process',
        name: 'Process',
        component: () => import('../views/chartone/Process.vue')
      },
      {
        path: '/GroupClassification',
        name: 'GroupClassification',
        component: () => import('../views/chartone/GroupClassification.vue')
      },
      {
        path: '/ImportantNotes',
        name: 'ImportantNotes',
        component: () => import('../views/chartone/ImportantNotes.vue')
      },
      /* FrequencyofFeedback ********************* */
      {
        path: '/CircleDiagram',
        name: 'CircleDiagram',
        component: () => import('../views/FrequencyofFeedback/CircleDiagram.vue')
      },
      {
        path: '/HourlyChart',
        name: 'HourlyChart',
        component: () => import('../views/FrequencyofFeedback/HourlyChart.vue')
      },
      {
        path: '/DailyChart',
        name: 'DailyChart',
        component: () => import('../views/FrequencyofFeedback/DailyChart.vue')
      },
      {
        path: '/WeeklyChart',
        name: 'WeeklyChart',
        component: () => import('../views/FrequencyofFeedback/WeeklyChart.vue')
      },
      {
        path: '/WeeklyVotes',
        name: 'WeeklyVotes',
        component: () => import('../views/FrequencyofFeedback/WeeklyVotes.vue')
      },
      {
        path: '/MonthlyChart',
        name: 'MonthlyChart',
        component: () => import('../views/FrequencyofFeedback/MonthlyChart.vue')
      },
      /* Indicators *************************** */
      {
        path: '/HourlySatisfactionIndex',
        name: 'HourlySatisfactionIndex',
        component: () => import('../views/Indicators/HourlySatisfactionIndex.vue')
      },
      {
        path: '/WeeklyDailySatisfactionIndex',
        name: 'WeeklyDailySatisfactionIndex',
        component: () => import('../views/Indicators/WeeklyDailySatisfactionIndex.vue')
      },
      {
        path: '/DailySatisfactionIndex',
        name: 'DailySatisfactionIndex',
        component: () => import('../views/Indicators/DailySatisfactionIndex.vue')
      },
      {
        path: '/WeeklySatisfactionIndex',
        name: 'WeeklySatisfactionIndex',
        component: () => import('../views/Indicators/WeeklySatisfactionIndex.vue')
      },
      {
        path: '/MonthlySatisfactionIndex',
        name: 'MonthlySatisfactionIndex',
        component: () => import('../views/Indicators/MonthlySatisfactionIndex.vue')
      },
      /* Dedicatedfacilities *************************** */
      {
        path: '/DamagePoints',
        name: 'DamagePoints',
        component: () => import('../views/Dedicatedfacilities/DamagePoints.vue')
      },
      {
        path: '/Strengths',
        name: 'Strengths',
        component: () => import('../views/Dedicatedfacilities/Strengths.vue')
      },
      {
        path: '/ViewComments',
        name: 'ViewComments',
        component: () => import('../views/Dedicatedfacilities/ViewComments.vue')
      },
      {
        path: '/RepetitiveWords',
        name: 'RepetitiveWords',
        component: () => import('../views/Dedicatedfacilities/RepetitiveWords.vue')
      },
      /* Manpower **************************** */
      {
        path: '/ManpowerStatus',
        name: 'ManpowerStatus',
        component: () => import('../views/manpower/ManpowerStatus.vue')
      },
      {
        path: '/ManpowerDevices',
        name: 'ManpowerDevices',
        component: () => import('../views/manpower/ManpowerDevices.vue')
      },
      {
        path: '/AllocateManpower',
        name: 'AllocateManpower',
        component: () => import('../views/manpower/AllocateManpower.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
