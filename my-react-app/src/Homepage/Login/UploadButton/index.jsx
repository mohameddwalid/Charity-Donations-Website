import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 0.5,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadButton() {
  return (
    <Button
     component="label"
     role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      style={{ marginRight: "20px", marginTop:"0px"}}
                sx={{borderRadius: '2px',
                            backgroundColor: '#fd580b',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#ff6e40',
                            }
                            }}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}