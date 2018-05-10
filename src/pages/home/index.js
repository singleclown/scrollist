import { Route } from 'react-keeper'
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
        </div>)
}

export default PageHome;
