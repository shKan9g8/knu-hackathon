import * as React from "react";
import {Link} from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Hospital from './Hospital';
import { TableBody } from "@mui/material";
import { motion } from "framer-motion";
import { borderRadius } from "@mui/system";

const images = [
  {
    id : 1,
    url: "/menu_img/info.png",
    title: "공공의료란?",
    width: "30%"
  },
  {
    id : 2,
    url: "/menu_img/menu.png",
    title: "병원 및 위치",
    width: "30%"
  },
  {
    id : 3,
    url: "/menu_img/notice.png",
    title: "공지사항",
    width: "30%"
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 480,
  margin : 20,
  left : 80,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 250
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      borderRadius: "20%",
      border: "4px solid currentColor",
    }
  }
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius:"15%",
  backgroundSize: "cover",
  backgroundPosition: "center 40%"
});

const Image = styled("span")(({ theme }) => ({
  position: "relative",
  left: 0,
  right: 0,
  top: 200,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "relative",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity")
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "relative",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity")
}));

const clicked=(id)=>{
  if(id==1){
    window.location.assign('/')
  }
  else if(id==2){
    window.location.assign('/hospital')
  }
  else if(id==3){
    window.location.assign('/test')
  }
}


export default function ButtonBases() {
  document.body.style.backgroundColor="white"
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:2}} >
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton 
          focusRipple
          key={image.title}
          style={{
            width: 360
          }}
          onClick = {()=>clicked(image.id)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
              }}
            ><strong>
              {image.title}</strong>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </motion.div>
  );
}
