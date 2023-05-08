import '../../../styles/Dialogs.scss'

interface Props {
    text: string
    senderId: number
}

const Message = ({ text, senderId }: Props) => {
    return (
        <div
            className={
                senderId === 0 ? 'message-myself message-item' : 'message-others message-item'
            }
        >
            {text}
        </div>
    ) as any
}

export default Message
