require('./Pendinglist.styl');
const Replylistitem = require('components/replylistitem');

import classNames from 'classnames';
import { Toast, Button, ScrollList, Context } from 'saltui'
class Pendinglist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        if (this.props.type == 'replylistitem') {
            var RefreshItem = <Replylistitem {...this.props} refreshing={this.props.refreshing} />;
        } else {
            if (!this.props.leftSlip) {
                var RefreshItem = <Listitem {...this.props} refreshing={this.props.refreshing} />;
            } 
        }
        return (
            // <div className={classNames('pendinglist')}></div>
                <div className={classNames("pendinglist", { "detail-height": this.props.norefresh })}>
                        <ScrollList
                            dataGetted={this.props.dataGetted}
                            data={this.props.data}
                            hasError={this.props.hasError}
                            refreshing={this.props.refreshing}
                            onRefresh={this.props.onRefresh}
                            loading={this.props.loading}
                            onLoad={this.props.onLoad}
                            noMore={this.props.noMore}
                            desMaxLine={14}
                        >
                            {RefreshItem}
                        </ScrollList> 
                </div>
            
        );
    }

    componentWillMount() {
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

module.exports = Pendinglist;
