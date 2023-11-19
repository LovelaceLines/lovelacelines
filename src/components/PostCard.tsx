import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export interface IPostProps {
  title: string;
  subtitle: string;
  coverImage: string;
  tags: string[];
  creationDate: Date;
  content: string;
};

export interface IVariantProps {
  variant: 'slim' | 'regular' | 'wide';
};  

export const PostCard = (variant: IVariantProps, post: IPostProps) => {
  console.log(variant, post);

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={post.coverImage}
          alt={post.title}
        />
        <CardContent>
          <Typography>
            {post.title}
          </Typography>
          <Typography>
            {post.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};