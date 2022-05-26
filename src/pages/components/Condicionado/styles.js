import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 156px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    margin-bottom: 40px;
`;

export const BoxContent = styled.View`
    width: 100%;
    height: 156px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
`;

export const Content = styled.View`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const ContentL = styled.View`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const ContentR = styled.View`
    display: flex;
    width: 100%;
    padding: 10px;
`;
export const BoxTxt = styled.View`
    display: flex;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    
`;

export const SubTitle = styled.Text`
    font-size: 18px;
`;