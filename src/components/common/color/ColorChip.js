import styled from "styled-components";

const ColorChipUnit = styled.div`
    border-radius:50%;
    width:16px;
    height:16px;
    background-color:red;
`
const ColorChip = () => {
    return (
    <>
    <ColorChipUnit />
    </>
    )
}

export default ColorChip;