require('./Replylist.styl');
import { Group, TextField } from 'saltui';
const { RightAddon } = TextField;
const classNames = require("classnames");
class Replylist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            active: props.active
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTextReply = this.handleTextReply.bind(this);
        this.blur = this.blur.bind(this);
        this.focus = this.focus.bind(this);
    }
    handleTextChange(name, newValue) {
        this.setState({
            [name]: newValue,
        });
    }
    handleTextReply() {
        if (this.state.text.length > 0) {
            this.props.handleReply && this.props.handleReply(this.state.text);
            if (!this.props.nofocus) {
                this.setState({ active: false, text: '' });
            } else {
                this.setState({ text: '' });
            }
            if (this.props.disappear) {
                this.setState({ active: false });
            }
        }
    }
    blur() {
        if (!this.props.nofocus) {
            this.setState({ active: false });
        }
    }
    focus(e) {
        let t = this;
        let timer = setTimeout(function () {
            document.body.scrollTop = document.body.scrollHeight;
            clearTimeout(timer);
        }, 100);
    }
    render() {
        let t = this;
        return (
            <div className={classNames("replylist", { "active": this.state.active })}>
                <Group.List>
                    <TextField
                        ref="textField"
                        label=""
                        value={t.state.text}
                        placeholder="请输入你的回复"
                        onChange={this.handleTextChange.bind(t, 'text')}
                        onBlur={this.blur.bind(t, 'repley')}
                        onFocus={this.focus}
                    >
                        <RightAddon>
                            <span onClick={this.handleTextReply} className={classNames({ "color": this.state.text.length > 0 })}>回复</span>
                        </RightAddon>
                    </TextField>
                </Group.List>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active && nextProps.active != this.state.active) {
            this.setState({ active: nextProps.active }, () => {
                if (!nextProps.nofocus) {
                    let dom = ReactDOM.findDOMNode(this.refs.textField);
                    dom.getElementsByClassName("t-text-field-input")[0].focus();
                }
            });
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

module.exports = Replylist;
