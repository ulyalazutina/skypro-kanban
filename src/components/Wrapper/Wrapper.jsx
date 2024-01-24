import { WrapperStyle } from "./Wrapper.styled";

function Wrapper({ children }) {
    return (
            <WrapperStyle>
            {children}
            </WrapperStyle>
    );
}

export default Wrapper;
