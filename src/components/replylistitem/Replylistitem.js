require('./Replylistitem.styl');
import People from 'images/svg/people.svg'
import { Boxs, Group } from 'saltui'
const { HBox, Box, VBox } = Boxs;
class Replylistitem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
         let {content,imgurl,subtitle,title}= {...this.props.data};
        return (
            <div className="replylistitem">
                    <HBox>
                        <Box>
                            <People  width="30" height="30"  />
                        </Box>
                        <Box className="t-ML8">
                            <VBox>
                                <Box>{title}<span className="t-ML10 title">{subtitle}</span></Box>
                                <Box className="color t-MT8">{content}</Box>
                            </VBox>
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

module.exports = Replylistitem;
