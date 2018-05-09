import { Control } from 'react-keeper';
import { ready } from 'clientConfig/util/queryurlfield'
const ui = require('clientConfig/util/jsapi/ui');
class App extends React.Component {
    constructor(props) {
        super(props);
        ready(() => { ui.setBouncedis(); })
    }
    render() {
        return (
            <div >
                {this.props.children}
            </div>
        );
    }
}
module.exports = App;