import { imageClient } from 'services/axios';

const loadImages = (params) => imageClient.get(`/api`, { params });

export const imageService = {
  loadImages,
};
