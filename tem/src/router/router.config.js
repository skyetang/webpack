const App = r => require.ensure([], () => { r(require('../views/app/app')); }, 'app');


export default [{
  path: '/app',
  name: 'app',
  component: App,
  meta: {
    title: 'app'
  }
}];

