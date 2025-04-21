import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}
const layout = ({ children }: IProps) => {

    return (
        <>
            <div className="">
                products Layout
                {children}
            </div>
        </>
    );
};

export default layout;