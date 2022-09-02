import { renderHook, act, waitFor } from '@testing-library/react';
import { useGoodsColors, useGoodsDetail, useGoodsItems } from 'hooks/query/useGoods';
import { rest } from 'msw';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { server } from 'setupTests';
import { createWrapper, handlers, renderWithClient } from './utils';

describe('useGoodsColor hook test', () => {
  test('successful useGoodsColors query hook', async () => {
    const { result } = renderHook(() => useGoodsColors(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current?.isSuccess).toBe(true));

    expect(result.current.data).toStrictEqual([
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
    ]);
  });
});

describe('useGoodsItems hook test', () => {
  test('successful useGoodsItem query hook when gender is male and newest updt', async () => {
    const { result } = renderHook(() => useGoodsItems('Male', null, null, 'new'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data[0].gender.gender).toBe('Male');
  });
});

describe('상품 상세 query hook test', () => {
  test('successful useGoodsDetail query hook', async () => {
    const { result } = renderHook(() => useGoodsDetail(94), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data.id).toBe(94);
  });
});
