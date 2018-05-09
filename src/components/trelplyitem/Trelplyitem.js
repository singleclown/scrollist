require('./Trelplyitem.styl');
import People from 'images/svg/people.svg'
const Msg = require('images/svg/msg.svg')
import { Boxs } from 'saltui'
const { HBox, Box, VBox } = Boxs;
import { Control } from 'react-keeper'
class Trelplyitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            replayId: props.replayId,//用户id
            userType: props.userType,//用户类型
            imgurl: props.imgurl,//图像地址
            name: props.name || '周小明家长',//姓名
            replayDate: props.replayDate,//回复时间
            content: props.content, //回复内容
            replayCounts: props.replayCounts || 22222,//回复个数
            readStatus: props.readStatus //0未读 1已读
        };
        this.data = this.props.data;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        Control.go('/home/notice/getMultipleReplys', { data: this.props, formData: this.data })
    }
    render() {
        return (
            <div className="trelplyitem t-MT15">
                <HBox onClick={this.handleClick}>
                    <Box >
                        {!this.state.imgurl ? <People width="30" height="30" /> :
                            <img src={this.state.imgurl} width="30" height="30" alt="" />}
                    </Box>
                    <Box flex={1} className="t-ML12">
                        <div className="trelplyitem-name">
                            <span>{this.state.name}</span>
                        </div>
                        <p className="t-MT10 omt">{this.state.content}</p>
                    </Box>
                    <Box flex={1} className="t-FAR">
                        <p className='t-ML12'>{this.state.replayDate}</p>
                        <p className="t-MT10 circle">{this.state.replayCounts + '回复'}</p>
                    </Box>
                </HBox>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            replayId: nextProps.replayId,//用户id
            userType: nextProps.userType,//用户类型
            imgurl: nextProps.imgurl,//图像地址
            name: nextProps.name,//姓名
            replayDate: nextProps.replayDate,//回复时间
            content: nextProps.content, //回复内容
            replayCounts: nextProps.replayCounts,//回复个数
            readStatus: nextProps.readStatus //0未读 1已读
        });
        if (nextProps.data) {
            this.data = nextProps.data;// 存schoolId,noticeId
        }
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

module.exports = Trelplyitem;
