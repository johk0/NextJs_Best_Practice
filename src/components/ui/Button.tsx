interface IProps {
    text: string
}
const Button = ({ text }: IProps) => {

    return (
        <>
            <button className="">{text}</button>
        </>
    );
};

export default Button;