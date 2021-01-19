import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Reviews from '../../client/components/Reviews';
import { getURL, patchURL } from '../../client/__mocks__/axios';

const meta = {
  product_id: 99,
  avgRating: 2.7,
  totalReviews: 98,
  oneStarReviews: 18,
  twoStarReviews: 31,
  threeStarReviews: 26,
  fourStarReviews: 10,
  fiveStarReviews: 13,
};

describe('Reviews', () => {
  let container;
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    render(<Reviews productId={99} meta={meta} />, container);
    expect(await screen.findByText('Reviews')).toBeInTheDocument();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('content should not be visible on render', () => {
    const content = document.getElementById('reviews-content');
    expect(content).not.toBeVisible();
  });

  test('content should be visible after title bar is clicked', () => {
    const content = document.getElementById('reviews-content');
    const titleBar = document.getElementById('reviews-title');
    fireEvent.click(titleBar);
    expect(content).toBeVisible();
  });

  test('show more/less button will set limit on click', async () => {
    const showBtn = document.getElementById('RSM-text');
    expect(/limit=5/.test(getURL)).toBe.Truthy;
    fireEvent.click(showBtn);
    await screen.findByText('Show Less');
    expect(showBtn).toContainHTML('Show Less');
    expect(/limit=10/.test(getURL)).toBe.Truthy;
  });

  test('Review List item will send a patch request to server on helpful click', () => {
    const reviewItems = document.getElementsByClassName('reviews-list-item');
    const testItem = Array.from(reviewItems)[0].id;
    const reviewItemBtns = document.getElementsByClassName('RLI-helpful-thumb');
    const testBtn = Array.from(reviewItemBtns)[0]
    fireEvent.click(testBtn);
    expect(patchURL.includes(testItem)).toBe.Truthy;
  });
});
