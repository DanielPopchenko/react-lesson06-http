import React from 'react';
import Product from './Product';
import Section from './Section/Section';
import BookList from './BookList/BookList';
import favouriteBooks from '../books.json';

// ! Обязательно компоненты с Большой буквы
export default function App() {
  return (
    <>
      <BookList books={favouriteBooks} />
      <h1>Welcome!</h1>
      <Section title="Best sellings">
        <Product
          name="Mersedes"
          imgUrl="https://www.topgear.com/sites/default/files/images/cars-road-test/2020/06/d327460dc4dcdc379157dec54233dc0c/pcgb20_0355_fine.jpg"
          price={85400}
          quantity={30}
        />
      </Section>

      <Section title="Recommended">
        <Product
          imgUrl="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/3-0-csl/bmw-3-0-csl-stage-teaser.png"
          name="BMW"
          price={145000}
          quantity={100}
        />
      </Section>

      <Section title="Your choise">
        <Product
          imgUrl="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Continental%20GTModelImage.jpg&w=386&h=256&q=90&c=1"
          name="Bentley"
          price={245000}
          quantity={10}
        />
      </Section>

      <Section title="Your choise">
        <Product
          imgUrl="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Continental%20GTModelImage.jpg&w=386&h=256&q=90&c=1"
          name="Bentley"
          price={125000}
          quantity={100}
        />
      </Section>
    </>
  );
}
