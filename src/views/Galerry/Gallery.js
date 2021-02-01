import React from 'react';
import { Dimmer, Feed, Icon, Image, Loader } from 'semantic-ui-react';
import axios from 'axios';

const key = '20105758-5508685e470f1fe6a4c06f630';

const instance = axios.create({
  baseURL: 'https://pixabay.com',
});

const Gallery = () => {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const offset = React.useRef(1);
  const isStop = React.useRef(false);
  const isLast = React.useRef(false);

  const onScroll = React.useCallback(() => {
    const { scrollTop, scrollHeight } = document.documentElement;
    if (window.innerHeight + scrollTop + 120 < scrollHeight) return;

    if (isLast.current || isStop.current) return;
    setIsLoading(true);
    isStop.current = true;
    instance
      .get(`/api`, {
        params: { key, page: offset.current, per_page: 25 },
      })
      .then((response) => {
        const { hits } = response.data;
        setImages((current) => {
          const next = current.concat(hits).slice(0, 105);
          isLast.current = next.length >= 105;
          return next;
        });

        offset.current = offset.current + 1;
      })
      .catch(console.warn)
      .then(() => {
        setIsLoading(false);
        isStop.current = false;
      });
  }, []);

  React.useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <Feed>
        {images.map((image) => (
          <Feed.Event key={image.id}>
            <Feed.Label>
              <Image size="small" src={image.userImageURL} />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{image.user}</Feed.User>
              </Feed.Summary>
              <Feed.Extra images>
                <img style={{ width: 'unset' }} src={image.previewURL} />
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />
                  {image.likes} Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        ))}
      </Feed>
      <div style={{ height: 60, width: 240, position: 'relative' }}>
        <Loader active={isLoading} />
      </div>
    </div>
  );
};

export default Gallery;
