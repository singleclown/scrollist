require('./Rollup.styl');
const classNames = require('classnames');
import { Boxs, Scroller } from 'saltui'
import CheckRound from 'salt-icon/lib/CheckRound';
const { HBox, Box } = Boxs;
import { Control } from 'react-keeper'
class Rollup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUp: false,
            top_select: false,
            visible: false,
            selectstudent: []//类型班级时已选择的学生
        };
        this.handleClick = this.handleClick.bind(this);
        this.clickIcon = this.clickIcon.bind(this);
        this.handleClickVisible = this.handleClickVisible.bind(this);
        this.classId = '';
        this.num = '';
        this.memberName = '';
    }
    //列表项icon点击
    clickIcon(e) {
        e.stopPropagation()
        this.setState({ top_select: !this.state.top_select }, () => {
            for (let key in this.props.data.dataList) {
                let id = [`active${key}`];
                let values = (eval(`this.state.${id}`));
                if (this.state.top_select != values) {
                    this.setState({ [`active${key}`]: this.state.top_select })
                }
            }
        })
    }
    //点击列表项
    handleClick() {
        this.setState({ isUp: !this.state.isUp })
        this.props.refresh && this.props.refresh()
    }
    //点击列表项子项
    handleClickIcon(index) {
        let id = [`active${index}`];
        let values = (eval(`!this.state.${id}`));
        if (this.props.data.MType == "C") {
            this.classId = this.props.data.dataList[index].memberId;
            this.num = index;
            this.memberName = this.props.data.dataList[index].memberName;
            this.setState({ visible: true })
            return;
        }
        this.setState({ [`active${index}`]: values }, () => {
            if (values) {
                for (let key in this.props.data.dataList) {
                    let id = [`active${key}`];
                    let item = (eval(`this.state.${id}`));
                    if (!item) { break; }
                    if (item && key == this.props.data.dataList.length - 1) {
                        this.setState({ top_select: true })
                    }
                }
            } else {
                if (this.state.top_select) {
                    this.setState({ top_select: false })
                }
            }
        })
    }
    handleClickVisible(data) {
        let t = this;
        this.setState({ visible: false });
        let index = this.num;
        let count = t.props.data.dataList[index].memberCount;
        for (let item of data) {
            item.memberId = this.classId;
        }
        if (data.length >= 0) {
            this.setState({ [`selectstudent${index}`]: data, [`active${index}`]: data.length == count ? true : false })
        }
    }
    render() {
        let t = this;
        return (
            <div className="rollup" >
                <HBox vAlign="center" onClick={this.handleClick}>
                    <Box className="t-MR15">
                        <span className={classNames("right-triangle", { "transform-triangle": t.state.isUp })}>
                        </span>
                    </Box>
                    <Box flex={1} >
                        {t.props.data.groupName}
                        <span className="t-ML5">{t.props.data.userCount}</span>
                    </Box>
                    {!this.props.nocheckround && <Box className="t-FAR top-circle"><Icon name="check-round" className="t-MR20" fill={this.state.top_select ? "#53CAC3" : "#E5E5E5"} width={20} height={20} onClick={this.clickIcon} /></Box>}
                </HBox>
                {t.state.isUp && (t.props.data.dataList instanceof Array ? t.props.data.dataList.map((item, index) => {
                    
                    return (
                        <div className="rollitem" onClick={this.handleClickIcon.bind(t, index, item)} key={`roll${index}`}>
                            <HBox vAlign="center" className="t-PL30">
                                <Box flex={2}>
                                    {item.memberName}
                                </Box>
                                <Box flex={3} className="t-FAR t-MR20">
                                    {item.MType == "C" && t.state[`selectstudent${index}`] && eval(`t.state.selectstudent${index}.length> 0`) && <span className="t-MR15">已选择{eval(`t.state.selectstudent${index}.length`)}人</span>}
                                    {!this.props.nocheckround ?
                                        <CheckRound
                                            name="check-round"
                                            fill={(eval(`t.state.active${index}`)) ? "#53CAC3" : "#E5E5E5"}
                                            width={20}
                                            height={20}
                                            onClick={this.handleClickIcon.bind(t, index)}
                                        /> : <span>{this.state.isReadCount ? "已读" : "未读"}</span>}

                                </Box>
                            </HBox>
                        </div>
                    );
                })
                    :
                    null)
                }
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

module.exports = Rollup;
