import { Route } from 'react-keeper'
const PageMultiplereply = require('./subpages/multiplereply');
const PageHome = {
    page: require('./PageHome'),
    route: () => {
        return (<div>
            <Route index path='/home' component={Home} />
        </div>)
    }

}
const Home = () => {
    return (
        <div>
            <Route index component={PageHome.page} />   
            <Route name="老师获取回复列表页" path='/getMultipleReplys' component={PageMultiplereply} />   
        </div>)
}

export default PageHome;
