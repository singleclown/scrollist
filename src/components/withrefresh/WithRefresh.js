require('./WithRefresh.styl');
const WithRefresh = (WrappedComponent, getData) => {
    class WithRefresh extends React.Component {
        static defaultProps = {
            pageSize: 20,
            keyword: ""
        };
        constructor(props) {
            super(props);
            this.state = {
                dataGetted: false,//数据是否加载完成
                data: [],//传给组件的数据
                hasError: false,//加载数据时是否出错
                currentPage: 1,
                loading: false,//触底加载是否正在加载中
                refreshing: false,//下拉刷新是否在刷新中
                keyword: '',
            };
            this.onLoad =  this.onLoad.bind(this);
            this.onRefresh = this.onRefresh.bind(this);
        }
        //下拉刷新
        onRefresh() {
            !this.state.keyword && this.setState({ refreshing: true, keyword: '' });
            let success = (noMore, items) => {
                this.setState({
                    refreshing: false,
                    dataGetted: true,
                    data: items,
                    currentPage: 1,
                    noMore,//没有更多数据标志位
                    hasError: false,
                });
            };
            let error = () => {
                this.setState({
                    loading: false,
                    dataGetted: true,
                    noMore: true,//没有更多数据标志位
                    hasError: true,
                });
            };
            setTimeout(() => {
                getData(1,this.props,success,error)
            }, 1000)

        }
        //上拉刷新
        onLoad() {
            const curr = this.state.currentPage;
             this.setState({ loading: true });
             let success = (noMore, items) => {
                 this.setState({
                     loading: false,
                     dataGetted: true,
                     data: this.state.data.concat(items),
                     currentPage: curr + 1,
                     noMore,//没有更多数据标志位
                     hasError: false,
                 });
             };
             let error = () => {
                 this.setState({
                     loading: false,
                     dataGetted: true,
                     noMore: false,
                     hasError: true,
                 });
             };
            setTimeout(() => {
                //页面数，页面大小，成功，失败
                getData(curr, this.props, success, error)
            }, 100);
        }
        componentDidMount() {

        }

        componentWillUnmount() {

        }
        componentWillReceiveProps(nextProps) {
            nextProps.keyword && nextProps.keyword != this.state.keyword && this.setState({ keyword: nextProps.keyword }, () => {
                this.onRefresh();
            })
        }
        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            //   const { type } = this.props;
            //   // 向包裹组件注入props属性，一般都是高阶组件的state状态
            //   // 或实例方法
            //   const injectedProp = someStateOrInstanceMethod;
            //   // 向包裹组件传递props属性
            //   return (
            //     <WrappedComponent
            //       injectedProp={injectedProp}
            //       {...passThroughProps}
            //     />
            //   );
            return <WrappedComponent
                {...this.state}
                {...this.props}
                onLoad={this.onLoad}
                onRefresh={this.onRefresh}
                max={this.state.data.length}
            />;
        }
    };
    WithRefresh.displayName = `WithRefresh(${getDisplayName(WrappedComponent)})`;
    return WithRefresh
}
const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';
module.exports = WithRefresh;
