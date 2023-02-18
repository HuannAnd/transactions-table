import React from 'react'
import * as C from "./Styles";

export interface LoadingProps {
    loading: boolean
    start: boolean
}

const Loading: React.FC< LoadingProps > = ({ loading , start }) => {
    return (
        <C.Centralize loadingOpen={loading}>
        <C.LoadingStyled>
            <C.BarsLoading index={1} start={start}/>    
            <C.BarsLoading index={2} start={start}/>    
            <C.BarsLoading index={3} start={start}/>    
        </C.LoadingStyled>
        <C.Paragraph>Warren</C.Paragraph>
    </C.Centralize>
        
    );
}
 
export default Loading;