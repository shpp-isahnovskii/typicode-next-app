'use client';

import StarIcon from '../_assets/icons/StarIcon';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { toggleFavorite } from '@/lib/slices/favoriteSlice';

const MyFavorite = ({ id, className = '' }: { id: number; className?: string }) => {
  const myFavorites = useSelector(
    (state: RootState) => state.myFavorites.favorites,
  );
  const dispatch = useDispatch<AppDispatch>();

  const isInFavoriteList = myFavorites.includes(id);
  return (
    <>
      <StarIcon
        className={className}
        isActive={isInFavoriteList}
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation();
          dispatch(toggleFavorite(id));
        }}
      />
    </>
  );
};

export default MyFavorite;
