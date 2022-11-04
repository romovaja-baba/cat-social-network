import Feed from "./Feed";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        news: state.feedPage.newsData
    }
}

let maoDispatchToProps = () => {
    return {}
}

const FeedContainer = connect(mapStateToProps, maoDispatchToProps)(Feed);
export default FeedContainer