import playButtonImg from '../../images/play-button.png'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

import '../../styles/Music.scss'

const Music = () => {
    return (
        <div className='music-area'>
            <div className='music-list'>
                <div className='music-item'>
                    <img src={playButtonImg} alt='' width={'16px'} height={'16px'} />
                    <div className='music-title'>song 1</div>
                </div>
            </div>
        </div>
    )
}

export default withAuthRedirect(Music)
