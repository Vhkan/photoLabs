import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';
// import photos from 'mocks/photos';

const PhotoDetailsModal = ({ updateDisplayModal, displayModal, favorite, toggleFavorite }) => {
  console.log('Modal data is:', displayModal);

  const { urls: { full, regular }, user, location: { city, country }, id, similar_photos } = displayModal;
  const { name, profile } = user;
  // const { photo2, photo3, photo4, photo5 } = similar_photos;

  const similarPhotoes = Object.values(displayModal.similar_photos)

  return (
    <div className="photo-details-modal">
      <button onClick={updateDisplayModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <div>
          <img className='photo-details-modal__image' src={full} alt="Photo" />

          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={`${profile}`} alt="Profile Image" />

            <div className="photo-details-modal__photographer-info">{`${name}`}</div>
            <div className='photo-details-modal__photographer-location'> {`${city}, ${country}`}</div>
          </div>

          <div className='photo-details-modal__images'>

            <PhotoList similarPhotoes={similarPhotoes} 
            displayModal={displayModal} 
            favorite={favorite} 
            toggleFavorite={toggleFavorite} 
            updateDisplayModal={updateDisplayModal} />

            {/* <PhotoFavButton toggleFavorite={toggleFavorite} favorite={favorite} id={id}/> */}

            <PhotoListItem photo={displayModal} 
            toggleFavorite={toggleFavorite} 
            favorite={favorite}/>
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoDetailsModal;