import React from "react";
import {StyledErrors, StyledError} from './StyledErrors';

type ErrorsProps = {
    errorMsgs: Array<string>;
}

const Errors = ({errorMsgs}: ErrorsProps) => 
    <StyledErrors>
        {errorMsgs.length > 0 && errorMsgs.map((msg) => <StyledError>{msg}</StyledError>)}
    </StyledErrors>

export default Errors;

