require('./PageMultiplereply.styl');
import { NavBar, Context } from 'saltui';
const classNames = require("classnames")
import { Control } from 'react-keeper';
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');
const Replylist = require('components/replylist');
const WithRefresh = require('components/withrefresh');
const PendingList = require('components/pendinglist');
import { ready } from 'clientConfig/util/queryurlfield'
const ui = require('clientConfig/util/jsapi/ui');
const ListWithReply = WithRefresh(
    PendingList,
    (pageNum, props, success, error) => {
        Actions.fetch(pageNum, props, success, error)
    }
);
class Multiplereply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleReply = this.handleReply.bind(this);
        this.handleOnLeftClick = this.handleOnLeftClick.bind(this)
    }
    handleReply(text) {
        if(!text)return;
        let t = this;
        const cb = () => {
            t.refs.ListWithReply.onRefresh()
        };
        Actions.replyusermsg({ text }, cb)
    }
    handleOnLeftClick() {
        Control.go(-1);
    }
    render() {
        return (
            <div className="multiplereply">
                <div className="multiplereply-content">
                    <ListWithReply
                        className="msg"
                        ref="ListWithReply"
                        leftSlip={false}
                        type="replylistitem"
                    />
                    </div>
                    <Replylist
                        ref="replylist"
                        handleReply={this.handleReply}
                        active={true}
                        nofocus={true}
                    />               
            </div>
        );
    }

    componentWillMount() {
        ready(() => { ui.setTitle({ title: "更多回复" }); })
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(Multiplereply, Reflux.connect(Store, 'Multiplereply'));

module.exports = Multiplereply;
