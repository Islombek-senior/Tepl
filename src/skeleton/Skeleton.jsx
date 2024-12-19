import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // To'g'ri import
import Skeleton from "@mui/material/Skeleton";

function Media(props) {
  const { loading = false } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          loading ? <Skeleton width="80%" /> : <Typography>Title</Typography>
        }
        subheader={
          loading ? (
            <Skeleton width="40%" />
          ) : (
            <Typography>Subheader</Typography>
          )
        }
      />
    </Card>
  );
}

export default Media;
