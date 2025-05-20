// src/hooks/usePDFControls.ts
import { useContext } from "react";
import { PDFContext } from "../renderers/pdf/state";
import { setPDFPaginated, setZoomLevel } from "../renderers/pdf/state/actions";

export const usePDFControls = () => {
  const {
    state: {
      mainState,
      paginated,
      zoomLevel,
      numPages,
      zoomJump,
      defaultZoomLevel,
    },
    dispatch,
  } = useContext(PDFContext);

  const currentDocument = mainState?.currentDocument || null;

  const zoomIn = () => dispatch(setZoomLevel(zoomLevel + zoomJump));
  const zoomOut = () => dispatch(setZoomLevel(zoomLevel - zoomJump));
  const resetZoom = () => dispatch(setZoomLevel(defaultZoomLevel));
  const togglePagination = () => dispatch(setPDFPaginated(!paginated));

  return {
    currentDocument,
    zoomLevel,
    paginated,
    numPages,
    defaultZoomLevel,
    zoomIn,
    zoomOut,
    resetZoom,
    togglePagination,
  };
};
