import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsOverview from './Reviews/ReviewsOverview.jsx';
import OverviewApp from './productOverview/overviewApp.jsx';
import QAwidget from './QA/QAwidget.jsx';
import RelatedItemsAndComparison from './relatedItems/relatedItemsAndComparison.jsx';


const App = () => {
  const [productId, setProductId] = useState(13023);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    axios.get('/getProduct', {params: {productId: productId }})
      .then((response)=> {
        setCurrentProduct(response.data);
      })
      .catch((err)=> {
        console.log(err);
        return;
      });
  }, [productId]);

  const getProductById = async (id) => {
    try {
      let newProduct = {};
      await axios.get('/getProduct', {params: {productId: id }})
        .then((response)=> {
          newProduct = response.data;
        })
        .catch((err)=> {
          console.log(err);
          return;
        });
      return newProduct;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <OverviewApp productId={productId}
          currentProduct={currentProduct}
          setProductId={setProductId}
          getProductById={getProductById}/>
      </div>
      <div>
        <RelatedItemsAndComparison
          productId={productId}
          product={currentProduct}
          setProductId={setProductId}
          getProductById={getProductById}/>
      </div>
      <div>
        <QAwidget />
      </div>
      <div>
        <ReviewsOverview />
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));