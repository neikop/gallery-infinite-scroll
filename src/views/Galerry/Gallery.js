import React from 'react';
import { Feed, Icon, Image, Placeholder } from 'semantic-ui-react';
import { imageService } from 'services/image';

const Gallery = () => {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const offset = React.useRef(Math.floor(Math.random() * 10) + 1);
  const isStop = React.useRef(false);
  const isLast = React.useRef(false);

  const onScroll = React.useCallback(() => {
    const { scrollTop, scrollHeight } = document.documentElement;
    if (window.innerHeight + scrollTop + 120 < scrollHeight) return;

    if (isLast.current || isStop.current) return;
    setIsLoading(true);
    isStop.current = true;
    imageService
      .loadImages({ page: offset.current, per_page: 25 })
      .then((data) => {
        const { hits } = data;
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
              <Image size="small" src={image.userImageURL || '//react.semantic-ui.com/logo.png'} />
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
      {isLoading && (
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Image />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      )}
    </div>
  );
};

export default Gallery;
