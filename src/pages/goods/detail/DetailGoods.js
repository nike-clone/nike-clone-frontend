import styled from "styled-components";
import shoe1 from 'assets/images/shoe1.jpg'
import GoodsSizeFilter from "components/goods/filter/size/GoodsSizeFilter";
const Page = styled.div`
max-width:1440px;
margin:0 auto;
`
const DetailContainer = styled.div`
display:flex;
width:100%;
`
const GoodsImgListWrapper = styled.div`

`
const DetailInfoWrapper = styled.div`
width:100%;
`
const DetailImgList = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap:5px;
grid-row-gap:5px;
width:100%;
li {
    width:400px;
}
li > img {
    width:100%;
}
`
const InfoTop = styled.div`
display:flex;
justify-content:space-between;

`
const GoodsName= styled.span`
font-size:30px;
font-weight:600;
`
const SizeLabel = styled.span`
display:block;
`
const DetailGoods = () => {
    return (
        <Page>
        <DetailContainer>
            <GoodsImgListWrapper>
               <DetailImgList>
                <li>
                    <img src={shoe1} alt="list"/>
                </li>
                <li>
                    <img src={shoe1} alt="list"/>
                </li>
                <li>
                    <img src={shoe1} alt="list"/>
                </li>
                <li>
                    <img src={shoe1} alt="list"/>
                </li>
               </DetailImgList>
            </GoodsImgListWrapper>
            <DetailInfoWrapper>
    <InfoTop>
        <span>남성 신발</span>
        <span>219000</span>
    </InfoTop>
    <GoodsName>헤럴드 이라니마</GoodsName>
    <SizeLabel>사이즈</SizeLabel>
    <GoodsSizeFilter />
            </DetailInfoWrapper>
        </DetailContainer>
        </Page>
    )
}

export default DetailGoods;