import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { INews } from '../../interfaces/news.interface'
import '../../styles/Feed.scss'
import { useAppSelector } from '../../utils/hooks'
import { newsSelector } from '../../utils/selectors'
import News from './News/News'

const Feed = () => {
    const news = useAppSelector(newsSelector)

    return (
        <div className='feed-area'>
            <div className='feed-list'>
                {news.map((news: INews, index: number) => (
                    <News key={index} news={news} />
                ))}
            </div>
        </div>
    )
}

export default withAuthRedirect(Feed)
