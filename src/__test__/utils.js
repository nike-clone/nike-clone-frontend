import { render } from '@testing-library/react';
import { rest } from 'msw';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
const BASE_URL = 'https://nike-clone-ryan.herokuapp.com/api';
export const handlers = [
  rest.get('https://nike-clone-ryan.herokuapp.com/api/goods/colors', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 4,
          name: '베이지',
          colorCode: '#eee597',
        },
        {
          id: 14,
          name: '검정색',
          colorCode: '#000000',
        },
        {
          id: 24,
          name: '파랑색',
          colorCode: '#4b85cf',
        },
        {
          id: 34,
          name: '갈색',
          colorCode: '#71553d',
        },
        {
          id: 44,
          name: '금색',
          colorCode: '#d5d546',
        },
        {
          id: 54,
          name: '회색',
          colorCode: '#737373',
        },
        {
          id: 64,
          name: '녹색',
          colorCode: '#429028',
        },
        {
          id: 74,
          name: '쑥색',
          colorCode: '#7f7e26',
        },
        {
          id: 84,
          name: '남색',
          colorCode: '#3e4b72',
        },
        {
          id: 94,
          name: '주황색',
          colorCode: '#dc6a34',
        },
        {
          id: 104,
          name: '분홍색',
          colorCode: '#d73188',
        },
        {
          id: 114,
          name: '보라색',
          colorCode: '#6241ab',
        },
        {
          id: 124,
          name: '빨강색',
          colorCode: '#b42519',
        },
        {
          id: 134,
          name: '은색',
          colorCode: '#c4c4c4',
        },
        {
          id: 144,
          name: '흰색',
          colorCode: '#ffffff',
        },
        {
          id: 154,
          name: '노란색',
          colorCode: '#f4c443',
        },
      ])
    );
  }),
  rest.get('https://nike-clone-ryan.herokuapp.com/api/goods', (req, res, ctx) => {
    // const gender = req.url.searchParams.get('gender');

    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 94,
            name: '나이키 에어맥스 플라이니트 레이서',
            price: 189000,
            salePrice: 150000,
            salePercentage: null,
            productImagePrimary:
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg?gallery',
            productImageExtra: [
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg?gallery',
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg?browse',
            ],
            createdAt: '2022-08-11T08:26:09.461Z',
            gender: {
              id: 4,
              gender: 'Male',
              name: '남성',
            },
            classification: {
              id: 14,
              type: '라이프스타일',
              alias: 'lifestyle',
            },
            goodsItems: [
              {
                id: 204,
                stock: 30,
                size: 250,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
              {
                id: 214,
                stock: 30,
                size: 260,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
              {
                id: 224,
                stock: 30,
                size: 270,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
              {
                id: 234,
                stock: 30,
                size: 280,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
              {
                id: 244,
                stock: 30,
                size: 290,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
              {
                id: 254,
                stock: 30,
                size: 250,
                color: {
                  id: 54,
                  name: '회색',
                  colorCode: '#737373',
                },
              },
              {
                id: 264,
                stock: 30,
                size: 260,
                color: {
                  id: 54,
                  name: '회색',
                  colorCode: '#737373',
                },
              },
              {
                id: 274,
                stock: 30,
                size: 270,
                color: {
                  id: 54,
                  name: '회색',
                  colorCode: '#737373',
                },
              },
            ],
          },
          {
            id: 84,
            name: '나이키 줌X 인빈서블 런 플라이니트 2',
            price: 199000,
            salePrice: 160000,
            salePercentage: 10,
            productImagePrimary:
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DO8991-217/a04b8057-bebb-4e4e-bed7-05d66d1f84d4_primary.jpg?browse',
            productImageExtra: [
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH5425-103/1fca4b7d-1562-49fe-94c3-ab701319dd1c_primary.jpg?browse',
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH5425-001/b5f8ca99-f2f5-4d85-8df4-341c9f9c5060_primary.jpg?browse',
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH5425-003/4006f53a-08eb-4ef6-97b5-0c57f7a69d2f_primary.jpg?browse',
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH5425-102/6e036998-0810-47b9-8666-8c06430bca36_primary.jpg?browse',
              'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH5425-600/1c766668-b5c2-4283-bbfe-a30735c480a9_primary.jpg?browse',
            ],
            createdAt: '2022-08-11T08:26:00.876Z',
            gender: {
              id: 4,
              gender: 'Male',
              name: '남성',
            },
            classification: {
              id: 24,
              type: '러닝',
              alias: 'running',
            },
            goodsItems: [
              {
                id: 4,
                stock: 30,
                size: 250,
                color: {
                  id: 54,
                  name: '회색',
                  colorCode: '#737373',
                },
              },
              {
                id: 14,
                stock: 30,
                size: 260,
                color: {
                  id: 54,
                  name: '회색',
                  colorCode: '#737373',
                },
              },
              {
                id: 24,
                stock: 30,
                size: 270,
                color: {
                  id: 54,
                  name: '회색',
                  colorCode: '#737373',
                },
              },
              {
                id: 34,
                stock: 30,
                size: 240,
                color: {
                  id: 14,
                  name: '검정색',
                  colorCode: '#000000',
                },
              },
              {
                id: 44,
                stock: 30,
                size: 280,
                color: {
                  id: 14,
                  name: '검정색',
                  colorCode: '#000000',
                },
              },
              {
                id: 54,
                stock: 30,
                size: 290,
                color: {
                  id: 14,
                  name: '검정색',
                  colorCode: '#000000',
                },
              },
              {
                id: 64,
                stock: 30,
                size: 300,
                color: {
                  id: 14,
                  name: '검정색',
                  colorCode: '#000000',
                },
              },
              {
                id: 94,
                stock: 30,
                size: 240,
                color: {
                  id: 24,
                  name: '파랑색',
                  colorCode: '#4b85cf',
                },
              },
              {
                id: 104,
                stock: 30,
                size: 230,
                color: {
                  id: 24,
                  name: '파랑색',
                  colorCode: '#4b85cf',
                },
              },
              {
                id: 114,
                stock: 30,
                size: 250,
                color: {
                  id: 144,
                  name: '흰색',
                  colorCode: '#ffffff',
                },
              },
              {
                id: 124,
                stock: 30,
                size: 260,
                color: {
                  id: 144,
                  name: '흰색',
                  colorCode: '#ffffff',
                },
              },
              {
                id: 134,
                stock: 30,
                size: 280,
                color: {
                  id: 144,
                  name: '흰색',
                  colorCode: '#ffffff',
                },
              },
              {
                id: 184,
                stock: 30,
                size: 290,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
              {
                id: 194,
                stock: 30,
                size: 280,
                color: {
                  id: 124,
                  name: '빨강색',
                  colorCode: '#b42519',
                },
              },
            ],
          },
        ],
        meta: {
          requestedCount: 20,
          offset: 0,
          responseCount: 2,
        },
      })
    );
  }),
  rest.get(`${BASE_URL}/goods/:goodsId`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 94,
        name: '나이키 에어맥스 플라이니트 레이서',
        price: 189000,
        salePrice: 150000,
        salePercentage: null,
        productImagePrimary:
          'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg?gallery',
        productImageExtra: [
          'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg?gallery',
          'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg?browse',
        ],
        createdAt: '2022-08-11T08:26:09.461Z',
        gender: {
          id: 4,
          gender: 'Male',
          name: '남성',
        },
        classification: {
          id: 14,
          type: '라이프스타일',
          alias: 'lifestyle',
        },
        goodsItems: [
          {
            id: 204,
            stock: 30,
            color: {
              id: 124,
              name: '빨강색',
              colorCode: '#b42519',
            },
            size: 250,
            goodsItemImages: {
              id: 64,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '빨강색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/aa2eb142-b89a-4a57-8c7b-6068e8398851_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/71121bcc-eff7-45e3-a0ff-ff385c7678ba_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/38dbc5de-aa50-42fd-82c9-5d139adb9548_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/e4dac36e-c840-4c12-87eb-c5e779dba236_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/eeac5ff8-7f94-4b2f-9087-2026a42556a6_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/4429236e-d89a-47a1-b4a7-4cf025494eca_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/14ebe979-3182-44e4-99ce-0b9413bd7205_8.jpg',
              ],
            },
          },
          {
            id: 214,
            stock: 30,
            color: {
              id: 124,
              name: '빨강색',
              colorCode: '#b42519',
            },
            size: 260,
            goodsItemImages: {
              id: 64,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '빨강색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/aa2eb142-b89a-4a57-8c7b-6068e8398851_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/71121bcc-eff7-45e3-a0ff-ff385c7678ba_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/38dbc5de-aa50-42fd-82c9-5d139adb9548_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/e4dac36e-c840-4c12-87eb-c5e779dba236_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/eeac5ff8-7f94-4b2f-9087-2026a42556a6_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/4429236e-d89a-47a1-b4a7-4cf025494eca_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/14ebe979-3182-44e4-99ce-0b9413bd7205_8.jpg',
              ],
            },
          },
          {
            id: 224,
            stock: 30,
            color: {
              id: 124,
              name: '빨강색',
              colorCode: '#b42519',
            },
            size: 270,
            goodsItemImages: {
              id: 64,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '빨강색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/aa2eb142-b89a-4a57-8c7b-6068e8398851_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/71121bcc-eff7-45e3-a0ff-ff385c7678ba_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/38dbc5de-aa50-42fd-82c9-5d139adb9548_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/e4dac36e-c840-4c12-87eb-c5e779dba236_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/eeac5ff8-7f94-4b2f-9087-2026a42556a6_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/4429236e-d89a-47a1-b4a7-4cf025494eca_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/14ebe979-3182-44e4-99ce-0b9413bd7205_8.jpg',
              ],
            },
          },
          {
            id: 234,
            stock: 30,
            color: {
              id: 124,
              name: '빨강색',
              colorCode: '#b42519',
            },
            size: 280,
            goodsItemImages: {
              id: 64,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '빨강색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/aa2eb142-b89a-4a57-8c7b-6068e8398851_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/71121bcc-eff7-45e3-a0ff-ff385c7678ba_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/38dbc5de-aa50-42fd-82c9-5d139adb9548_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/e4dac36e-c840-4c12-87eb-c5e779dba236_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/eeac5ff8-7f94-4b2f-9087-2026a42556a6_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/4429236e-d89a-47a1-b4a7-4cf025494eca_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/14ebe979-3182-44e4-99ce-0b9413bd7205_8.jpg',
              ],
            },
          },
          {
            id: 244,
            stock: 30,
            color: {
              id: 124,
              name: '빨강색',
              colorCode: '#b42519',
            },
            size: 290,
            goodsItemImages: {
              id: 64,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '빨강색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/3ee2af46-df43-4dcb-a88d-21e209379ed0_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/aa2eb142-b89a-4a57-8c7b-6068e8398851_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/71121bcc-eff7-45e3-a0ff-ff385c7678ba_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/38dbc5de-aa50-42fd-82c9-5d139adb9548_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/e4dac36e-c840-4c12-87eb-c5e779dba236_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/eeac5ff8-7f94-4b2f-9087-2026a42556a6_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/4429236e-d89a-47a1-b4a7-4cf025494eca_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-300/14ebe979-3182-44e4-99ce-0b9413bd7205_8.jpg',
              ],
            },
          },
          {
            id: 254,
            stock: 30,
            color: {
              id: 54,
              name: '회색',
              colorCode: '#737373',
            },
            size: 250,
            goodsItemImages: {
              id: 74,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '회색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/6bae4019-50f6-433e-978e-9e0e8429b0b8_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/dded6221-a576-4f35-b5f1-487e39b1a827_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/8c0d7f88-601e-483d-a800-1f21333fc329_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/8f485de3-aa74-4d4d-88e6-f78763b5fd04_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/a6cdfff2-daae-44eb-b5f0-9d146e945008_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/d035c1eb-baf6-4273-abb1-623a423b48c9_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/adedb691-c8a8-4473-a20d-dabff53f5df9_8.jpg',
              ],
            },
          },
          {
            id: 264,
            stock: 30,
            color: {
              id: 54,
              name: '회색',
              colorCode: '#737373',
            },
            size: 260,
            goodsItemImages: {
              id: 74,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '회색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/6bae4019-50f6-433e-978e-9e0e8429b0b8_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/dded6221-a576-4f35-b5f1-487e39b1a827_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/8c0d7f88-601e-483d-a800-1f21333fc329_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/8f485de3-aa74-4d4d-88e6-f78763b5fd04_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/a6cdfff2-daae-44eb-b5f0-9d146e945008_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/d035c1eb-baf6-4273-abb1-623a423b48c9_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/adedb691-c8a8-4473-a20d-dabff53f5df9_8.jpg',
              ],
            },
          },
          {
            id: 274,
            stock: 30,
            color: {
              id: 54,
              name: '회색',
              colorCode: '#737373',
            },
            size: 270,
            goodsItemImages: {
              id: 74,
              goodsName: '나이키 에어맥스 플라이니트 레이서',
              color: '회색',
              goodsItemImages: [
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/b17f099a-b928-437e-8f76-c6368df846e4_primary.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/6bae4019-50f6-433e-978e-9e0e8429b0b8_2.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/dded6221-a576-4f35-b5f1-487e39b1a827_3.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/8c0d7f88-601e-483d-a800-1f21333fc329_4.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/8f485de3-aa74-4d4d-88e6-f78763b5fd04_5.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/a6cdfff2-daae-44eb-b5f0-9d146e945008_6.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/d035c1eb-baf6-4273-abb1-623a423b48c9_7.jpg',
                'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DJ6106-002/adedb691-c8a8-4473-a20d-dabff53f5df9_8.jpg',
              ],
            },
          },
        ],
        colors: [
          {
            id: 124,
            name: '빨강색',
            colorCode: '#b42519',
          },
          {
            id: 54,
            name: '회색',
            colorCode: '#737373',
          },
        ],
      })
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
  );
}
