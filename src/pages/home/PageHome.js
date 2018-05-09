require('./PageHome.styl');
import { Control } from 'react-keeper';
import { Boxs, Field, Group, List } from 'saltui';
const { HBox, Box, VBox } = Boxs;
import AngleRight from 'salt-icon/lib/AngleRight';
const DetailFlow = require('components/detailwrap');
const classNames = require("classnames");
const TreplyItem = require('components/trelplyitem');
const NoticeBac = require('images/svg/noticebac.svg')
const ui = require('clientConfig/util/jsapi/ui');
const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            sender: '',
            senderData: '',
            noticeType: '',
            noticeMsg: '',
            title: '',
            sentUserCount: -1,//发送人数
            readedUserCount: -1,//已读人数
            replayFlag: 0,
            sentReplayList: [],
            fileList: [],
            // [{
            //     imgUrl: 'https://img.alicdn.com/tps/TB1GnjaJFXXXXcpXFXXXXXXXXXX-2448-1836.jpg',
            //     title: '小木屋',
            // }]
            sentReplayList: [],
            // [
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", },
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", },
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", },
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", },
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", },
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", },
            //     { replayId: "4732", id: 393, content: "不相信", readStatus: "1", replayDate: "2018.05.07 14:54", }
            // ],
            listData: [],
            // [{
            //     userCount: "（1人）", dataList:
            //         [{ isReadCount: 1, MType: "T", memberId: 4732, memberName: "钉钉_2号老师", memberCount: 1 }]
            //     , groupName: "老师", MType: "T"
            // }]
        };

    }
    //文件点击
    handleClick = () => {
        if (this.state.fileList && this.state.fileList[0].imgUrl) {
            dd.biz.util.openLink({
                url: this.state.fileList[0].imgUrl,//要打开链接的地址
                onSuccess: function (result) {
                },
                onFail: function (err) { }
            })
        }

    }
    fetchNoticeMember(cb){
        Actions.fetchNoticeMember({
            schoolId,noticeId
        },cb);
    }
    render() {
        let t = this;
        return (
            <div className="home">
                <div className="home-head">
                    <NoticeBac width="100%" height="80" />
                </div>
                <div className="home-content">
                    <div className="home-content-deviation">
                        <DetailFlow.Head
                            sender={this.state.sender}
                            senderData={this.state.senderData}
                            noticeType={this.state.noticeType}
                        />
                        <DetailFlow.Item
                            noticeMsg={this.state.noticeMsg}
                            title={this.state.title}
                        />
                        {this.state.sentUserCount>0&&<DetailFlow.ItemDeliver
                            sentUserCount={this.state.sentUserCount}
                            readedUserCount={this.state.readedUserCount}
                            listData={this.state.listData}
                            fetchNoticeMember={this.fetchNoticeMember}
                        />}
                        {/* 文件显示 */}
                        {
                            this.state.fileList && this.state.fileList.length > 0 &&
                            <List
                                layout="left"
                                hasRightIcon={true}
                                iconName='angle-right'
                                iconWidth={20}
                                isDelete={false}
                                onClick={this.handleClick}
                                data={this.state.fileList}
                                className="t-LH40 t-MT10  list-item-img"
                            />
                        }
                        {/* 老师端回复单个信息显示框已发送 */}
                        {this.state.sentReplayList.length > 0 &&
                            this.state.sentReplayList.map((item, index) => {
                                return (
                                    <TreplyItem
                                        key={index}
                                        {...item}
                                    />
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }

    componentWillMount() {
        ui.setTitle({ title: "通知详情" });
    }

    componentDidMount() {
        const cb = (replayFlag) => {
            replayFlag == '1' && Actions.getReplayList({ schoolId, noticeId });//已发送
        }
        Actions.fetchSent({ schoolId, noticeId }, cb);
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
reactMixin.onClass(Home, Reflux.connect(Store));
module.exports = Home;
