require('./Listitem.styl');
import { GetQueryString } from 'clientConfig/util/queryurlfield';
import { Control } from 'react-keeper'
import { Boxs, Badge } from 'saltui'
import CheckRound from 'salt-icon/lib/CheckRound';
const { HBox, Box, VBox } = Boxs;
const IconSvg = require('images/svg/notice.svg')
var classNames = require('classnames/bind');


class Listitem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickIcon = this.handleClickIcon.bind(this);
        this.getSelectData = this.getSelectData.bind(this);
    }
    handleClick() {
        if (this.props.isEidt) return;
        if (this.props.refreshing) return;
        let data = {
            schoolId: this.props.data.schoolId,
            studentId: this.props.data.studentId,
            noticeId: this.props.data.noticeId,
            isreceived: this.props.data.isreceived,//是不是已发送
        }
        if (this.props.data.studentId) {
            Control.go('/home/parentnotice/parentNoticeDetail', { data })
        } else {
            Control.go('/home/notice/noticeDetail', { data })
        }

    };
    getSelectData(e) {
        let { index } = this.props;
        if (this.props.data.isreceived) {
            var data = this.props.data.noticeStudentId;
        } else {
            var data = this.props.noticeId; //this.props.noticeId
        }
        if (this.state[`isSelect${index}`]) {
            if (!window.selectListItem) {
                window.selectListItem = [];
            }
            window.selectListItem.push(data);
            if (window.selectListItem.length == this.props.max && !this.props.selectAll) {
                this.props.handleClickAllIcon && this.props.handleClickAllIcon(1);
            }
        } else {
            for (let key in window.selectListItem) {
                if (data == window.selectListItem[key]) {
                    window.selectListItem.splice(key, 1);
                }
            }
            if (this.props.selectAll == true) {
                this.props.handleClickAllIcon && this.props.handleClickAllIcon(1);
            }
        }
    }
    handleClickIcon(e) {
        let { index } = this.props;
        if (e) {
            e.stopPropagation();
        }
        this.setState({ [`isSelect${index}`]: !this.state[`isSelect${index}`] }, () => {
            this.getSelectData(e);
        });
    }
    render() {
        var styles = {
            msg: 'msg',
            workplan: 'workplan-manage'
        };
        var cx = classNames.bind(styles);
        if (this.props.className) {
            for (let key in styles) {
                if (this.props.className.includes(styles[key])) {
                    var obj = {};
                    Object.assign(obj, { [`${key}`]: true });
                }
            }
        }
        if (JSON.stringify(obj) == "{}") {
            var className = cx('listitem', this.props.className);
        } else {
            var className = cx('listitem', obj);
        }
        let { index } = this.props;
        return (
            // <div className={className} onClick={this.props.isEidt ? ((e) => { this.handleClickIcon(e) }) : this.handleClick} key={this.props.index}>
            <HBox className={className} onClick={this.props.isEidt ? ((e) => { this.handleClickIcon(e) }) : this.handleClick} key={this.props.index}>
                {this.props.isEidt &&
                    <Box className="circle-place t-MR10">
                        {!this.props.isEidt ? null :
                            (!this.state[`isSelect${index}`] ?
                                <div className="notice-circle" onClick={(e) => { this.handleClickIcon(e) }} ></div> :
                                <CheckRound
                                    fill="#53CAC3"
                                    width='20'
                                    height='20'
                                    onClick={(e) => { this.handleClickIcon(e) }}
                                />)
                        }
                    </Box>
                }
                <Box flex={3} className={classNames("t-ML10",{"content-box":this.props.isEidt})}>
                    <HBox vAlign="center">
                        <Box className="t-MR10">
                            <IconSvg fill='#E37373' width='35' height='35' />
                        </Box>
                        <Box flex={3}>
                            <HBox vAlign="center" hAlign="center">
                                <Box flex={1} className="title">{this.props.data.title}</Box>
                                <Box flex={1} className="t-FAR content" >
                                    {!this.props.isreceived && this.props.regularlyFlag == 1 && this.props.tabActive == 1 && <span className="time t-MR10">定时</span>}
                                    {this.props.data.subtitle && this.props.data.subtitle.split(" ")[0]}
                                </Box>
                            </HBox>
                            {this.props.data.content && this.props.data.content.map((item, index) => {
                                return (<HBox className="t-FAL content t-MT3">
                                    <Box className={classNames({ contentColor: item.className == "green", contentColor1: item.className == "red" })}>{item.subcontent}</Box>
                                    <Box className="omt">{item.subcontent && item.unitcontent && "："}{typeof item.unitcontent == "number" ? new Date(item.unitcontent).toLocaleDateString() : item.unitcontent}</Box>
                                </HBox>
                                )
                            })}
                        </Box>
                    </HBox>
                </Box>
            </HBox>

        );
    }
    componentWillMount() {

    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectAll != this.props.selectAll && nextProps.selectType == 0) {
            let { index } = this.props;
            if (this.props.data.isreceived) {
                var data = this.props.data.noticeStudentId;
            } else {
                var data = this.props.noticeId;
            }
            //全选
            if (nextProps.selectAll) {
                if (!this.state[`isSelect${index}`]) {
                    if (!window.selectListItem) {
                        window.selectListItem = [];
                    }
                    window.selectListItem.push(data);
                    this.setState({ [`isSelect${index}`]: true })
                }
            } else {
                //取消全选
                if (this.state[`isSelect${index}`]) {
                    if (window.selectListItem.length > 0)
                        window.selectListItem = [];
                    this.setState({ [`isSelect${index}`]: false })
                }
            }
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

module.exports = Listitem;
