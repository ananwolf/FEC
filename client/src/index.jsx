import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import OverviewApp from './productOverview/overviewApp.jsx';
import RelatedItemsAndComparison from './relatedItems/relatedItemsAndComparison.jsx';

const App = () => {
  const [productId, setProductId] = useState(13023);

  useEffect(() => {
    console.log(`ProductId changed to ${productId}`);
  }, [productId]);

  // useEffect(async () => {
  //   // fetch our default product
  //     // id = 13023
  //   await fetch()

  // }, []);

  return (
    <div>
      <div>
        <OverviewApp />
      </div>
      <div>
        <RelatedItemsAndComparison productId={productId} setProductId={setProductId}/>
      </div>
    </div>);
};

ReactDOM.render(<App />, document.getElementById('app'));