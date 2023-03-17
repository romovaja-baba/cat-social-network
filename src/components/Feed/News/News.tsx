import heartImage from "../../../images/heart.png";
import "../../../styles/Feed.scss";
import { INews } from "../../../interfaces/news.interface";

interface Props {
    news: INews
}

const News: React.FC<Props> = ({ news }: Props) => {
    console.log(news)
    return (
        <div className="news-item">
            <div className="news-maininfo">
                <div className="news-title">{news.title}</div>
                <div className="news-text">{news.text}</div>
            </div>
            <div className="news-reaction">
                <div>{news.likeCount}</div>
                <img height={"20px"} width={"20px"} src={heartImage} alt="" />
            </div>
        </div>
    )
};

export default News;