import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div`
                    display: flex;
                    `;

const Pane = styled.div<{weight: number}>`
    flex:${props => props.weight}
    `;

export interface SplitScreenProps {
    children: ReactNode[];
    leftWeight?: number;
    rightWeight?: number;
}

export const SplitScreen: React.FC<SplitScreenProps> = ({children, leftWeight = 1, rightWeight = 3}) => {
    const [left, right] = children;
    return (
    <Container  data-testid="ss-container">
        <Pane weight={leftWeight}>
            {left}
        </Pane>
        <Pane weight={rightWeight}>
            {right}
        </Pane>
    </Container>);
};