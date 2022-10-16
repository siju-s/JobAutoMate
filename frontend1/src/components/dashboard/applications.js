import { formatDistanceToNow, subHours, format, parseISO } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';

export const Applications = (props) => {
  if (props.jobs === []) return (<></>)
  else return (<Card {...props}>
    <CardHeader
      subtitle={`${props.jobs.length} in total`}
      title={props.titleToShow}
    />
    <Divider />
    <List>
      {props.jobs.filter(product => props.status.includes(product.status)).map((product, i) =>
        (<ListItem
          divider={i < props.jobs.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = '/static/images/jobs/product_2.png';
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`${product.deadline}`}
          />
          <ListItemText
              secondary={product.role}
          />
          <IconButton
            edge="end"
            size="small"
          >
          </IconButton>
        </ListItem>
        )
      )}
    </List>
    {/* <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box> */}
  </Card>
)
};
