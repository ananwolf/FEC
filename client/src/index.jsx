import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewEntry from './Reviews/components/ReviewEntry.jsx';
import RatingEntry from './Reviews/components/RatingEntry.jsx';
import OverviewApp from './productOverview/overviewApp.jsx';
import QAwidget from './QA/QAwidget.jsx';
import RelatedItemsAndComparison from './relatedItems/relatedItemsAndComparison.jsx';


const App = () => {
  const [productId, setProductId] = useState(13023);
  const [reviewCount, setReviewCount] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div>
        <OverviewApp productId={productId}
          reviewCount={reviewCount}
          rating={rating}
          setProductId={setProductId} />
      </div>
      <div>
        <RelatedItemsAndComparison
          productId={productId}
          setProductId={setProductId} />
      </div>
      <div>
        {/* <QAwidget
          productId={productId}
          setProductId={setProductId}
          getProductById={getProductById}
          currentProduct={currentProduct}/> */}
      </div>
      <div>
        <ReviewEntry productId={productId}
          setProductId={setProductId}
          setReviewCount={setReviewCount}
          setRating={setRating} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));