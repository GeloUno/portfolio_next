import Container from "../shared/container";

interface IErrorViewProps {
    description: string
}

function ErrorView({ description }: IErrorViewProps) {
    return (
        <Container
            title="Something go wrong"
            switchHorizontalView={false}
        >
            <div className='w-full h-full text-center text-4xl pt-32'>
                {description}
            </div>
        </Container>

    );
}

export default ErrorView;