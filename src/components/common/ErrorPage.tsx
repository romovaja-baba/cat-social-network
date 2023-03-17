interface Props {
    errorText: string
}

const ErrorPage = ({errorText}: Props) => {
    return (
        <div>
            <h1>{errorText}</h1>
        </div>
    )
};

export default ErrorPage;