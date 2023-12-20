// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const images=['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg',
'./images/7.jpg','./images/9.jpg','./images/10.jpg']

// export function YourComponent(){
//   const images=['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg',
// './images/7.jpg','./images/9.jpg','./images/10.jpg']
//   return (
//     <div>
//       <h1>Your Image Gallery</h1>
//       <ImageGallery images={images} />
//     </div>
//   );
// };


export function ImageGallery(){
  return (
    <Container>
      <h1>Image Gallery</h1>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <img
              src={image}
              alt={image}
             // className="img-fluid"
             className="img-thumbnail"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGallery;
